import { Component, OnInit } from '@angular/core';
//agregas el servicio aqui 
import {CargarScriptsService} from "src/app/cargar-scripts.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //creas un constructor con objeto de CargarScriptsService
  constructor( private _CARGASCRIPTS:CargarScriptsService) {
    //direccionas el objeto como --> objeto.carga(["nombre de archivo js sin la extension ".js" "])
    _CARGASCRIPTS.carga(["login"])
   }

  ngOnInit(): void {
  }

}
