import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Embarazada } from './models/embarazada';
//import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  embarazada:Embarazada;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public navCtrl: NavController,
  //  private ga: GoogleAnalytics
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.embarazada=JSON.parse(localStorage.getItem('embarazada'));
      if(this.embarazada!=null){
        let dateUltimaMestruacion= new Date(String(this.embarazada.fechaCiclo));
        let fechaActual= new Date();
        let diferencia=fechaActual.getTime() - dateUltimaMestruacion.getTime();
        let edadGestacion=(Math.floor(diferencia / (1000 * 60 * 60 * 24)))/7;
        edadGestacion=Number(edadGestacion.toFixed(1));
        let numeroSemanas=0;
        let numeroDias=0;
        if(Number(edadGestacion)<1){
          numeroSemanas= 1;
          numeroDias=0;
        }
        else if (Number(edadGestacion) % 1 == 0) {
           numeroSemanas= edadGestacion;
           numeroDias=0;
         } else {
           let arre=String(edadGestacion).split('.');
           numeroSemanas=Math.round(Number(arre[0]));
           numeroDias=Math.trunc(Number(arre[1]));
         }
         dateUltimaMestruacion.setDate(dateUltimaMestruacion.getDate()+280);
         this.embarazada.numeroSemanas=numeroSemanas;
         this.embarazada.numeroDias=numeroDias;
         this.embarazada.EdadGestacion=edadGestacion;
         localStorage.setItem('embarazada', JSON.stringify(this.embarazada));
         this.navCtrl.navigateRoot("tabs/citas");
      }
      /*this.ga.startTrackerWithId('UA-146142063-1')
      .then(() => {}).catch(e =>console.log("error") /*alert('Error starting GoogleAnalytics == '+ e));*/
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


 

}
