import { Component } from '@angular/core';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent {
  libros = ['Matemática 1', 'Algoritmos Básicos', 'Álgebra Nivel Básico'];

  eliminarLibro(libro: any) {
    this.libros = this.libros.filter(p => p !== libro);
  }

  guardarLibro(f: any) {
    console.log(f);
    console.log(f.valid);
    if (f.valid) {
      this.libros.push(f.value.nombreLibro);
    }
  }
}
