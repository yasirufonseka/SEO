import { Component } from '@angular/core';
import { Card3Component } from "../../shared/card_3/card-3/card-3.component";
import { NgFor } from '@angular/common';


export  interface serviceInterface{
    title:String;
    description:String;
    btnTitle:any; 
    items:String[];
    image:any;
    link:any;
    btnColor:String;

  }
@Component({
  selector: 'app-services',
  imports: [Card3Component, NgFor],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})


export class ServicesComponent {

  services: serviceInterface[] =[
    {
    title: "Career Guidance",
    description: "Our certified career coaches provide one-on-one sessions to help you define your goals, overcome challenges, and develop a strategic career plan. ",
    btnTitle: "Book a  Session",
    items: ["Personalized career pathing" , "Mock interview sessions & feedback", "LinkedIn profile optimization", "Networking strategies"],
    image: "images/Career-Guidance.png",
    link: "https://www.canva.com",
    btnColor:"blue"
   
  },
   {
    title: "Professional CV Helping",
    description: "Our certified career coaches provide one-on-one sessions to help you define your goals, overcome challenges, and develop a strategic career plan.  ",
    btnTitle: "Contact Us",
    items: ["Confidential search process" , "Access to unlisted C-suite roles", "Personalized matching with top firms", "Negotiation support"],
    image: 'images/Professional CV Helping.png',
    link: "",
    btnColor:"red"
   
  },
   {
    title: "Digital marketing",
    description: "Our certified career coaches provide one-on-one sessions to help you define your goals, overcome challenges, and develop a strategic career plan. ",
    btnTitle: "Contact Us",
    items: ["Confidential search process" , 
      "Access to unlisted C-suite roles",
       "Personalized matching with top firms", 
       "Negotiation support"],
    image: 'images/Digital marketing.png',
    link: "",
    btnColor:"brown"
   
  },
  {
    title: "Mentoring Sessions",
    description: "Our certified career coaches provide one-on-one sessions to help you define your goals, overcome challenges, and develop a strategic career plan. ",
    btnTitle: "Contact Us",
    items: ["Confidential search process" , 
      "Access to unlisted C-suite roles",
       "Personalized matching with top firms", 
       "Negotiation support"],
    image: 'images/Mentoring Sessions.png',
    link: "",
    btnColor:"green"
   
  },
  {
    title: "Training",
    description: "Our certified career coaches provide one-on-one sessions to help you define your goals, overcome challenges, and develop a strategic career plan. ",
    btnTitle: "Contact Us",
    items: ["Confidential search process" , 
      "Access to unlisted C-suite roles",
       "Personalized matching with top firms", 
       "Negotiation support"],
    image: 'images/Training.png',
    link: "",
    btnColor:"purple"
   
  },{
    title: "Custom SaaS/Enterprise App Development",
    description: "Our certified career coaches provide one-on-one sessions to help you define your goals, overcome challenges, and develop a strategic career plan. ",
    btnTitle: "Contact Us",
    items: ["Confidential search process" , 
      "Access to unlisted C-suite roles",
       "Personalized matching with top firms", 
       "Negotiation support"],
    image: 'images/Enterprise App Development.png',
    link: "",
    btnColor:"deepRed"
   
  },

];


  
  

}
