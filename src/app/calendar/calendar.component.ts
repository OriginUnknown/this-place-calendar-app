import { Component, OnInit } from '@angular/core';
import { CalendarService } from './services/calendar.service';
import * as CALENDAR_COPY from '../resources/i18n/en-GB'; // would modify to use the translateService
import { EventDetails } from './model/event.model';

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

  public calendarEventsForSelectedMonth: {[key: number]: Array<EventDetails>};
  public numOfDaysPerMonth: Array<number>;

  constructor(
    private calendarService: CalendarService
  ) { }

  ngOnInit() {
    this.configureCalendar();
  }

  public configureCalendar(
        year: number = this.calendarService.getTodaysDate().getFullYear(),
        month: number = this.calendarService.getTodaysDate().getMonth(),
        date: number = this.calendarService.getTodaysDate().getDate()
    ): void {
      this.calendarService.getEvents$().subscribe( data => {
      this.calendarService.setSelectedDate(year, month, date);
      this.selectedDate = this.calendarService.getSelectedDate();
      this.date = this.selectedDate.getDate().toString();
      this.day = CALENDAR_COPY.APP_CONST.CALENDAR.WEEKDAYS[this.selectedDate.getDay()];
      this.month = CALENDAR_COPY.APP_CONST.CALENDAR.MONTHS[this.selectedDate.getMonth()].toLowerCase();
      this.year = this.selectedDate.getFullYear().toString();
      this.weekDays = CALENDAR_COPY.APP_CONST.CALENDAR.WEEKDAYS;
      this.numOfDaysPerMonth = this.calendarService.getNumOfDaysPerMonth(Number(this.year));
      this.numOfDaysInMonth = this.numOfDaysPerMonth[this.selectedDate.getMonth()];
      this.startDayOfSelectedMonth = this.getStartDayOfSelectedMonth();
      this.numOfWeeksInMonth = this.getNumOfWeeksInMonth(this.numOfDaysInMonth);
      this.calendarEventsForSelectedMonth = data.events[this.month];
    });

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
}
