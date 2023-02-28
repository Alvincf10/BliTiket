import { FooterComponent } from './../layouts/footer/footer.component';
import { SidebarComponent } from './../layouts/sidebar/sidebar.component';
import { HeaderComponent } from './../layouts/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';


@NgModule({
  declarations: [
    PagesComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
