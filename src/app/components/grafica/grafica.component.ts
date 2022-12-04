import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WebsocketService } from 'src/app/services/websocket.service';
import { withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.scss']
})
export class GraficaComponent implements OnInit {
  public temperatura:any
  public lluvia:any

  public lineChartTemp: Array<any> = [
    { data: [], 
      label: 'Temperatura',
      borderColor: 'rgb(255, 93, 51)',
      backgroundColor: 'rgb(255, 9, 51)'
    }
  ];
  
  public lineChartRain: Array<any> = [
    { data: [], 
      label: 'lluvia',
      backgroundColor: 'rgb(51, 23, 255)',
      borderColor: 'rgb(51, 230, 255)'}
  ];

  public lineChartLabels: Array<any> = [];

  constructor(
    private http: HttpClient,
    public wsService: WebsocketService
  ) {

  }

  ngOnInit() {
    this.getData();
    this.escucharSocket();
  }

  getData() {
    // https://58ed-201-159-192-203.ngrok.io/grafica
    this.http.get('http://localhost:4003/grafica')
      .subscribe( (data: any) =>{
        // console.log(data); 
        this.temperatura = data.temperatura;
        this.lluvia =data.lluvia;
        this.lineChartTemp = data.datotemperatura;
        this.lineChartRain = data.datolluvia;
        this.lineChartLabels = data.labelsxMin;
        //console.log(this.lineChartLabels); 
      }  );
  }

  escucharSocket() {
    this.wsService.listen('cambio-grafica')
      .subscribe( (data: any) => {
        console.log('socket', data);
        this.temperatura = data.temperatura;
        this.lluvia = data.lluvia;
        this.lineChartTemp = data.datotemperatura;
        this.lineChartRain = data.datolluvia;
        this.lineChartLabels = data.labelsxMin;
      });

  }
}