import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'knight',
  templateUrl: './knight.component.html',
  styleUrls: ['./knight.component.scss']
})
export class KnightComponent implements OnInit {
  
  private isSelected: boolean = false;
  private isExpanded: boolean = false;
  private color: string = "black";

  @Input() knightName: string;
  @Input() knightTitle: string;
  @Input() knightBio: string;
  @Input() knightImgPath: string;
  constructor() { }

  ngOnInit() {
  }

  toggleIsSelected() {
    this.isSelected = !this.isSelected;
    this.color = this.isSelected ? "purple" : "black";
  }

  getIsSelected() {
    return this.isSelected;
  }

  getIsExpanded() {
    return this.isExpanded;
  }

  onClick() {
    this.isExpanded = !this.isExpanded;
  }
}
