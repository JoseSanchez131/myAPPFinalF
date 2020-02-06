import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MegustasPage } from './megustas.page';

const routes: Routes = [
  {
    path: '',
    component: MegustasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MegustasPageRoutingModule {}
