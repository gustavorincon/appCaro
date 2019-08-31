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

  @ViewChild(IonSegment,{static: false}) segment: IonSegment;

  categorias = ['alarmas','nutrición','Actividad fisica','Educación'];

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
    console.log(this.segment);
    this.segment.value = this.categorias[0];
  }

  getNoticias(){
    this.serviceGeneralService.getNoticias().subscribe(data => {
      this.listaAlarmas=data.noticias;
  });
  }

  getLista(event){
    this.listaRespuesta= new Array<any>();
    this.listaAlarmas.forEach(element => {
      if(element.tipo==event.detail.value){
        this.listaRespuesta.push(element);
      }
    });
  }

  async cambiarPagina( actividad) {

    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps: {
        actividad
      }
    });

    modal.present();

  }

}
