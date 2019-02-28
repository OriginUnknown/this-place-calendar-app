import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CalendarService } from '../../services/calendar.service';
import * as CALENDAR_COPY from '../../../resources/i18n/en-GB';
import * as fromStore from '../../../calendar/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-calendar',
  templateUrl: './add-event.page.html',
  styleUrls: ['./add-event.page.scss']
})
export class AddEventComponent implements OnInit {
  public ADD_EVENT_COPY: any = CALENDAR_COPY.APP_CONST.CALENDAR.PAGES.ADD_EVENT; // use translateService
  public addEventForm: FormGroup;
  public selectedStartTime: any;
  public todaysDateAsString: string;
  public timeSlots: Array<string> = [];
  public startTimeSlots: Array<string> = [];
  public endTimeSlots: Array<string> = [];
  public eventLabelColours: Array<string> = [];
  public myDate: string;
  public defaultTitleCopy: string;
  public defaultDescriptionCopy: string;
  public defaultEventColour: string;

  constructor(
    private calendarService: CalendarService,
    private router: Router,
    private _store: Store<fromStore.CalendarAppState>
    ) { }

  ngOnInit() {
      this.todaysDateAsString = this.calendarService.getSelectedDateString();
      this.timeSlots = this.calendarService.getTimeSlots();
      this.startTimeSlots = this.calendarService.getTimeSlots();
      this.endTimeSlots = this.calendarService.getTimeSlots();
      this.eventLabelColours = this.calendarService.getLabelColour();
      this.defaultTitleCopy = 'New Event';
      this.defaultDescriptionCopy = 'N/A';
      this.defaultEventColour = 'orange';
      this.addEventForm = new FormGroup({
        'title': new FormControl(this.defaultTitleCopy, Validators.required),
        'description': new FormControl(this.defaultDescriptionCopy),
        'eventColour': new FormControl(this.defaultEventColour),
        'startDate': new FormControl(this.todaysDateAsString, Validators.required),
        'startTime': new FormControl(null, Validators.required),
        'endDate': new FormControl(this.todaysDateAsString, Validators.required),
        'endTime': new FormControl(null, Validators.required)
      });
  }

  public onSaveEventForm(): void {
    const newEvent = this.calendarService.validateForm(this.addEventForm);
    if (newEvent) {
      this._store.dispatch({
        type: fromStore.ADD_EVENT,
        payload: newEvent
      });
      this.router.navigate(['/calendar']);
    } else {
      // revise to use modal instead of aler from the sharedModule directory
      alert(
        'Form is incomplete; Make sure all required fields are complete and valid:\n' +
        'Title, start date, end date start time, end date and end time.'
      );
    }
  }

  public onStartTimeSelected(event: string): void {
    this.startTimeSlots = this.calendarService.getTimeSlots();
    this.endTimeSlots = this.calendarService.filterEndTimeSlots(this.startTimeSlots, event);
  }

  public onEndTimeSelected(event: string): void {
    this.endTimeSlots = this.calendarService.getTimeSlots();
    this.startTimeSlots = this.calendarService.filterStartTimeSlots(this.endTimeSlots, event);
  }

}
