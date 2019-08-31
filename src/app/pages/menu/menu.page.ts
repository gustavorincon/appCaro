import { Component, OnInit } from '@angular/core';
import { ServiceGeneralService } from '../../services/service-general.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(public serviceGeneralService:ServiceGeneralService) { }

  ngOnInit() {
  }

}
