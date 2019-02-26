import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CalendarService } from '../../services/calendar.service';
import * as CALENDAR_COPY from '../../../resources/i18n/en-GB';
import { EventDetails } from '../../model/event.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-event-summary',
  templateUrl: './event-summary.page.html',
  styleUrls: ['./event-summary.page.scss']
})
export class EventSummaryComponent implements OnInit {
  public EVENT_SUMMARY_COPY: any = CALENDAR_COPY.APP_CONST.CALENDAR.PAGES.EVENT_SUMMARY; // use translateService
  public selectedEvent: EventDetails;
  public eventSummaryForm: FormGroup;
  public eventLabelColours = this.calendarService.getLabelColour();
  public selectedMonthNum: number;
  public startDate: string;
  public startTime: string;
  public endDate: string;
  public endTime: string;
  public dateId: string;
  public eventId: number;

  constructor(
    private route: ActivatedRoute,
    private calendarService: CalendarService
    ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.calendarService.getData().subscribe( (data: any) => {
        this.dateId = params['date'];
        this.eventId = Number(params['id']);
        this.selectedMonthNum = this.calendarService.getSelectedDate().getMonth();
        const month = CALENDAR_COPY.APP_CONST.CALENDAR.MONTHS[this.selectedMonthNum].toLowerCase();
        this.selectedEvent = data.twentyNineteen[month][this.dateId].filter((event: EventDetails) => {
          if (event.id === this.eventId) {
            return event;
          }
        })[0];
        this.startDate = new Date(this.selectedEvent.startDateTime).toDateString();
        this.startTime = new Date(this.selectedEvent.startDateTime).toLocaleTimeString();
        this.endDate = new Date(this.selectedEvent.endDateTime).toDateString();
        this.endTime = new Date(this.selectedEvent.endDateTime).toLocaleTimeString();
        this.eventSummaryForm = new FormGroup({
          'title': new FormControl(this.selectedEvent.title),
          'description': new FormControl(this.selectedEvent.description),
          'eventColour': new FormControl({value: this.selectedEvent.labelColour, disabled: true}),
          'startDate': new FormControl(this.startDate),
          'startTime': new FormControl(this.startTime),
          'endDate': new FormControl(this.endDate),
          'endTime': new FormControl(this.endTime)
        });
      });
    });
  }

  public removeSelectedEvent(): void {
    console.log(`Delete event. Month id: ${this.selectedMonthNum}, date: ${this.dateId} and event id: ${this.eventId}`);
  }

}
