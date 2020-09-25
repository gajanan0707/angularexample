import { Component, OnInit, VERSION } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { Observable, Subscriber } from 'rxjs';


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
  time = new Observable<string>((observer: Subscriber<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
    });
  show = false;
  ver = VERSION.full;
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
