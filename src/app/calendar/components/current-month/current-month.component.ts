import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-current-month',
  templateUrl: './current-month.component.html',
  styleUrls: ['./current-month.component.scss']
})
export class CurrentMonthComponent implements OnInit {
  @Input('selected-month') currentMonth: string = '';
  @Input('selected-year') currentYear: string = '';
  @Output('get-next-month') getNextMonth: EventEmitter<null> = new EventEmitter();
  @Output('get-prev-month') getPrevMonth: EventEmitter<null> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  public onGetNextMonth(): void {
    this.getNextMonth.emit(null);
  }

  public onGetPrevMonth(): void {
    this.getPrevMonth.emit(null);
  }

}
