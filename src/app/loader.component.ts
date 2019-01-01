import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  // tslint:disable-next-line
  selector: 'app-loader',
  template: '<img src="assets/images/preloaders/1.gif">',
  styles: [`
    :host {
        background: white;
        height : 100vh;
        width:100vw;
        position : absolute;
        z-index : 2000;
        display : flex;
        justify-content : center;
        align-items: center;
    }
  `]
})
export class LoaderComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {}
}
