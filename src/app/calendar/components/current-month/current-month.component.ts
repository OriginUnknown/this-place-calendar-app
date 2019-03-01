import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-current-month',
  templateUrl: './current-month.component.html',
  styleUrls: ['./current-month.component.scss']
})
export class CurrentMonthComponent implements OnInit {
  @Input('selected-month') currentMonth: string = '';
  @Input('selected-year') currentYear: string = '';

  constructor() { }

  ngOnInit() { }

}
