import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { SEMANAS } from '../../constant/constant';
import { Embarazada } from '../../models/embarazada';

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

  ocultar = '';
  slides: { img: string, titulo: string, desc: string }[] = SEMANAS;
  

  publisher = '';

  constructor( private navCtrl: NavController ) { 
    this.embarazada=JSON.parse(localStorage.getItem('embarazada'));
    console.log(this.embarazada);
  }

  ngOnInit() {
    this.mostrarExamenes=true;
    this.mostrarCuidados=false;
    this.mostrarAlimentacion=false;
  }

  onClick() {

    this.ocultar = 'animated fadeOut fast';
    this.navCtrl.navigateBack('/');
    console.log("holaaaa");

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
