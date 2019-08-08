import { Component, OnInit, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() titulo:String;

  constructor( private popoverCtrl: PopoverController) { }

  ngOnInit() {}

  async mostrarPop( evento ) {

    const popover = await this.popoverCtrl.create({
      component: ModalComponent,
      event: evento,
      mode: 'ios',
      backdropDismiss: false
    });

    await popover.present();

    // const { data } = await popover.onDidDismiss();
    const { data } = await popover.onWillDismiss();

    console.log('Padre:', data );

  }

}
