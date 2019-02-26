import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalendarComponent } from './calendar.component';
import { EventSummaryComponent } from './pages/event-summary/event-summary.page';
import { AddEventComponent } from './pages/add-event/add-event.page';
import { EditEventComponent } from './pages/edit-event/edit-event.page';

const routes: Routes = [
    { path: 'calendar', component: CalendarComponent },
    { path: 'add-event', component: AddEventComponent },
    { path: 'event-summary/:date/:id', component: EventSummaryComponent },
    { path: 'edit-event/:date/:id', component: EditEventComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalendarRoutingModule { }
