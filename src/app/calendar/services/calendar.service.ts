import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  public selectedDate: Date;
  public todaysDate: Date;
  public numOfDaysPerMonth: Array<number> = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  public dateFormatOptions: { [key: string]: string };
  public labelColours: Array<string> = ['orange', 'blue', 'pink', 'green', 'red'];

  constructor(private http: HttpClient) {
    this.init();
  }

  public init(): void {
    this.todaysDate = new Date();
    this.dateFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  }

  public getData(): Observable<any> {
    return this.http.get('http://localhost:4200/assets/data.json');
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
}
