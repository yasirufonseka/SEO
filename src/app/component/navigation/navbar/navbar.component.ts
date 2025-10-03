import { Component, HostListener } from '@angular/core';
import { CarouselComponent } from "../../Carousel/carousel/carousel.component";
import { RouterLink, RouterModule } from '@angular/router';
import { NgModel } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CarouselComponent, RouterLink, RouterModule, NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: true
})
export class NavbarComponent {
isDarkMode:boolean=false;
lightIcon:boolean=true;
lightlogo:boolean=true;

 


  toggleTheme() {
  document.body.classList.toggle('theme-dark');
  this.isDarkMode=!this.isDarkMode;
  document.body.classList.toggle('theme-dark',this.isDarkMode);
}

toggleMenu() {
  
}



   
}

