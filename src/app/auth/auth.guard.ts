import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user != null) {
      if (user.role === 'ROLE_ADMIN' && state.url.startsWith('/admin')) {
        return true;
      } else if (user.role === 'ROLE_DOCTOR' && state.url.startsWith('/doctor')) {
        return true;
      } else {
        this.router.navigate(['/500']);
        return false;
      }
    }
    this.router.navigate(['/login']);
    return false;
  }
}
