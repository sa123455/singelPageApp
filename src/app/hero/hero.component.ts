import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  heroHeading: string;

  heroText: string;
  
  heroBtnText : string;
  
  heroBtnUrl:   string ;
  constructor() {
    this.heroHeading =  "We are your ultimate Winter experience Provider!"
     

  this.heroText =  "We are your ultimate Winter Experience provider,We are your ultimate Winter Experience provider" ;

  this.heroBtnText =  "Learn more" ;

  this.heroBtnUrl =  "about.component.html"  ;
  }

  ngOnInit(): void {
  }

}
