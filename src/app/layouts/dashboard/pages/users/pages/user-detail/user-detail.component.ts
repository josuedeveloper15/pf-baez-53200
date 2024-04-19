import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../users.service';
import { finalize, first, Observable } from 'rxjs';
import { IUser } from '../../models';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss',
})
export class UserDetailComponent {
  user$: Observable<IUser | undefined>;

  loading = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private usersSerivice: UsersService
  ) {
    this.loading = true;
    this.user$ = this.usersSerivice
      .getUserById(parseInt(this.activatedRoute.snapshot.params['id']))
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      );
  }

  cambiarParametro(): void {
    this.router.navigate(['dashboard', 'users', Math.random().toFixed(2)]);
  }
}
