import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weekdays',
  templateUrl: './weekdays.component.html',
  styleUrls: ['./weekdays.component.scss']
})
export class WeekdaysComponent implements OnInit {
  @Input('week-days') weekDays: String[];

  constructor() { }

  ngOnInit() { }

}
