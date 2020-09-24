import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('popOverState', [
      state('show', style({
        opacity: 1
      })),
      state('hide',   style({
        opacity: 0
      })),
      transition('show => hide', animate('600ms ease-out')),
      transition('hide => show', animate('1000ms ease-in'))
    ])
  ]
})
export class HomeComponent implements OnInit {
  show = false;
  constructor() { 
    
  }

  ngOnInit(): void {
  }

  get stateName() {
    return this.show ? 'show' : 'hide'
  }


  toggle() {
    this.show = !this.show;
  }

}
