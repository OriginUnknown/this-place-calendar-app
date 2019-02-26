import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CalendarService } from '../../services/calendar.service';
import * as CALENDAR_COPY from '../../../resources/i18n/en-GB';

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
    private calendarService: CalendarService
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
    const form: any = this.addEventForm.value;
    const startDateObj = new Date(form.startDateObj);
    const month: string = CALENDAR_COPY.APP_CONST.CALENDAR.MONTHS[startDateObj.getMonth()].toLowerCase();
    const date: number = startDateObj.getDate();
    const startDateTime: number = this.calendarService.createNewDateObj(form.startDate, '-', form.startTime, ':').getTime();
    const endDateTime: number = this.calendarService.createNewDateObj(form.endDate, '-', form.endTime, ':').getTime();
    if (this.addEventForm.valid) {
      if (this.calendarService.endDateTimeIsLessThanStart(startDateTime, endDateTime)) {
        alert(`End date cannot be less than start date. Please amend your dates`);
        return;
      }
      const copyEvent = {
        ...this.addEventForm.value,
        metadata: {
          date,
          month
        }
      };
      copyEvent['startDateTime'] = startDateTime;
      copyEvent['endDateTime'] = endDateTime;
      delete copyEvent.startDate;
      delete copyEvent.startTime;
      delete copyEvent.endDate;
      delete copyEvent.endTime;
      // remove redundant props -> destructing not working
      //   const {
      //     startDate,
      //     startTime,
      //     endDate,
      //     endTime,
      //     ...copyEvent
      // } = newEvent;
    } else {
      // revise to use modal instead of aler from the sharedModule directory
      alert(
        'Form is incomplete; Make sure all required fields are complete and valid:\n' +
        'Title, start date, end date start time, end date and end time.'
      );
    }
  }

  public onStartTimeSelected(event): void {
    // undo previous time slot arrays for start and end slot
    this.startTimeSlots = this.calendarService.getTimeSlots();
    this.endTimeSlots = this.calendarService.getTimeSlots();
    this.endTimeSlots = this.endTimeSlots.filter((slot, i) => {
      if (i > this.startTimeSlots.indexOf(event)) {
        return slot;
      }
    });
  }

  public onEndTimeSelected(event): void {
    // undo previous time slot arrays for start and end slot
    this.startTimeSlots = this.calendarService.getTimeSlots();
    this.endTimeSlots = this.calendarService.getTimeSlots();
    this.startTimeSlots = this.startTimeSlots.filter((slot, i) => {
      if (i < this.startTimeSlots.indexOf(event)) {
        return slot;
      }
    });
  }

}
