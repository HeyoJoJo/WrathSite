import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'knights-page',
  templateUrl: './knights-page.component.html',
  styleUrls: ['./knights-page.component.scss']
})
export class KnightsPageComponent implements OnInit {

  private knightList = [
    {
      knightName:"Adam",
      knightTitle: "Captain Wrath, The Black Knight",
      knightBio: "😠😠😠😠😠",
    },
    {
      knightName:"Moira",
      knightTitle: 'Moira "not her government name" Simmons',
      knightBio: "😊😊😊😊😊",
    },
    {
      knightName:"Curtis",
      knightTitle: "Dwarf Power",
      knightBio: "HATES titanium and titanium wearers. Advocated against Titanium American rights. Has a crush on Kaylee.",
    },
    {
      knightName:"Kaylee",
      knightTitle: "The Sniper",
      knightBio: "HATES not hitting Curtis in the boy parts. Advocated against Curtis American rights. Has crushed Curtis.",
    },
    {
      knightName:"Logan",
      knightTitle: "The HAMMER 🔨",
      knightBio: '"He\'s big, he\'s dumb, he hits like a truck!" - Adam',
    },
    {
      knightName:"Jo",
      knightTitle: "The Juggernaut",
      knightBio: '"He\'s big, he\'s dumb, his neck is a magnet for axes!" - Jo',
    },
    {
      knightName:"Seth",
      knightTitle: "Mighty Mouse",
      knightBio: 'Short.',
    },
    {
      knightName:"AJ",
      knightTitle: "Slim",
      knightBio: 'Tall.',
    },
    {
      knightName:"Tyler",
      knightTitle: "Tyler",
      knightBio: 'Tyler.',
    },
    {
      knightName:"Russ",
      knightTitle: "The Prettyboy",
      knightBio: 'Probably the only socially acceptable, well mannered person on the whole team, tbh.',
    },
    {
      knightName:"Jake",
      knightTitle: "The Ballerina, The Dancer, The TurkeyRaptor, The Nickname",
      knightBio: 'You know those videos where Luigi wins in Mario Party games by doing nothing and letting everyone else take themselves out?',
    },
    {
      knightName:"Kyle",
      knightTitle: "Skar, The Chad Kyle",
      knightBio: 'Premium, high grade, artisanal, luxury Kyle.',
    },
    {
      knightName:"Kyle2",
      knightTitle: "The Virgin Kyle",
      knightBio: 'Fatally allergic to stretching.',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
