import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { CalendarService } from './services/calendar.service';
import * as CALENDAR_COPY from '../resources/i18n/en-GB'; // would modify to use the translateService
import { EventDetails } from './model/event.model';
import * as fromStore from '../calendar/store';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent implements OnInit {
  public currentDate: Date;
  public selectedDate: Date;
  public day: string;
  public date: string;
  public month: string;
  public year: string;
  public weekDays: Array<string>;
  public numOfDaysInMonth: number;
  public startDayOfSelectedMonth: number;
  public numOfWeeksInMonth: number;
  public eventsHaveLoaded: boolean = false;
  public calendarEventsForSelectedMonth: {[key: string]: Array<EventDetails>};
  public numOfDaysPerMonth: Array<number>;
  public getEventsForTheMonth$: Observable<any>;

  constructor(
    private calendarService: CalendarService,
    private store: Store<fromStore.CalendarState>
  ) { }

  ngOnInit() {
    this.configureCalendar();
  }

  public configureCalendar(
        year: number = this.calendarService.getTodaysDate().getFullYear(),
        month: number = this.calendarService.getTodaysDate().getMonth(),
        date: number = this.calendarService.getTodaysDate().getDate()
    ): void {
      // this.getEventsForTheMonth$ = this.store.select(fromStore.getAllEventsForSelectedMonth());
    this.calendarService.setSelectedDate(year, month, date);
    this.selectedDate = this.calendarService.getSelectedDate();
    this.date = this.selectedDate.getDate().toString();
    this.day = CALENDAR_COPY.APP_CONST.CALENDAR.WEEKDAYS[this.selectedDate.getDay()];
    this.month = CALENDAR_COPY.APP_CONST.CALENDAR.MONTHS[this.selectedDate.getMonth()];
    this.year = this.selectedDate.getFullYear().toString();
    this.weekDays = CALENDAR_COPY.APP_CONST.CALENDAR.WEEKDAYS;
    this.numOfDaysPerMonth = this.calendarService.getNumOfDaysPerMonth(Number(this.year));
    this.numOfDaysInMonth = this.numOfDaysPerMonth[this.selectedDate.getMonth()];
    this.startDayOfSelectedMonth = this.getStartDayOfSelectedMonth();
    this.numOfWeeksInMonth = this.getNumOfWeeksInMonth(this.numOfDaysInMonth);
    this.calendarService.getData().subscribe( data => {
      this.calendarEventsForSelectedMonth = this.getCalendarEvents(data, this.month);
      this.eventsHaveLoaded = true;
    },
    err => console.log('Unable to fetch data for this month'));
  }

  public getStartDayOfSelectedMonth (): number {
    return new Date(this.selectedDate.getFullYear(), this.selectedDate.getMonth(), 1).getDay();
  }

  public getNumOfWeeksInMonth(month: number): number {
    if (this.startDayOfSelectedMonth === 6) {
      switch (month) {
        case 31:
        case 30:
          return 5;
        default:
          return 4;
      }
    } else {
      return 4;
    }
  }

  public getCalendarEvents(calendar: any, month: string): {[key: string]: Array<EventDetails>} {
    return this.formatTimestamps(calendar.twentyNineteen[month.toLowerCase()]);
  }

  public formatTimestamps(
    calendarMonth: {[key: string]: Array<EventDetails>}
  ): {[key: string]: Array<EventDetails>} {
    for (let day in calendarMonth) {
      calendarMonth[day] = calendarMonth[day].map((event: EventDetails) => ({
        ...event,
        startDateTime: new Date(event.startDateTime).toLocaleTimeString(),
        endDateTime: new Date(event.endDateTime).toLocaleTimeString()
      }));
    }
    return calendarMonth;
  }

}
