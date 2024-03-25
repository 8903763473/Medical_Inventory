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

  constructor(public app: AppComponent) { }

  ionViewWillEnter() {
    this.deleteAlert = false
    this.Addpage = 1
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
    // this.ManufactureList = Array.from(new Set(this.ManufactureList));

    console.log(this.LocalInventory);


    // this.Inventories = new Set(this.LocalInventory.map((res: any) => res.productName));
    // this.Inventories = Array.from(this.Inventories).map(Inventory => ({ Inventory }));
    // console.log(this.Inventories);
  }
  Buttons() {
    location.reload()
  }

  EditInvent(data: any) {
    this.EditInventoryData = data
    this.EditActionPopup = true
  }
}
