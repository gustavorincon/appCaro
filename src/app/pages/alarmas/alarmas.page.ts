import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment, NavController, ModalController } from '@ionic/angular';
import { ServiceGeneralService } from '../../services/service-general.service';
import { Router } from '@angular/router';
import { DetalleComponent } from '../../components/detalle/detalle.component';


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

  

  constructor(public serviceGeneralService:ServiceGeneralService,private router:Router,
     private navCtrl: NavController,
     private modalCtrl: ModalController) { 
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

  async cambiarPagina( id: string ) {

    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        id
      }
    });

    modal.present();

  }

}
