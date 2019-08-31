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

 

  constructor( public formBuilder: FormBuilder,
   public serviceGeneralService:ServiceGeneralService) { 
    
    this.serviceGeneralService.viewButtomHeader=false;
  }


  

  ngOnInit() {
   
    
  }

  onSubmitTemplate() {
    console.log('Form submit');
    console.log( 'dddd' );
  }

  
   
  


 

}
