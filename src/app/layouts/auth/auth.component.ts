import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent implements OnDestroy, OnInit {
  authUserChangeSubscription?: Subscription;

  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.subscribeToAuthUserChange();
  }

  ngOnDestroy(): void {
    this.authUserChangeSubscription?.unsubscribe();
  }

  subscribeToAuthUserChange(): void {
    this.authUserChangeSubscription = this.authService.authUser$.subscribe({
      next: (authUser) => {
        if (authUser != null) {
          this.router.navigate(['dashboard', 'home']);
        }
      },
    });
  }

  login() {
    console.log('HOLA');
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      this.authService.login(this.loginForm.getRawValue());
    }
  }
}
