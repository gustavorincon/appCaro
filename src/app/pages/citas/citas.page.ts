import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { SEMANAS } from '../../constant/constant';
import { Embarazada } from '../../models/embarazada';
import { ServiceGeneralService } from '../../services/service-general.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.page.html',
  styleUrls: ['./citas.page.scss'],
})
export class CitasPage implements OnInit {
  mostrarExamenes:Boolean;
  mostrarCuidados:Boolean;
  mostrarAlimentacion:Boolean;
  embarazada:Embarazada;
  slideOpts={}
  

  ocultar = '';
  slides: { img: string, titulo: string, desc: string }[] = SEMANAS;
  

  publisher = '';

  constructor( private navCtrl: NavController, public serviceGeneralService:ServiceGeneralService ) { 
    
    
  }

  ngOnInit() {
    console.log("holaaa");
    this.embarazada=JSON.parse(localStorage.getItem('embarazada'));
    this.serviceGeneralService.viewButtomHeader=true;
    this.slideOpts = {
      initialSlide: Number(this.embarazada.numeroSemanas)-1,
      speed: 400
    };
    this.mostrarExamenes=true;
    this.mostrarCuidados=false;
    this.mostrarAlimentacion=false;
  }

  onClick() {
    this.ocultar = 'animated fadeOut fast';
    this.navCtrl.navigateBack('/');
  }

  segmentChanged( event ) {
  const valorSegmento = event.detail.value;
  this.setVariables();
  if(valorSegmento=='E'){
    this.mostrarExamenes=true;
  }else if(valorSegmento=='C'){
    this.mostrarCuidados=true;
  }else{
    this.mostrarAlimentacion=true;
  }



    console.log(valorSegmento);

  }

  setVariables(){
    this.mostrarExamenes=false;
    this.mostrarCuidados=false;
    this.mostrarAlimentacion=false;
  }


}
