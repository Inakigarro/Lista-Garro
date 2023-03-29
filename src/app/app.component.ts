import { Component } from '@angular/core';
import { alumno } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public alumnos: alumno[] = [
    {
      nombre: 'Nero Caldwell',
      email: 'dui.quis.accumsan@hotmail.ca',
      pais: 'Vietnam',
      marcado: false,
    },
    {
      nombre: 'Connor Frederick',
      email: 'donec.fringilla@google.net',
      pais: 'Belgium',
      marcado: false,
    },
    {
      nombre: 'Teagan Cherry',
      email: 'lacus.quisque.purus@hotmail.edu',
      pais: 'Spain',
      marcado: false,
    },
    {
      nombre: 'Lacy Thompson',
      email: 'vel@google.net',
      pais: 'Spain',
      marcado: false,
    },
    {
      nombre: 'Meghan Carver',
      email: 'magnis.dis.parturient@hotmail.com',
      pais: 'United States',
      marcado: false,
    },
  ];

  public marcarAlumno(index: number) {
    const alumno = this.alumnos[index];
    alumno.marcado = !alumno.marcado;
    console.log(alumno.marcado);
  }
}
