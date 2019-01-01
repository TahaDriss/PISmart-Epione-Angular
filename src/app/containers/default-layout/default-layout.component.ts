import {Component, OnDestroy, OnInit} from '@angular/core';
import { navItems } from './../../navs/_nav';
import { doctorMenu } from './../../navs/_doctor_navs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit, OnDestroy {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  constructor(private router: Router) {

    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true,
      attributeFilter: [ 'class' ]
    });
  }

  ngOnInit(): void {
    if (this.router.url.startsWith('/admin')) {
      this.navItems = navItems;
    } else {
      this.navItems = doctorMenu;
    }
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    this.router.navigate(['']);
  }

}
