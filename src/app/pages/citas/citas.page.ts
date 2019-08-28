import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { IonSegment, IonSlides } from '@ionic/angular';
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
  semanaActual:Number=0;
  slideOpts={};
  public citas:Array<any>;
  public tenerCuenta:Array<any>;
  public cambioEnTi:Array<any>;
  public cambiosBebe:Array<any>;
  
 @ViewChild('testSlider', {static: false}) slider: IonSlides;
 
  

  ocultar = '';
  slides: { img: string, titulo: string, desc: string }[] = SEMANAS;
  

  publisher = '';

  constructor( private navCtrl: NavController, public serviceGeneralService:ServiceGeneralService ) { 
 
    this.tenerCuenta= new Array<any>();
    this.cambioEnTi= new Array<any>();
    this.cambiosBebe= new Array<any>();
    
  }

  ngOnInit() {
    this.embarazada=JSON.parse(localStorage.getItem('embarazada'));
    this.serviceGeneralService.viewButtomHeader=true;
    this.slideOpts = {
      initialSlide: Number(this.embarazada.numeroSemanas)-1,
      speed: 400
    };
    this.mostrarExamenes=true;
    this.mostrarCuidados=false;
    this.mostrarAlimentacion=false;
    this.getCitas();
  }

  getCitas(){
    this.serviceGeneralService.getCitas().subscribe(data => {
      this.citas=data.citas;
      this.getIndex();
  });
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


  }

  setVariables(){
    this.mostrarExamenes=false;
    this.mostrarCuidados=false;
    this.mostrarAlimentacion=false;
  }

  getIndex() {
    this.slider.getActiveIndex().then(
      (index)=>{
        this.semanaActual = index+1;
        this.tenerCuenta= new Array<any>();
        this.cambioEnTi= new Array<any>();
        this.cambiosBebe= new Array<any>();
        this.llenarlistas(this.semanaActual);
     });
    
  }


  llenarlistas(semanaActual){
    this.citas.forEach(element => {
      if(element.semana==semanaActual){
        if(element.tipo=="T"){
          this.tenerCuenta.push(element);
        }else if(element.tipo=="B"){
          this.cambiosBebe.push(element);
        }else{
          this.cambioEnTi.push(element);
        }
      }
    });

  }


}
