import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit {
  @Input('form-parent') formParent: FormGroup;
  @Input('selector-id') selectorId: string;
  @Input('selector-name') selectorName: string;
  @Input('selector-options') selectorOptions: Array<string | number>;
  @Input('ctrl-name') ctrlName: string;
  @Output('on-item-selected') onItemSelected: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() { }

  public itemSelected(evt: any): void {
    this.onItemSelected.emit(evt);
  }
}
