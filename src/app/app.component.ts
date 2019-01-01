import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Helpers } from './helpers';

@Component({
  // tslint:disable-next-line
  selector: 'body',
  template: '<app-loader id="top-loader"></app-loader><router-outlet></router-outlet>'
})
export class AppComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    Helpers.setLoading(false);
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
