import { Component } from '@angular/core';
import { product } from './product_Interface';
import { CardComponent } from '../../shared/card/card.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CardComponent,NgFor],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
   cards :product[]= [{
      title: "Talent Boozt Jobseeker",
      description: "Our AI-powered algorithm connects you with roles that perfectly match your skills, experience, and career aspirations.",
      image: "images/Jobseeker.png",
      link: ''
  
  
    },
    {
      title: "Talent Boozt ATS Resume Builder",
      description: "Create standout, ATS-friendly resumes in minutes with intelligent suggestions and professional templates.",
      image: "images/Resume Builder.png",
      link: ''
    },
    {
      title: "Talent Boozt Learner",
      description: "Access curated courses and resources to upskill, reskill, and stay ahead in your industry.",
      image: "images/Learner.png",
      link: ''
    },
    {
      title: "Talent Boozt 360",
      description: "Track your application progress, gain insights into market trends, and understand your competitive positioning.",
      image: "images/Talent Boozt 360.png",
      link: ''
    },
    {
      title: "Talent Boozt Recruiter",
      description: "Join vibrant communities based on your industry or interests to connect, learn, and share opportunities.",
      image: "images/Recruiter.png",
      link: ''
    },
    {
      title: "Talent Boozt Trainer",
      description: "Practice common interview questions, get AI feedback, and schedule mock interviews with experts.",
      image: "images/Trainer.png",
      link: ''
    },
  ]

}
