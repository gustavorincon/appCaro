import { Component, OnInit } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Embarazada } from '../../models/embarazada';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {


  myForm: FormGroup;
  dateUltimaMestruacion:Date;
  fechaParto:String="";
  edadGestacion:Number=0;
  numeroSemanas:Number=0;
  numeroDias:Number=0;
  embarazada:Embarazada;

  constructor(private popoverCtrl: PopoverController,public navCtrl: NavController,public formBuilder: FormBuilder) {
    this.myForm = this.createForm();
   }

  ngOnInit() {}

  private createForm(){
    return this.formBuilder.group({
      fecha:['',Validators.required]
    });
  }

  onClick( valor: number ) {

    console.log('item:', valor);

    this.popoverCtrl.dismiss({
      item: valor
    });

  }

}
