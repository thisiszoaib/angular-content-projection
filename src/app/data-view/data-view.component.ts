import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.css'],
})
export class DataViewComponent implements OnInit {
  @Input() icon = '';
  @Input() caption = '';

  constructor() {}

  ngOnInit(): void {}
}
