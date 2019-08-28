import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
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
export class CitasPage implements OnInit,AfterViewInit {
  mostrartenerCuenta:Boolean;
  mostrarCambioTu:Boolean;
  mostrarCabiosBebe:Boolean;
  embarazada:Embarazada;
  semanaActual:Number=0;
  slideOpts={};
  public citas:Array<any>;
  public titulo1:String;
  public descripcion1:String;
  public titulo2:String;
  public descripcion2:String;
  public titulo3:String;
  public descripcion3:String;

  
 @ViewChild('testSlider', {static: false}) slider: IonSlides;
 
  

  ocultar = '';
  slides: { img: string, titulo: string, desc: string }[] = SEMANAS;
  

  publisher = '';

  constructor( private navCtrl: NavController, public serviceGeneralService:ServiceGeneralService ) { 
     
  }

  ngOnInit() {
    this.embarazada=JSON.parse(localStorage.getItem('embarazada'));
    this.serviceGeneralService.viewButtomHeader=true;
    this.slideOpts = {
      initialSlide: Number(this.embarazada.numeroSemanas)-1,
      speed: 400
    };
    this.mostrartenerCuenta=true;
    this.mostrarCambioTu=false;
    this.mostrarCabiosBebe=false;
    this.getCitas();
  }

  ngAfterViewInit() {
   console.log("hgolaaaaaa");
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
  if(valorSegmento=='T'){
    this.mostrartenerCuenta=true;
  }else if(valorSegmento=='M'){
    this.mostrarCambioTu=true;
  }else{
    this.mostrarCabiosBebe=true;
  }


  }

  setVariables(){
    this.mostrartenerCuenta=false;
    this.mostrarCambioTu=false;
    this.mostrarCabiosBebe=false;
  }

  getIndex() {
    this.slider.getActiveIndex().then(
      (index)=>{
        this.semanaActual = index+1;
        this.titulo1="";
        this.descripcion1="";
        this.titulo2="";
        this.descripcion2="";
        this.titulo3="";
        this.descripcion3="";
        this.llenarlistas(this.semanaActual);
     });
    
  }


  llenarlistas(semanaActual){
    this.citas.forEach(element => {
      if(element.semana==semanaActual){
        if(element.tipo=="T"){
          this.titulo1=element.titulo;
          this.descripcion1=element.descripcion;
        }else if(element.tipo=="M"){
          this.titulo2=element.titulo;
          this.descripcion2=element.descripcion;
        }else{
          this.titulo3=element.titulo;
          this.descripcion3=element.descripcion;
        }
      }
    });

  }


}
