import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: 'usuario.component.html'
})

export class UsuarioComponent {

  usuarios = ['Rafael', 'Sara', 'Yan', 'Rosa'];
  usuarioNombre = "Rafael";
  visible = false;

  constructor() {
    setTimeout(() => {
      this.visible = true;
    }, 3000)
  }

  onAgregarUsuario() {
    this.usuarios.push(this.usuarioNombre);
  }
}
