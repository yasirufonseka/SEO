import { Component } from '@angular/core';
import { NavbarComponent } from "../../navigation/navbar/navbar.component";
import { AboutUsComponent } from "../../about_us/about-us/about-us.component";
import { ProductComponent } from "../../Product/product/product.component";
import { ServicesComponent } from "../../Service/services/services.component";
import { TestimonialsComponent } from "../../Testimonials/testimonials/testimonials.component";
import { CardAdComponent } from "../../shared/card_ad/card-ad/card-ad.component";
import { ContactComponent } from "../../Contact/contact/contact.component";
import { FooterComponent } from "../../footer/footer/footer.component";
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, AboutUsComponent, ProductComponent, ServicesComponent, TestimonialsComponent, CardAdComponent, ContactComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone:true
})
export class HomeComponent {

   constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {
    // Enable smooth scrolling
    this.viewportScroller.setOffset([0, 80]); // Offset for fixed navbar
  }

  ngOnInit() {
    // Handle fragment scrolling
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const fragment = this.router.parseUrl(event.url).fragment;
      if (fragment) {
        this.scrollToElement(fragment);
      }
    });
  }

  private scrollToElement(fragment: string): void {
    const element = document.getElementById(fragment);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  }

}
