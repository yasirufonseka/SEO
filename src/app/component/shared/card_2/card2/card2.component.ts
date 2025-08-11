import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card2',
  imports: [],
  templateUrl: './card2.component.html',
  styleUrl: './card2.component.scss'
})
export class Card2Component {

  @Input()   name?:String;
  @Input()   title?:String;
  @Input()   quote?:String



 

}
