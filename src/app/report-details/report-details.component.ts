import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-details',
  templateUrl: './report-details.component.html',
  styleUrls: ['./report-details.component.scss'],
})
export class ReportDetailsComponent {

  ActionPopup: boolean = false
  EditActionPopup: boolean = false
  LocalInventory: any = []
  Inventories: any = []
  deleteAlert: any = []
  ManufactureList: any = []
  Addpage: any
  EditInventoryData: any
  search: any
  categories: any = []
  DummyLocalInventory: any = []
  FilterCategory: any
  Exp_Count: any
  Exp_Type: any
  Exp_Title: any
  ReportDetailPage: any
  Title: any

  constructor(public app: AppComponent, public router: Router) { }

  ionViewWillEnter() {
    this.deleteAlert = false
    this.Addpage = 1
    this.FilterCategory = 'All'
    this.Exp_Count = this.router.url.split('/')[2]
    this.Exp_Type = this.router.url.split('/')[3]
    this.ReportDetailPage = this.router.url?.split('/')[4]

    if (this.ReportDetailPage == 2) {
      this.Title = 'Inventory List'
    } else {
      this.Title = 'Expiry List'
    }

    if (this.Exp_Type == 1) {
      this.Exp_Title = this.Title + ' ' + 'from 1  to 30 days'
    } else if (this.Exp_Type == 2) {
      this.Exp_Title = this.Title + ' ' + 'from 30  to 60 days'
    } else if (this.Exp_Type == 3) {
      this.Exp_Title = this.Title + ' ' + 'in 60 + days'
    }

    this.app.loader = true
    setTimeout(() => {
      this.app.loader = false
    }, 1000)
    this.app.ind = 0
    this.LocalCalculation()
  }

  LocalCalculation() {
    const LocalData: any = localStorage.getItem('InventoryData')
    this.LocalInventory = JSON.parse(LocalData)
    this.LocalInventory.forEach((Inv: any) => {
      this.ManufactureList = []
      Inv.manufacturer.forEach((manufcture: any) => {
        this.ManufactureList.push(manufcture.manufacturers);
        Object.assign(Inv, { ManufactursList: this.ManufactureList })
      });
    });
    this.DummyLocalInventory = this.LocalInventory
    this.CalculateCategory()
  }

  CalculateCategory() {
    this.categories = new Set(this.LocalInventory.map((res: any) => res.category));
    this.categories = Array.from(this.categories).map(category => ({ category }));
    this.categories = this.categories.concat({ category: 'All' });
    console.log(this.categories);
  }

  FilterbyCategory(data: any) {
    if (data.target.value != 'All') {
      this.LocalInventory = this.DummyLocalInventory.filter((res: any) => {
        return res.category == data.target.value
      })
    } else {
      this.LocalInventory = this.DummyLocalInventory
    }
  }

  Buttons() {
    this.deleteAlert = false
  }

  EditInvent(data: any) {
    this.EditInventoryData = data
    this.EditActionPopup = true
  }


}
