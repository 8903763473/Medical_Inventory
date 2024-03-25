import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-product-name',
  templateUrl: './Edit-product-name.component.html',
  styleUrls: ['./Edit-product-name.component.scss'],
})
export class EditProductNameComponent {

  ActionPopup: boolean = false
  EditActionPopup: boolean = false
  deleteAlert: boolean = false
  EditInventoryData: any = []
  LocalInventory: any = []
  categories: any = []
  productNames: any = []
  selectedcategory: any

  constructor() { }

  ngOnInit() {
    this.LocalCalculation()
  }

  LocalCalculation() {
    const LocalData: any = localStorage.getItem('InventoryData')
    this.LocalInventory = JSON.parse(LocalData)
    this.categories = new Set(this.LocalInventory.map((res: any) => res.category));
    this.categories = Array.from(this.categories).map(category => ({ category }));
    this.productNames = this.LocalInventory.map((item:any) => item.productName); 
    console.log(this.productNames);
    console.log(this.categories);
  }


  Buttons() {
    location.reload()
  }


}
