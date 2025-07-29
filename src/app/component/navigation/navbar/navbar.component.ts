import { Component } from '@angular/core';
import { CarouselComponent } from "../../Carousel/carousel/carousel.component";

@Component({
  selector: 'app-navbar',
  imports: [CarouselComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: true
})
export class NavbarComponent {

}
