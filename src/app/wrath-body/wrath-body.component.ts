import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wrath-body',
  templateUrl: './wrath-body.component.html',
  styleUrls: ['./wrath-body.component.scss']
})
export class WrathBodyComponent implements OnInit {
  @Input() displayText: string;

  constructor() { }

  ngOnInit() {
  }

}
