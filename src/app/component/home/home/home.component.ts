import { Component } from '@angular/core';
import { NavbarComponent } from "../../navigation/navbar/navbar.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone:true
})
export class HomeComponent {

}
