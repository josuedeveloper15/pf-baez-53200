import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { IUser } from './pages/users/models';
import { filter, map, Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Data, NavigationEnd, Router } from '@angular/router';

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

  routeData$: Observable<Data | undefined>;

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.authUser$ = this.authService.authUser$;

    this.routeData$ = router.events.pipe(
      filter((ev) => ev instanceof NavigationEnd),
      map(() => route.firstChild?.snapshot.data)
    );
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

  logout(): void {
    this.authService.logout();
    this.router.navigate(['auth']);
  }

  isMobile(): boolean {
    return window.innerWidth <= 280;
  }
}
