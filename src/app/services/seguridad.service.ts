import { Injectable } from "@angular/core";
import { RegistrosUsuarios } from "../components/interfaces/seguridad";
@Injectable({
    providedIn: 'root'
  })

  export class SeguridadService {
    private _usuario: RegistrosUsuarios[]=[

    ];

    public get usuarios() : RegistrosUsuarios[]{
        return[...this._usuario];
    }

    agregarArticulo(usuarios: RegistrosUsuarios){
        this. _usuario.push(usuarios);
    }

    constructor(){}
  }