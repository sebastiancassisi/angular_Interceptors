import { Component } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor(
    private usuariosService: UsuariosService
  ) {

    this.usuariosService.obtenerUsuarios()
      .subscribe(res => {
        console.log(res);
      }, (err) => {
        console.log('Error en el appComponent');
      }
      );

  }



}


