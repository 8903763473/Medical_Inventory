import { Component, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent {

  constructor(public app: AppComponent) { }
  selected: any

  ionViewWillEnter() {
    this.app.ind = 4
    this.selected = 'date'
  }

  filterbyDate(data: any) {
    this.selected = data
  }
}
