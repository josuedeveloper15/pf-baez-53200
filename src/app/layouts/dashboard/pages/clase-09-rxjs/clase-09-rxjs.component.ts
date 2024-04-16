import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AlertsService } from '../../../../core/services/alerts.service';

@Component({
  selector: 'app-clase-09-rxjs',
  templateUrl: './clase-09-rxjs.component.html',
  styleUrl: './clase-09-rxjs.component.scss',
})
export class Clase09RxjsComponent {
  constructor(private alertsService: AlertsService) {
    // this.obtenerResultado();
    // this.runReloj();

    this.alertsService.notifier$.next('Mensaje');
    this.alertsService.notifier$.complete();
  }

  runReloj() {
    const obs = new Observable((observer) => {
      // observer.error('Error al obtener la fecha');
      let counter = 5;
      setInterval(() => {
        counter--;
        if (counter === 0) observer.complete();
        observer.next(new Date());
      }, 1000);
    });

    obs.subscribe({
      // equivale al then
      next: (resultado) => {
        console.log(resultado);
      },
      // equivale al catch
      error: (error) => {
        console.error(error);
      },
      // equivale al finally
      complete: () => {
        console.log('El reloj dejo de emitir valores');
      },
    });
  }

  async obtenerResultado() {
    console.log('inicio');

    const meDevolveraElDinero = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 3000);
    });

    await meDevolveraElDinero
      .then((resultado) => {
        console.log(resultado);
      })
      .catch()
      .finally();

    console.log('final');
  }
}
