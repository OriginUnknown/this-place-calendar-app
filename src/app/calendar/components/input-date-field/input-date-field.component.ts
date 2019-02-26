import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-date-field',
  templateUrl: './input-date-field.component.html',
  styleUrls: ['./input-date-field.component.scss']
})
export class InputDateFieldComponent implements OnInit {
  @Input('form-parent') formParent: FormGroup;
  @Input('ctrl-name') ctrlName: string;
  @Input() classes: string = '';
  @Input() val: string = '';
  @Input('is-required') isRequired: boolean = false;
  @Output('on-date-change') onDateChange: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  public dateChanged(evt: string): void {
    this.onDateChange.emit(evt);
  }

}
