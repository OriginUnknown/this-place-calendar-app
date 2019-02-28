import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import * as fromStore from '../../calendar/store';
import { FormGroup } from '@angular/forms';
import * as CALENDAR_COPY from '../../resources/i18n/en-GB';
import { EventDetails } from '../model/event.model';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  public selectedDate: Date;
  public todaysDate: Date;
  public numOfDaysPerMonth: Array<number> = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  public dateFormatOptions: { [key: string]: string };
  public labelColours: Array<string> = ['orange', 'blue', 'pink', 'green', 'red'];


  constructor(
    private _store: Store<fromStore.CalendarAppState>
    ) {
      this.init();
    }

    public init(): void {
      this._store.pipe(select(fromStore.getCalendar));
      this.todaysDate = new Date();
      this.dateFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  }

  public getEvents$(): Observable<fromStore.CalendarState> {
    return this._store.pipe(select(fromStore.getCalendar));
  }

  public setSelectedDate(year, month, date): void {
    this.selectedDate = new Date(year, month, date);
  }

  public getSelectedDate(): Date {
    return this.selectedDate;
  }

  public getTodaysDate(): Date {
    return this.todaysDate;
  }

  public getNumOfDaysPerMonth(year: number): Array<number> {
    const numOfDaysPerMonthCopy = this.numOfDaysPerMonth.slice();
    if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
      numOfDaysPerMonthCopy[1] = 29;
    }
    return numOfDaysPerMonthCopy;
  }

  public getSelectedDateString(): string {
    return this.selectedDate.toLocaleString('en-GB', this.dateFormatOptions );
  }

  public getLocalTimeString(): string {
    return this.selectedDate.toLocaleTimeString();
  }

  public getTimeSlots(): Array<string> {
    const millisecondsInADay: number = 8.64e+7;
    const millisecondsIn30Mins: number = 1.8e+6;
    const timeSlots: Array<string> = [];
    const dt = new Date();
    dt.setHours(0, 0, 0, 0);
    let timeSlotsInADay: number = 0;
    while (timeSlotsInADay < millisecondsInADay) {
      timeSlots.push(new Date(dt.getTime() + timeSlotsInADay).toLocaleTimeString());
      timeSlotsInADay = timeSlotsInADay + millisecondsIn30Mins;
    }
    return timeSlots;
  }

  public filterStartTimeSlots(endTimeslots: Array<string>, event: string): Array<string> {
    return this.getTimeSlots().filter((slot, i) => {
      if (i < endTimeslots.indexOf(event)) {
        return slot;
      }
    });
  }

  public filterEndTimeSlots(startTimeslots: Array<string>, event: string): Array<string> {
    return this.getTimeSlots().filter((slot, i) => {
      if (i > startTimeslots.indexOf(event)) {
        return slot;
      }
    });
  }


  public getLabelColour(): Array<string> {
    return this.labelColours;
  }

  public createNewDateObj(
    date: string, dateSeparator: string,
    time: string, timeSeparator: string
  ): Date {
    const dt: Array<any> = date.split(dateSeparator).map((num, i) => {
      // minus 1 to get the correct month
      return (i === 1) ? (parseInt(num, 10) - 1) : parseInt(num, 10);
    });
    const tm: Array<any> = time.split(timeSeparator).map(num => {
      return parseInt(num, 10);
    });
    return new Date(dt[0], dt[1], dt[2], tm[0], tm[1], tm[2]);
  }

  public endDateTimeIsLessThanStart(startDateTime: number, endDateTime: number): boolean {
    return endDateTime < startDateTime;
  }

  public validateForm(form: FormGroup, type: string = ''): EventDetails | null {
    const startDateObj = new Date(form.value.startDate);
    const month: string = CALENDAR_COPY.APP_CONST.CALENDAR.MONTHS[startDateObj.getMonth()].toLowerCase();
    const date: number = startDateObj.getDate();
    const startDateTime: number = this.createNewDateObj(form.value.startDate, '-', form.value.startTime, ':').getTime();
    const endDateTime: number = this.createNewDateObj(form.value.endDate, '-', form.value.endTime, ':').getTime();
    if (form.valid) {
      if (this.endDateTimeIsLessThanStart(startDateTime, endDateTime)) {
        alert(`End date cannot be less than start date. Please amend your dates`);
        return null;
      }
      if (type === 'AMEND') {
        return {
          ...form.value,
          startDateTime,
          endDateTime,
          metadata: {
            date,
            month
          }
        };
      }
      return {
        ...form.value,
        startDateTime,
        endDateTime,
        id: Math.floor(Math.random() * 999) + 1 ,
        metadata: {
          date,
          month
        }
      };
    }
  }
}
