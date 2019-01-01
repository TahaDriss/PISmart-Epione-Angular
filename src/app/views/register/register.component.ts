import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService
  ) {}
  form: FormGroup;
  error_message = '';
  // username  = '';
  // email  = '';
  // password  = '';
  // confirm  = '';
  // role  = '';

  ngOnInit() {
    this.form = this.fb.group({
      username : ['', [Validators.required]],
      email : ['', [Validators.required, Validators.email]],
      password : ['', [Validators.required]],
      confirm : ['', [Validators.required]],
      role : ['', [Validators.required]],
    });
    if (localStorage.getItem('token') !== null) {
      this.router.navigate(['']);
    }
  }

  register() {
    this.error_message = '';
    this.authService.register(this.form.value).subscribe(
      data => {
        this.router.navigate(['/successfull']);
      },
      error => {
        this.error_message = error.error;
      }
    );
  }

}
