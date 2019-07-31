import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Embarazada } from './models/embarazada';

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
    public navCtrl: NavController
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.embarazada=JSON.parse(localStorage.getItem('embarazada'));
      if(this.embarazada!=null){
        this.navCtrl.navigateRoot("tabs/citas");
      }
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
