import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-3',
  imports: [NgFor,NgClass],
  templateUrl: './card-3.component.html',
  styleUrl: './card-3.component.scss'
})
export class Card3Component {

  

  @Input() title:String='';
  @Input() description:String='';
  @Input() btnTitle:any; 
  @Input() image:any;
  @Input() link:any;
  @Input() items:String[] | undefined ;
  @Input() btnColor:String | undefined;

  

}
