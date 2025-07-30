import { Component } from '@angular/core';
import { NavbarComponent } from "../../navigation/navbar/navbar.component";
import { AboutUsComponent } from "../../about_us/about-us/about-us.component";
import { ProductComponent } from "../../Product/product/product.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, AboutUsComponent, ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone:true
})
export class HomeComponent {

}
