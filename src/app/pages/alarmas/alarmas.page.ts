import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { ServiceGeneralService } from '../../services/service-general.service';

@Component({
  selector: 'app-alarmas',
  templateUrl: './alarmas.page.html',
  styleUrls: ['./alarmas.page.scss'],
})
export class AlarmasPage implements OnInit {

  //@ViewChild(IonSegment) segment: IonSegment;
  categorias = ['alarmas', 'nutrición', 'Actividad fisica', 'Educación' ];

  

  constructor(public serviceGeneralService:ServiceGeneralService) { }

  ngOnInit() {
    this.getNoticias();
  }

  getNoticias(){
    this.serviceGeneralService.getNoticias().subscribe(data => {
      console.log(data.noticias);
  });
  }

}
