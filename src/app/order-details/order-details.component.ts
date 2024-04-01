import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
})
export class OrderDetailsComponent implements OnInit {

  constructor(public location: Location, public app: AppComponent) { }

  ngOnInit() {
    this.app.ind = 0


    this.app.loader = true
    setTimeout(() => {
      this.app.loader = false
    }, 500)
  }

  AllCheckBox: boolean = false


  AllCheck(data: any) {
    if (data.target.checked == true) {
      this.AllCheckBox = true
    } else if (data.target.checked == false) {
      this.AllCheckBox = false
    }
  }

  Delivered() {
    this.location.back()
  }
}
