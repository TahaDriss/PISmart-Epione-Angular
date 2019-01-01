import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  showError = false;

  constructor(private authService: AuthService, private router: Router) {}

    ngOnInit() {
        if (localStorage.getItem('token') !== null) {
            this.router.navigate(['']);
        }
    }

  login() {
    this.authService.authenticate(this.username, this.password).subscribe(
      data => {
        localStorage.setItem('token', data + '');
        this.authService.getCurrentUser().subscribe(response => {
          const user = response;
          localStorage.setItem('currentUser', JSON.stringify(user));
          switch (user.role) {
            case 'ROLE_ADMIN':
                this.router.navigate(['/admin']);
                break;
            case 'ROLE_DOCTOR':
                this.router.navigate(['/doctor']);
                break;
            default:
                this.router.navigate(['']);
                break;
          }
        });
      },
      error => {
        this.showError = true;
      }
    );
  }
}
