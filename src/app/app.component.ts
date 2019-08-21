import { Component } from '@angular/core';

import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Embarazada } from './models/embarazada';
import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';

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
    private ga: GoogleAnalytics
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.embarazada=JSON.parse(localStorage.getItem('embarazada'));
      if(this.embarazada!=null){
        this.navCtrl.navigateRoot("tabs/citas");
      }
      this.ga.startTrackerWithId('UA-146142063-1')
      .then(() => {}).catch(e => alert('Error starting GoogleAnalytics == '+ e));
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


 

}
