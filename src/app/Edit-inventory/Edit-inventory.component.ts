import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-edit-inventory',
  templateUrl: './Edit-inventory.component.html',
  styleUrls: ['./Edit-inventory.component.scss'],
})
export class EditInventoryComponent {

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

  constructor(public app: AppComponent) { }

  ionViewWillEnter() {
    this.deleteAlert = false
    this.Addpage = 1
    this.app.ind = 0
    this.FilterCategory = 'All'

    this.app.loader = true
    setTimeout(() => {
      this.app.loader = false
    }, 500)


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
