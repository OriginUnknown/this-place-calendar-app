import { Component, OnInit, Input } from '@angular/core';
import { EventBrief } from '../../model/event.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-headline',
  templateUrl: './event-headline.component.html',
  styleUrls: ['./event-headline.component.scss']
})
export class EventHeadlineComponent implements OnInit {
  @Input('todays-events') todaysEvents: Array<EventBrief>;
  @Input('date-of-event') dateOfEvent: string;

  constructor(private router: Router) { }

  ngOnInit() { }

  public editEvent(id: string): void {
    this.router.navigate([`/event-summary/${this.dateOfEvent}/${id}`]);
  }

}
