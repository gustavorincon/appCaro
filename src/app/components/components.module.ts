import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { ModalComponent } from './modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetalleComponent } from './detalle/detalle.component';



@NgModule({
  declarations: [HeaderComponent,ModalComponent,DetalleComponent],
  exports:[HeaderComponent,ModalComponent,DetalleComponent ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents:[ModalComponent,DetalleComponent]
})
export class ComponentsModule { }
