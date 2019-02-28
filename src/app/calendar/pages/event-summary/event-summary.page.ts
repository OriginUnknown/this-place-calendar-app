import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl } from '@angular/forms';
import { CalendarService } from '../../services/calendar.service';
import * as CALENDAR_COPY from '../../../resources/i18n/en-GB';
import { EventDetails } from '../../model/event.model';
import * as fromStore from '../../../calendar/store';

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
  public dateId: number;
  public eventId: number;
  public month: string;

  constructor(
    private route: ActivatedRoute,
    private _store: Store<fromStore.CalendarAppState>,
    private router: Router,
    private calendarService: CalendarService
    ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.calendarService.getEvents$().subscribe( (data: any) => {
        this.dateId = Number(params['date']);
        this.eventId = Number(params['id']);
        this.selectedMonthNum = this.calendarService.getSelectedDate().getMonth();
        this.month = CALENDAR_COPY.APP_CONST.CALENDAR.MONTHS[this.selectedMonthNum].toLowerCase();
        this.selectedEvent = data.events[this.month][this.dateId].filter((event: EventDetails) => event.id === this.eventId)[0];
        if (this.selectedEvent) {
          this.startDate = new Date(this.selectedEvent.startDateTime).toDateString();
          this.startTime = new Date(this.selectedEvent.startDateTime).toLocaleTimeString();
          this.endDate = new Date(this.selectedEvent.endDateTime).toDateString();
          this.endTime = new Date(this.selectedEvent.endDateTime).toLocaleTimeString();
          this.eventSummaryForm = new FormGroup({
            'id': new FormControl(this.selectedEvent.id),
            'title': new FormControl(this.selectedEvent.title),
            'description': new FormControl(this.selectedEvent.description),
            'eventColour': new FormControl({value: this.selectedEvent.labelColour, disabled: true}),
            'startDate': new FormControl(this.startDate),
            'startTime': new FormControl(this.startTime),
            'endDate': new FormControl(this.endDate),
            'endTime': new FormControl(this.endTime)
          });
        }
      });
    });
  }

  public removeSelectedEvent(): void {
    const metadata = {};
    metadata['month'] = this.month;
    metadata['date'] = this.dateId;
    const eventToDelete: EventDetails = { ...this.eventSummaryForm.value, metadata };
    this._store.dispatch({
      type: fromStore.DELETE_EVENT,
      payload: eventToDelete
    });
    this.router.navigate(['/calendar']);
  }

}
