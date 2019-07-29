import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SEMANAS } from '../../constant/constant';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.page.html',
  styleUrls: ['./citas.page.scss'],
})
export class CitasPage implements OnInit {

  ocultar = '';

  slides: { img: string, titulo: string, desc: string }[] = SEMANAS;

  constructor( private navCtrl: NavController ) { }

  ngOnInit() {
  }

  onClick() {

    this.ocultar = 'animated fadeOut fast';
    this.navCtrl.navigateBack('/');
    console.log("holaaaa");

  }


}
