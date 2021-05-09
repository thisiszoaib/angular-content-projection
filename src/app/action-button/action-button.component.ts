import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css'],
})
export class ActionButtonComponent implements OnInit {
  @Input() icon = '';
  @Input() label = '';

  constructor() {}

  ngOnInit(): void {}
}
