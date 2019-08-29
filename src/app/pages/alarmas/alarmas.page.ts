import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { ServiceGeneralService } from '../../services/service-general.service';

@Component({
  selector: 'app-alarmas',
  templateUrl: './alarmas.page.html',
  styleUrls: ['./alarmas.page.scss'],
})
export class AlarmasPage implements OnInit {

  categorias = [
    {
      "nombre":"alarmas",
      "tipo":"A"
    },
    {
      "nombre":"nutrición",
      "tipo":"N"
    },
    {
      "nombre":"Actividad fisica",
      "tipo":"F"
    },
    {
      "nombre":"Educación",
      "tipo":"E"
    }
    ];
  listaAlarmas:Array<any>;
  listaRespuesta:Array<any>;

  

  constructor(public serviceGeneralService:ServiceGeneralService) { 
    this.listaAlarmas= new Array<any>();
    this.listaRespuesta= new Array<any>();
  }

  ngOnInit() {
    this.getNoticias();
  }

  getNoticias(){
    this.serviceGeneralService.getNoticias().subscribe(data => {
      this.listaAlarmas=data.noticias;
  });
  }

  getLista(tipo){
    this.listaRespuesta= new Array<any>();
    this.listaAlarmas.forEach(element => {
      if(element.tipo==tipo){
        this.listaRespuesta.push(element);
      }
    });
  }

}
