import { Component, OnInit } from '@angular/core';
import { EventDetails } from '../../model/event.model';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { CalendarService } from '../../services/calendar.service';
import * as CALENDAR_COPY from '../../../resources/i18n/en-GB';

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
        this.eventLabelColours = this.calendarService.getLabelColour();
        this.timeSlots = this.calendarService.getTimeSlots();
        this.startTimeSlots = this.calendarService.getTimeSlots();
        this.endTimeSlots = this.calendarService.getTimeSlots();
        this.editEventDetailsForm = new FormGroup({
          'title': new FormControl(this.selectedEvent.title),
          'description': new FormControl(this.selectedEvent.description),
          'eventColour': new FormControl(this.selectedEvent.labelColour),
          'startDate': new FormControl(this.startDate),
          'startTime': new FormControl(this.startTime),
          'endDate': new FormControl(this.endDate),
          'endTime': new FormControl(this.endTime)
        });
      });
    });
  }

  public onStartTimeSelected(selectedOption): void {
    console.log('onStartTimeSelected: ', selectedOption);
  }

  public onEndTimeSelected(selectedOption): void {
    console.log('onEndTimeSelected: ', selectedOption);
  }

  public saveAmendedEvent(): void {
    console.log(`Delete event. Month id: ${this.selectedMonthNum}, date: ${this.dateId} and event id: ${this.eventId}`);
  }

  public onSaveEventChanges(): void {
    const form: any = this.editEventDetailsForm.value;
    console.log(form);
  }

}
