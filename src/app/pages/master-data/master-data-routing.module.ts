import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcaraComponent } from './acara/acara.component';

const routes: Routes = [
  {
    path:'acara',
    component:AcaraComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterDataRoutingModule { }
