import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent implements OnInit {
  @Input('form-parent') formParent: FormGroup;
  @Input('radio-options') radioOptions: Array<string | number>;
  @Input('ctrl-name') ctrlName: string;
  @Output('on-option-selected') onOptionSelected: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public optionSelected(evt: string): void {
    this.onOptionSelected.emit(evt);
  }

}
