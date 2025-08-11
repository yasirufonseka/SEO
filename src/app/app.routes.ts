import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home/home.component';
import { NavbarComponent } from './component/navigation/navbar/navbar.component';
import { AboutUsComponent } from './component/about_us/about-us/about-us.component';
import { ProductComponent } from './component/Product/product/product.component';
import { ServicesComponent } from './component/Service/services/services.component';
import { TestimonialsComponent } from './component/Testimonials/testimonials/testimonials.component';
import { ContactComponent } from './component/Contact/contact/contact.component';
import { Card3Component } from './component/shared/card_3/card-3/card-3.component';

export const routes: Routes = [
  {path:'', component:HomeComponent,
        children:[
            {path:'about', component:AboutUsComponent},
            {path:'product', component:ProductComponent},
            {path:'services', component:ServicesComponent},
            {path:'testimonial', component:TestimonialsComponent},
            {path:'contact', component:ContactComponent},
        ]
    }
];
  

