import { Component, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent {

  constructor(public app: AppComponent, public router: Router) { }
  selected: any
  PageUrl: any

  ionViewWillEnter() {
    this.PageUrl = this.router.url.split('/')[2];
    if (this.PageUrl == 1) {
      this.app.ind = 4
    }
    else if (this.PageUrl == 2) {
      this.app.ind = 5
    }

    this.selected = 'date'
  }

  filterbyDate(data: any) {
    this.selected = data
  }

  ReportDetails(id: any, id2: any) {
    this.router.navigate(['Report_Details/' + id + '/' + id2])
  }
}
