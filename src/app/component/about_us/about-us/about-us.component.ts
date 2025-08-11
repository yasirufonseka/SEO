import { Component } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { NgFor } from '@angular/common';
import { aboutInteface } from './aboutInterface';


@Component({
  selector: 'app-about-us',
  imports: [CardComponent,NgFor],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {

  cards :aboutInteface[]= [{
    title: "Innovative Platform",
    description: "Experience a user-friendly interface packed with powerful features to streamline your job hunt and career development.",
    image: "images/Innovative Platform.png",
    link: ''


  },
  {
     title:"Expert Guidance",
    description:"Access resources, tips, and personalized coaching from industry experts to navigate your career path confidently.",
    image:'images/Expert Guidance.png',
    link:''
  },
  {
    title:"Vast Network",
    description:"Connect with top employers, recruiters, and a supportive community of professionals to expand your opportunities.",
    image:'images/Vast Network.png',
    link:''
  }




]



}
