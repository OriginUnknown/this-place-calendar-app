import { Component, OnInit, Input } from '@angular/core';
import { EventBrief } from '../../model/event.model';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.scss']
})
export class DaysComponent implements OnInit {
  @Input('start-day-from') startDayAt: number;
  @Input('num-of-days-in-month') totalDaysInMonth: number;
  @Input('num-of-weeks-in-month') totalWeeksInMonth: number;
  @Input('events-for-month') eventsForTheMonth: EventBrief;

  public calendarMonth: Array<Array<number|string>> = [];
  private ONE_WEEK: number = 7;

  constructor() { }

  ngOnInit() {
    this.populateMonth();
  }

  public populateMonth(): void {
    let week: Array<number|string> = [], day: number = 1;
    for (let w = 0; w <= this.totalWeeksInMonth; w++) {
      for (let d = 0; d < this.ONE_WEEK; d++) {
        if (w === 0) {
          if (d >= this.startDayAt) {
            week.push(day);
            day = day += 1;
          } else {
            week.push('');
          }
        }
        if (w > 0) {
          if (day > this.totalDaysInMonth) {
            week.push('');
          } else {
            week.push(day);
            day = day += 1;
          }
        }
      }
      this.calendarMonth.push(week);
      week = [];
    }
  }
}
