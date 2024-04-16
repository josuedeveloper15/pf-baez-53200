import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  filter,
  first,
  map,
  Observable,
  skip,
  Subject,
  Subscription,
  take,
  takeUntil,
  tap,
} from 'rxjs';
import { IUser } from '../users/models';

@Component({
  selector: 'app-clase-10-rxjs-2',
  templateUrl: './clase-10-rxjs-2.component.html',
  styleUrl: './clase-10-rxjs-2.component.scss',
})
export class Clase10Rxjs2Component implements OnInit, OnDestroy {
  cambioElUsuario$ = new Subject<boolean>();

  componenteDestruido$ = new Subject<boolean>();
  componenteDestruidoBehavior$ = new BehaviorSubject([]);
  usuarioAutenticado$ = new BehaviorSubject<IUser | null>(null);

  obtenerUsuarioSubscription?: Subscription;

  login(): void {
    this.cambioElUsuario$.next(true);
  }

  ngOnDestroy(): void {
    console.log('El componente se destruyo');
    this.componenteDestruido$.next(true);

    this.obtenerUsuarioSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    const obtenerUsuario$ = new Observable<number>((observer) => {
      let counter = 0;
      setInterval(() => {
        counter++;
        observer.next(counter);
      }, 1000);
    });

    this.obtenerUsuarioSubscription = obtenerUsuario$
      // .pipe(takeUntil(this.componenteDestruido$))
      .subscribe({
        next: (v) => console.log(v),
      });

    this.cambioElUsuario$.subscribe({
      next: (value) => {
        this.usuarioAutenticado$.next({
          id: 1,
          createdAt: new Date(),
          email: 'email@mail.com',
          firstName: 'goku',
          lastName: 'son',
          role: 'ADMIN',
        });
      },
    });

    this.usuarioAutenticado$.subscribe({
      next: (value) => {
        console.log(value);
      },
    });

    // const obtenerUsuarioSubscription = obtenerUsuario$
    //   .pipe(
    //     tap((value) => {
    //       console.log('TAP 1', value);
    //     }),
    //     map((value) => {
    //       return value * 2;
    //     }),
    //     filter((value) => {
    //       return value > 5;
    //     }),
    //     tap((value) => {
    //       console.log('TAP 2', value);
    //     })
    //   )
    //   .subscribe({
    //     next: (value) => {
    //       console.log(value);
    //     },
    //     error: () => {},
    //     // finally
    //     complete: () => {
    //       console.log(
    //         'El observable se completo, por lo tanto no emite mas valores'
    //       );
    //     },
    //   });
  }
}
