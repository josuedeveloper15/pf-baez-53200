import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  showFiller = false;

  mostrarComponent = true;

  isMobile(): boolean {
    return window.innerWidth <= 280;
  }
}
