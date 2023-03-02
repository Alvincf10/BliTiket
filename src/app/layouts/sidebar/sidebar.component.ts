import { NavigationModel } from './../../@core/models/navigation.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  navigation = new NavigationModel();
  constructor() { }

  ngOnInit(): void {
  }

}
