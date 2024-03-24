import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent {

  constructor(public app: AppComponent) { }


  categories: any = []
  ProductByCategory: any = []
  LocalInventory: any = []
  Manufacturer: any
  ManufacturerLists: any = []
  SelectedCategory: any
  SelectedProduct: any

  ionViewWillEnter() {
    this.app.ind = 2
    // this.app.loader = true
    // setTimeout(() => {
    //   this.app.loader = false
    // }, 3000)
    const LocalData: any = localStorage.getItem('InventoryData')
    this.LocalInventory = JSON.parse(LocalData)
    this.categories = new Set(this.LocalInventory.map((res: any) => res.category));
    this.categories = Array.from(this.categories).map(category => ({ category }));
    this.ProductByCategory = []
  }

  SelectCategory(data: any) {
    this.SelectedCategory = data.target.value
    this.ProductByCategory = this.LocalInventory.filter((res: any) => {
      return this.SelectedCategory == res.category ? res.productName : ''
    })
    console.log(this.ProductByCategory);
    this.ManufacturerLists = []
  }

  SelectProduct(data: any) {
    const EventValue = data.target.value
    this.ManufacturerLists = this.LocalInventory.filter((res: any) => {
      return (EventValue == res.productName && this.SelectedCategory == res.category)
    })
    console.log(this.ManufacturerLists);

  }

}
