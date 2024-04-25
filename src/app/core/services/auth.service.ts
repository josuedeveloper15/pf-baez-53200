import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../../layouts/dashboard/pages/users/models';
import { LoginData } from '../../layouts/auth/models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _authUser$ = new BehaviorSubject<IUser | null>(null);
  public authUser$ = this._authUser$.asObservable();

  login(data: LoginData): void {
    if (data.email !== 'user@mail.com' || data.password !== '123456') {
      alert('Correo o password incorrectos');
    } else {
      this._authUser$.next({
        id: 1,
        createdAt: new Date(),
        email: 'email@mail.com',
        firstName: 'goku',
        lastName: 'son',
        role: 'ADMIN',
      });
    }
  }

  logout(): void {
    this._authUser$.next(null);
  }
}
