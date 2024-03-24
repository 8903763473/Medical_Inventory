import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-inventory-details',
  templateUrl: './inventory-details.component.html',
  styleUrls: ['./inventory-details.component.scss'],
})
export class InventoryDetailsComponent {

  constructor(public app: AppComponent) { }

  ionViewWillEnter() {
    this.app.ind = 0
  }

}
