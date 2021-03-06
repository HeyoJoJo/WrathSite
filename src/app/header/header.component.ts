import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wrath-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Input() displayText: string;

  constructor() { }

  ngOnInit() {
  }

}
