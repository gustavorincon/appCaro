import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertGlobalService {



  constructor(public alertController: AlertController) { }


  public presentAlert(titulo,mensaje,boton) {
   this.alertController.create({
      header: titulo,
      message: mensaje,
      buttons: [boton]
    }).then(alert => {
      alert.present();
    });
  }
}
