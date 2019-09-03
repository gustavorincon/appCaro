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
 
  embarazada:Embarazada;
  ocultar = '';
  publisher = '';
  constructor( private navCtrl: NavController, public serviceGeneralService:ServiceGeneralService ) { 
     
  }

  ngOnInit() {
    this.serviceGeneralService.viewButtomHeader=true;
  }

  ngAfterViewInit() {
   console.log("hgolaaaaaa");
  }

  


  onClick() {
    this.ocultar = 'animated fadeOut fast';
    this.navCtrl.navigateBack('/');
  }

 





}
