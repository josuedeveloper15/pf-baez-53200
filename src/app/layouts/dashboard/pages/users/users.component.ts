import { Component } from '@angular/core';
import { IUser } from './models';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'createdAt',
  ];

  users: IUser[] = [
    {
      id: 1,
      firstName: 'Naruto',
      lastName: 'Uzumaki',
      email: 'naru@test.com',
      createdAt: new Date(),
    },
    {
      id: 2,
      firstName: 'Sasuke',
      lastName: 'Uchiha',
      email: 'sasuke@test.com',
      createdAt: new Date(),
    },
  ];

  constructor(private matDialog: MatDialog) {}

  openDialog(): void {
    this.matDialog
      .open(UserDialogComponent)
      .afterClosed()
      .subscribe({
        next: (result) => {
          if (result) {
            // LOGICA DE CREAR EL USUARIO
            // this.users.push(result);
            this.users = [...this.users, result];
          }
        },
      });
  }
}
