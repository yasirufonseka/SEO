import { Component } from '@angular/core';
import { Card3Component } from "../../shared/card_3/card-3/card-3.component";
import { Card2Component } from "../../shared/card_2/card2/card2.component";
import { NgFor } from '@angular/common';

export interface testimonialInterface {
   name?:String;
   title?:String;
   quote?:String

}

@Component({
  selector: 'app-testimonials',
  imports: [ Card2Component , NgFor],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss'
})
export class TestimonialsComponent {
testimonials: testimonialInterface[]=[ {
    name: 'Maria Rodriguez',
    title: 'UX Designer',
    quote: `"Talent Boozt's AI Resume Builder was a game-changer. I got three interview calls within a week of using my new resume! The platform is incredibly intuitive."`
  },
  {
    name: 'Maria Rodriguez',
    title: 'UX Designer',
    quote: `"Talent Boozt's AI Resume Builder was a game-changer. I got three interview calls within a week of using my new resume! The platform is incredibly intuitive."`
  }];

}
