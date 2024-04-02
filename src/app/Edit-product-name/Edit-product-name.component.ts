import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

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
  DummyInventoryNames: any = []
  FilterCategory: any

  constructor(public app: AppComponent) { }

  ngOnInit() {
    this.FilterCategory = 'All'
    this.app.ind = 0
    this.app.loader = true
    setTimeout(() => {
      this.app.loader = false
    }, 500)
    console.log(this.selectedcategory);
    
    this.LocalCalculation()
  }

  LocalCalculation() {
    const LocalData: any = localStorage.getItem('InventoryData')
    this.LocalInventory = JSON.parse(LocalData)
    this.categories = new Set(this.LocalInventory.map((res: any) => res.category));
    this.categories = Array.from(this.categories).map(category => ({ category }));
    this.productNames = this.LocalInventory.reduce((acc: any, currentItem: any) => {
      const existingProduct = acc.find((product: any) => product.productName === currentItem.productName);
      if (!existingProduct) {
        acc.push({ productName: currentItem.productName, manufacture: currentItem.manufacturer, unitSize: currentItem.size, unitPrice: currentItem.id * 100 });
      }
      return acc;
    }, []);

    this.DummyInventoryNames = this.productNames
    console.log(this.productNames);
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
      this.productNames = this.DummyInventoryNames.filter((res: any) => {
        return res.category == data.target.value
      })
    } else {
      this.productNames = this.DummyInventoryNames
    }
  }


  Buttons() {
    this.deleteAlert = false
  }


}
