import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { EventDetails, EventsCollection, EventsInMonth } from '../../model/event.model';
import { CalendarService } from '../../services/calendar.service';
import * as CALENDAR_COPY from '../../../resources/i18n/en-GB';
import * as fromStore from '../../../calendar/store';

@Component({
  selector: 'app-edit-calendar',
  templateUrl: './edit-event.page.html',
  styleUrls: ['./edit-event.page.scss']
})
export class EditEventComponent implements OnInit {
  public EDIT_EVENT_COPY: any = CALENDAR_COPY.APP_CONST.CALENDAR.PAGES.EDIT_EVENT; // use translateService
  public selectedEvent: EventDetails;
  public editEventDetailsForm: FormGroup;
  public timeSlots: Array<string> = [];
  public startTimeSlots: Array<string> = [];
  public endTimeSlots: Array<string> = [];
  public eventLabelColours: Array<string> = [];
  public selectedMonthNum: number;
  public startDate: string;
  public startTime: string;
  public endDate: string;
  public endTime: string;
  public dateId: string;
  public eventId: number;
  public allEvents: EventsCollection;
  public amendedEvent: EventDetails | null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private calendarService: CalendarService,
    private _store: Store<fromStore.CalendarAppState>
    ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.calendarService.getEvents$().subscribe( (data: fromStore.CalendarState) => {
        this.dateId = params['date'];
        this.eventId = Number(params['id']);
        this.allEvents = data.events;
        this.selectedMonthNum = this.calendarService.getSelectedDate().getMonth();
        const month = CALENDAR_COPY.APP_CONST.CALENDAR.MONTHS[this.selectedMonthNum].toLowerCase();
        this.selectedEvent = data.events[month][this.dateId].filter((event: EventDetails) => {
          if (event.id === this.eventId) {
            return event;
          }
        })[0];
        if (this.selectedEvent) {
          this.startDate = new Date(this.selectedEvent.startDateTime).toDateString();
          this.startTime = new Date(this.selectedEvent.startDateTime).toLocaleTimeString();
          this.endDate = new Date(this.selectedEvent.endDateTime).toDateString();
          this.endTime = new Date(this.selectedEvent.endDateTime).toLocaleTimeString();
          this.eventLabelColours = this.calendarService.getLabelColour();
          this.timeSlots = this.calendarService.getTimeSlots();
          this.startTimeSlots = this.calendarService.getTimeSlots();
          this.endTimeSlots = this.calendarService.getTimeSlots();
          this.editEventDetailsForm = new FormGroup({
            'id': new FormControl(this.selectedEvent.id),
            'title': new FormControl(this.selectedEvent.title),
            'description': new FormControl(this.selectedEvent.description),
            'eventColour': new FormControl(this.selectedEvent.labelColour),
            'startDate': new FormControl(this.startDate),
            'startTime': new FormControl(this.startTime),
            'endDate': new FormControl(this.endDate),
            'endTime': new FormControl(this.endTime)
          });
        }
      });
    });
  }

  public onStartTimeSelected(selectedOption: string): void {
    this.startTimeSlots = this.calendarService.getTimeSlots();
    this.endTimeSlots = this.calendarService.filterEndTimeSlots(this.startTimeSlots, selectedOption);
  }

  public onEndTimeSelected(selectedOption: string): void {
    this.endTimeSlots = this.calendarService.getTimeSlots();
    this.startTimeSlots = this.calendarService.filterStartTimeSlots(this.endTimeSlots, selectedOption);
  }

  public removeEventFromPreviousPosition(month: EventsInMonth): EventsInMonth {
    const monthObj: EventsInMonth = {};
    for (let dt in month) {
      monthObj[dt] = month[dt].filter((evt: EventDetails) => evt.id !== this.amendedEvent.id);
    }
    return monthObj;
  }

  public updateEventsCollection(eventsCollection: EventsCollection): EventsCollection {
    for (let mm in eventsCollection) {
      eventsCollection[mm] = this.removeEventFromPreviousPosition(eventsCollection[mm]);
    }
    return eventsCollection;
  }

  public onSaveEventChanges(): void {
    this.amendedEvent = this.calendarService.validateForm(this.editEventDetailsForm, 'AMEND');
    if (this.amendedEvent) {
      const month: string = this.amendedEvent.metadata.month;
      const date: number = this.amendedEvent.metadata.date;
      this.allEvents = this.updateEventsCollection(this.allEvents);
      if (this.allEvents.hasOwnProperty(month)) {
        const selectedMonth = { ...this.allEvents[month] };
        if (selectedMonth.hasOwnProperty(date)) {
            selectedMonth[date] = [...selectedMonth[date], this.amendedEvent];
        }
        if (!selectedMonth.hasOwnProperty(date)) {
            selectedMonth[date] = [this.amendedEvent];
        }
        this.allEvents[month] = selectedMonth;
    } else {
        this.allEvents[month] = {};
        this.allEvents.month[date] = [this.amendedEvent];
    }
      this._store.dispatch({
        type: fromStore.EDIT_EVENT,
        payload: this.allEvents
      });
      this.router.navigate(['/calendar']);
    } else {
      alert(
        'Form is incomplete; Make sure all required fields are complete and valid:\n' +
        'Title, start date, end date start time, end date and end time.'
      );
    }
  }
}
