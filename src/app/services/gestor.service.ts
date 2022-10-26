import { Injectable } from "@angular/core";
import { futbol } from "../component/interfaces/futbol";

@Injectable({
    providedIn: 'root'
  })

  export class GestorService {
    private _articulo: futbol[]=[

    ];

    public get articulo() : futbol[]{
        return[...this._articulo];
    }

    agregarArticulo(articulo: futbol){
        this._articulo.push(articulo)
    }

    constructor(){}
  }