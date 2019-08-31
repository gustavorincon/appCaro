import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Embarazada } from '../../models/embarazada';
import { NavController } from '@ionic/angular';
import { ServiceGeneralService } from '../../services/service-general.service';

@Component({
  selector: 'app-informate',
  templateUrl: './informate.page.html',
  styleUrls: ['./informate.page.scss'],
})
export class InformatePage implements OnInit {

 

  constructor( public navCtrl: NavController,public formBuilder: FormBuilder,
    public serviceGeneralService:ServiceGeneralService) { 
     this.serviceGeneralService.viewButtomHeader=false;
   }

  

  ngOnInit() {
   
   console.log(this.serviceGeneralService.edadGestacion);
   

   
  }

  onSubmitTemplate() {
    console.log('Form submit');
    console.log( 'dddd' );
  }





}
