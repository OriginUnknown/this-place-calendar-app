import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarComponent } from './calendar.component';
import { EventSummaryComponent } from './pages/event-summary/event-summary.page';
import { AddEventComponent } from './pages/add-event/add-event.page';
import { EditEventComponent } from './pages/edit-event/edit-event.page';
import { CurrentMonthComponent } from './components/current-month/current-month.component';
import { WeekdaysComponent } from './components/weekdays/weekdays.component';
import { DaysComponent } from './components/days/day.component';
import { EventHeadlineComponent } from './components/event-headline/event-headline.component';
import { CalendarService } from './services/calendar.service';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { RadioButtonComponent } from './components/radio-button/radio-button.component';
import { LabelComponent } from './components/label/label.component';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { InputDateFieldComponent } from './components/input-date-field/input-date-field.component';
import { calendarReducers } from './store';

@NgModule({
    declarations: [
        EventSummaryComponent,
        AddEventComponent,
        EditEventComponent,
        CalendarComponent,
        CurrentMonthComponent,
        WeekdaysComponent,
        DaysComponent,
        EventHeadlineComponent,
        InputFieldComponent,
        RadioButtonComponent,
        LabelComponent,
        DropDownComponent,
        InputDateFieldComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        CalendarRoutingModule,
        StoreModule.forFeature('calendar', calendarReducers),
    ],
    providers: [
        CalendarService
    ],
    exports: [
        CalendarComponent
      ]
  })

export class CalendarModule { }
