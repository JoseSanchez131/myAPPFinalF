import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MegustasPageRoutingModule } from './megustas-routing.module';

import { MegustasPage } from './megustas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MegustasPageRoutingModule
  ],
  declarations: [MegustasPage]
})
export class MegustasPageModule {}
