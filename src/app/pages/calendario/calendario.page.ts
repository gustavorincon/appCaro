import { Component, OnInit } from '@angular/core';
import { ServiceGeneralService } from '../../services/service-general.service';


@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
})
export class CalendarioPage implements OnInit {

  constructor(public serviceGeneralService:ServiceGeneralService) { }

  ngOnInit() {
    
  }

 
}
