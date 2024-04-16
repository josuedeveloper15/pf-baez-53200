import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { IUser } from './pages/users/models';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit, OnDestroy {
  showFiller = false;

  mostrarComponent = true;

  authUser$: Observable<IUser | null>;

  authUserSinPipe: IUser | null = null;
  authUserSubscription?: Subscription;

  constructor(private authService: AuthService) {
    this.authUser$ = this.authService.authUser$;
  }

  ngOnDestroy(): void {
    this.authUserSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.authUserSubscription = this.authService.authUser$.subscribe({
      next: (user) => {
        this.authUserSinPipe = user;
      },
    });
  }

  login(): void {
    this.authService.login();
  }

  logout(): void {
    this.authService.logout();
  }

  isMobile(): boolean {
    return window.innerWidth <= 280;
  }
}
