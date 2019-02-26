import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
  @Input('label-id') labelId: string;
  @Input('label-value') labelValue: string;
  @Input() classes: string = '';
  constructor() { }

  ngOnInit() {
  }

}
