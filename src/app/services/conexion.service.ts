import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {
  // baseUrl = 'http://localhost:800/webServicePWE2/controller/';
  baseUrl = 'https://ee73-201-159-192-203.ngrok.io/webServicePWE2/controller/';
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*'
    })
  };
  constructor(private http: HttpClient) { }

  
  Get(Modelo: string, Accion: string) {
    return this.http.get(`${this.baseUrl}${Modelo}.php?opcion=${Accion}`, this.httpOptions);
  }

  Post(Modelo: string, Accion: string, Datos: any) {
    return this.http.post(`${this.baseUrl}${Modelo}.php?opcion=${Accion}`, Datos, this.httpOptions);
  }

}