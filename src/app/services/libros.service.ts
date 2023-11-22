import { Subject } from 'rxjs';
export class LibrosService {
  librosSubject = new Subject();
  private libros = ['Matemática 1', 'Algoritmos Básicos', 'Álgebra Nivel Básico'];

  agregarLibro(libroNombre: string) {
    this.libros.push(libroNombre);
    this.librosSubject.next(true);
  }

  obtenerLibros() {
    return [...this.libros];
  }
}
