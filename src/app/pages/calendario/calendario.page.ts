import { Component, OnInit } from '@angular/core';
//import { DatePicker } from '@ionic-native/date-picker/ngx';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  constructor(/*private datePicker: DatePicker*/) { }

  ngOnInit() {
    /*this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => console.log('Got date: ', date),
      err => console.log('Error occurred while getting date: ', err)
    );*/
  }

}
