import { RouterModule, Routes } from '@angular/router';
import { OfertaDetailsComponent } from './oferta-details.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: OfertaDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfertaDetailsRoutingModule { }
