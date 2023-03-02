import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/signin',
    pathMatch:'full'
  },
  {
    path:'',
    loadChildren:() => import('./auth/auth.module').then((m)=> m.AuthModule)
  },
  {
    path:'backoffice',
    component:PagesComponent,
    // canActivate: [AuthGuard],
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'master-data',
        loadChildren:() => import('../pages/master-data/master-data.module').then((m)=> m.MasterDataModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
