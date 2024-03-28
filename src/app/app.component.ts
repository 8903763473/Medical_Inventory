import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  menu: any = [
    {
      id: 1,
      img: '../assets/img/Dashboard.svg',
      fill_img: '../assets/img/Dashboard_color.svg',
      name: 'Dashboard',
      path: 'home'
    },
    {
      id: 2,
      img: '../assets/img/Manage_Inventory.svg',
      fill_img: '../assets/img/Manage_Inventory_color.svg',
      name: 'Inventory Master',
      path: 'Manage-Inventory'
    },
    {
      id: 3,
      img: '../assets/img/Inventory.svg',
      fill_img: '../assets/img/Inventory_color.svg',
      name: 'Add to Inventory',
      path: 'Inventory'
    },
    {
      id: 4,
      img: '../assets/img/prescription.svg',
      fill_img: '../assets/img/prescription_color.svg',
      name: 'Prescription',
      path: 'prescription'
    },
    {
      id: 5,
      img: '../assets/img/manageOrder.svg',
      fill_img: '../assets/img/manageOrder_color.svg',
      name: 'Manage Orders',
      path: 'Orders'
    },
    {
      id: 6,
      img: '../assets/img/Reports.svg',
      fill_img: '../assets/img/Reports_color.svg',
      name: 'Inventory Report',
      path: 'Reports/1'
    },
    {
      id: 7,
      img: '../assets/img/expiry.svg',
      fill_img: '../assets/img/expirycolor.svg',
      name: 'Expiry Report',
      path: 'Reports/2'
    },
    {
      id: 8,
      img: '../assets/img/Settings.svg',
      fill_img: '../assets/img/Settings_color.svg',
      name: 'Settings',
      path: 'Settings'
    }
  ]

  Search: any
  ind: any
  loader: boolean = false
  Open: boolean = false
  alertButtons = ['Action'];
  constructor(public router: Router, private alertController: AlertController, private location: Location) { }

  ionViewWillEnter() {
    this.ind = 1
    this.Open = false
  }

  OpenMenu() {
    // if (this.Open == false) {
    //   this.Open = true
    // } else {
    //   this.Open = false
    // }
    this.location.back()
  }

  change(data: any) {
    console.log(data);

  }

  routes(path: any) {
    if (path != 'logOut') {
      this.router.navigate(['/' + path]);
    } else {
      this.LogoutAlert()
    }
  }

  async LogoutAlert() {
    const alert = await this.alertController.create({
      header: 'Alert !',
      message: 'Are you sure to logout this Account.',
      buttons: ['Cancel', 'Sure'],
    });

    await alert.present();
  }

}
