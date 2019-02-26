import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {
  @Input('form-parent') formParent: FormGroup;
  @Input('ctrl-name') ctrlName: string;
  @Input('is-readonly') isReadOnly: boolean = false;
  @Input('is-required') isRequired: boolean = false;
  @Input() classes: string = '';
  @Input() val: string = '';
  @Input() placeholder: string = '';

  constructor() { }

  ngOnInit() {
  }

}
