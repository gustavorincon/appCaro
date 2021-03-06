import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { FormGroup, Validators,FormBuilder} from '@angular/forms';
import { Embarazada } from '../models/embarazada';
import { NavController, ModalController } from '@ionic/angular';
import { SEMANAS, CONTROLES } from '../constant/constant';
import { DetalleComponent } from '../components/detalle/detalle.component';
import { AlertGlobalService } from './alert-global.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceGeneralService {

  public viewButtomHeader:Boolean=false;
  slideOpts={};


  myForm: FormGroup;
  dateUltimaMestruacion:Date;
  fechaParto:String="";
  edadGestacion:Number=0;
  numeroSemanas:Number=0;
  numeroDias:Number=0;
  embarazada:Embarazada;


  public citas:Array<any>;
  public titulo1:String;
  public descripcion1:String;
  public titulo2:String;
  public descripcion2:String;
  public titulo3:String;
  public descripcion3:String;
  semanaActual:Number=0;


  mostrarCambioTu:Boolean;
  mostrarCabiosBebe:Boolean;

  public tituloActual:String;
  public descripcionActual:String;
  public imagenActual:Number;
  slides: {id:Number, img: string, titulo: string, desc: string }[] = SEMANAS;
  controles:{id:Number, img: string, titulo: string, desc: string}[]=CONTROLES;
  


 
  constructor(private http: HttpClient,
              public navCtrl: NavController,
              public formBuilder: FormBuilder,
              private modalCtrl: ModalController,
              public alertGlobalService:AlertGlobalService) {
    
    this.mostrarCambioTu=true;
    this.mostrarCabiosBebe=false;
    this.embarazada=JSON.parse(localStorage.getItem('embarazada'));
    if(this.embarazada!=null){
      this.edadGestacion=this.embarazada.EdadGestacion;
      this.numeroSemanas= this.embarazada.numeroSemanas;
      this.numeroDias=this.embarazada.numeroDias;
      this.fechaParto=this.embarazada.fechaParto;
    }else{
      this.embarazada= new Embarazada('','',0,0,0);
    }
    this.myForm = this.createForm();
    this.Citas();
   }


   private createForm(){
    return this.formBuilder.group({
      fecha:[this.embarazada.fechaCiclo,Validators.required]
    });
  }

  save(opt){
    if(this.myForm.valid){
      this.embarazada= new Embarazada(this.myForm.value.fecha,this.fechaParto,this.edadGestacion,this.numeroSemanas,this.numeroDias);
      localStorage.setItem('embarazada', JSON.stringify(this.embarazada));
      if(opt==1){
        this.navCtrl.navigateRoot("tabs/citas");
      }else{
        this.alertGlobalService.presentAlert('Atención','Infomación actualizada','Cerrar');
      }
    }
   }

   calcularFechaParto(event){
    if(this.myForm.value.fecha!=null &&this.myForm.value.fecha!=''){
      this.dateUltimaMestruacion= new Date(this.myForm.value.fecha);
      let fechaActual= new Date();
      let diferencia=fechaActual.getTime() - this.dateUltimaMestruacion.getTime();
      this.edadGestacion=(Math.floor(diferencia / (1000 * 60 * 60 * 24)))/7;
      this.edadGestacion=Number(this.edadGestacion.toFixed(1));
      if(Number(this.edadGestacion)<1){
        this.numeroSemanas= 1;
        this.numeroDias=0;
      }
      else if (Number(this.edadGestacion) % 1 == 0) {
        this.numeroSemanas=this.edadGestacion;
        this.numeroDias=0;
       } else {
         let arre=String(this.edadGestacion).split('.');
         this.numeroSemanas=Math.round(Number(arre[0]));
         this.numeroDias=Math.trunc(Number(arre[1]));
       }
      this.dateUltimaMestruacion.setDate(this.dateUltimaMestruacion.getDate()+280);
      var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
      var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
      this.fechaParto=diasSemana[this.dateUltimaMestruacion.getDay()] + ", " + this.dateUltimaMestruacion.getDate() + " de " + meses[this.dateUltimaMestruacion.getMonth()] + " de " + this.dateUltimaMestruacion.getFullYear();
    }
  }

  Citas(){
    this.getCitas().subscribe(data => {
      this.citas=data.citas;
      this.getIndex(this.embarazada.numeroSemanas);
  });
  }


  getIndex(num) {
    this.slides.forEach(element => {
      
      if(element.id==num){
         this.tituloActual= element.titulo;
         this.descripcionActual=element.desc;
         this.imagenActual=element.id;
      }
    });
    this.titulo1="";
    this.descripcion1="";
    this.titulo2="";
    this.descripcion2="";
    this.titulo3="";
    this.descripcion3="";
    this.llenarlistas(num);
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

  segmentChanged( event ) {
    const valorSegmento = event.detail.value;
    this.setVariables();
    if(valorSegmento=='M'){
      this.mostrarCambioTu=true;
    }else{
      this.mostrarCabiosBebe=true;
    }
    }

    
  setVariables(){
    this.mostrarCambioTu=false;
    this.mostrarCabiosBebe=false;
  }


  public actualizarValor(){
    this.embarazada=JSON.parse(localStorage.getItem('embarazada'));
    if(this.embarazada!=null){
      this.edadGestacion=this.embarazada.EdadGestacion;
      this.numeroSemanas= this.embarazada.numeroSemanas;
      this.numeroDias=this.embarazada.numeroDias;
      this.fechaParto=this.embarazada.fechaParto;
      this.getIndex(this.embarazada.numeroSemanas);
    }else{
      this.embarazada= new Embarazada('','',0,0,0);
    }
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

  public getNoticias(): Observable<any> {
    return this.http.get("./assets/json/noticias.json");
 }

 public getCitas(): Observable<any> {
  return this.http.get("./assets/json/citas.json");
 }

  public getControles(): Observable<any> {
  return this.http.get("./assets/json/controles.json");
 }

}
