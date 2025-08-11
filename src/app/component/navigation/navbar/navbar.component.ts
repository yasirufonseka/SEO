import { Component, HostListener } from '@angular/core';
import { CarouselComponent } from "../../Carousel/carousel/carousel.component";
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CarouselComponent,RouterLink,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: true
})
export class NavbarComponent {

   
}
