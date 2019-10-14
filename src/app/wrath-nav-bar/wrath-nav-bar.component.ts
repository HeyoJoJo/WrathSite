import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wrath-nav-bar',
  templateUrl: './wrath-nav-bar.component.html',
  styleUrls: ['./wrath-nav-bar.component.scss']
})
export class WrathNavBarComponent implements OnInit {

  private places: string[] = ["Home", "The Knights", "Photos", "Calendar", "Contact Us!"];

  constructor() { }

  ngOnInit() {
  }

}
