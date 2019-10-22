import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {

  @Input() actividad;

  public titulo:String;
  public img:String;
  public descripcion:String;
  public verImagen:boolean=false;


  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
    if(this.actividad!=null){
      this.titulo=this.actividad.titulo;
      this.img=this.actividad.img;
      this.descripcion= this.actividad.desc;

      if(this.img!="" && this.img!=undefined){
        this.verImagen=true;
      }

    }
  }


  regresar() {
    this.modalCtrl.dismiss();
  }

}
