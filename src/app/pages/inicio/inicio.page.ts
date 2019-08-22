import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Embarazada } from '../../models/embarazada';
import { ServiceGeneralService } from '../../services/service-general.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  myForm: FormGroup;
  dateUltimaMestruacion:Date;
  fechaParto:String="";
  edadGestacion:Number=0;
  numeroSemanas:Number=0;
  numeroDias:Number=0;
  embarazada:Embarazada;

  constructor( public navCtrl: NavController,public formBuilder: FormBuilder,
   public serviceGeneralService:ServiceGeneralService) { 
    this.myForm = this.createForm();
    this.serviceGeneralService.viewButtomHeader=false;
  }


  private createForm(){
    return this.formBuilder.group({
      fecha:['',Validators.required]
    });
  }

  ngOnInit() {
   
    this.embarazada=JSON.parse(localStorage.getItem('embarazada'));
    if(this.embarazada!=null){
      this.navCtrl.navigateRoot("tabs/citas");
    }
  }

  onSubmitTemplate() {
    console.log('Form submit');
    console.log( 'dddd' );
  }

  calcularFechaParto(){
    if(this.myForm.value.fecha!=null &&this.myForm.value.fecha!=''){
      this.dateUltimaMestruacion= new Date(this.myForm.value.fecha);
      let fechaActual= new Date();
      let diferencia=fechaActual.getTime() - this.dateUltimaMestruacion.getTime();
      this.edadGestacion=(Math.floor(diferencia / (1000 * 60 * 60 * 24)))/7;
      this.edadGestacion=Number(this.edadGestacion.toFixed(1));
      if (Number(this.edadGestacion) % 1 == 0) {
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


  save(){
   if(this.myForm.valid){
     this.embarazada= new Embarazada(this.myForm.value.fecha,this.fechaParto,this.edadGestacion,this.numeroSemanas,this.numeroDias);
     localStorage.setItem('embarazada', JSON.stringify(this.embarazada));
     this.navCtrl.navigateRoot("tabs/citas");
   }
  }

}
