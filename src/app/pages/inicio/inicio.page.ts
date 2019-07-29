import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  myForm: FormGroup;

  constructor( public navCtrl: NavController,public formBuilder: FormBuilder) { 
    this.myForm = this.createForm();
  }


  private createForm(){
    return this.formBuilder.group({
      ciclo: ['ci',Validators.required],
      fecha:['',Validators.required],
      duracionMes:['',Validators.required]
    });
  }

  ngOnInit() {
  }

  onSubmitTemplate() {
    console.log('Form submit');
    console.log( 'dddd' );
  }


  save(){
    console.log("holaaaa")
    this.navCtrl.navigateRoot("tabs/citas");
  }

}
