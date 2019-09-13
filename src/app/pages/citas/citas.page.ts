import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NavController } from '@ionic/angular';
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

  @ViewChild(IonSegment,{static: true}) segment: IonSegment;

  constructor( private navCtrl: NavController, public serviceGeneralService:ServiceGeneralService ) { 
     
  }

  ngOnInit() {
    this.segment.value = "M";
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
