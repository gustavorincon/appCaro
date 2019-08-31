import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() actividad;

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.actividad);
  }


  regresar() {
    this.modalCtrl.dismiss();
  }

}
