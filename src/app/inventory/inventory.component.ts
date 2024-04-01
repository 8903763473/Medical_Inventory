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
  ExpiryDate: any
  ManufactureDate: any
  ExpiryDatePopup: boolean = false
  ManufactureDatePopup: boolean = false
  AlertPop: boolean = false
  maxDate: any;
  minDate: any;
  BatchNumber: any
  Quantity: any
  UnitPrice: any
  Category: any
  ProductName: any
  AlertPopData: any = []
  selectedManufacturer: any
  selectedSize: any
  allManufacturers: any = []
  allSizes: any = []
  purchaseDate: any
  purchaseDatePopup: boolean = false



  ionViewWillEnter() {
    this.app.ind = 3
    this.app.loader = true
    setTimeout(() => {
      this.app.loader = false
    }, 500)
    this.LocalCalculation();
  }

  LocalCalculation() {
    const LocalData: any = localStorage.getItem('InventoryData')
    this.LocalInventory = JSON.parse(LocalData)
    this.categories = new Set(this.LocalInventory.map((res: any) => res.category));
    this.categories = Array.from(this.categories).map(category => ({ category }));
    console.log(this.categories);    
    this.ProductByCategory = []
    this.MindateCalculation()
  }

  MindateCalculation() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    this.minDate = `${year}-${month}-${day}`;
    this.MaxdateCalculation()
  }

  MaxdateCalculation() {
    const today = new Date();
    this.maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const year = this.maxDate.getFullYear();
    const month = (this.maxDate.getMonth() + 1).toString().padStart(2, '0');
    const day = this.maxDate.getDate().toString().padStart(2, '0');
    this.maxDate = `${year}-${month}-${day}`;
  }

  SelectCategory(data: any) {
    this.SelectedCategory = data.target.value
    this.ProductByCategory = this.LocalInventory.filter((res: any) => {
      return this.SelectedCategory == res.category ? res.productName : ''
    })
    this.ManufacturerLists = []
    this.allManufacturers = []
    this.allSizes = []
    this.selectedManufacturer = undefined
    this.selectedSize = undefined
  }

  SelectProduct(data: any) {
    const EventValue = data.target.value
    this.ManufacturerLists = this.LocalInventory.filter((res: any) => {
      return (EventValue == res.productName && this.SelectedCategory == res.category)
    })
    console.log(this.ManufacturerLists);
    for (let i = 0; i < this.ManufacturerLists[0].manufacturer.length; i++) {
      this.allManufacturers.push({ manufacturers: this.ManufacturerLists[0]?.manufacturer[i]?.manufacturers });
      this.allSizes.push({ size: this.ManufacturerLists[0]?.size[i]?.sizes });
    }
  }

  ExpiryPicker(data: any) {
    this.ExpiryDate = (data.detail.value).split('T')[0]
  }

  ManufacturePicker(data: any) {
    this.ManufactureDate = (data.detail.value).split('T')[0]
  }

  purchasePicker(data: any) {
    this.purchaseDate = (data.detail.value).split('T')[0]
  }

  PickerCancelButton(PickerType: any) {
    if (PickerType == 'Expiry') {
      this.ExpiryDate = undefined
      this.ExpiryDatePopup = false
    }
    else if (PickerType == 'Manufacture') {
      this.ManufactureDate = undefined
      this.ManufactureDatePopup = false
    }
  }

  AddInventorySubmit() {
    if ((this.Category !== undefined && this.Category !== '') &&
      (this.ProductName !== undefined && this.ProductName !== '') &&
      (this.selectedManufacturer != undefined && this.selectedManufacturer != '' && this.selectedSize != undefined && this.selectedSize != '') &&
      (this.BatchNumber !== undefined && this.BatchNumber !== '') &&
      (this.ExpiryDate !== undefined && this.ExpiryDate !== '') &&
      (this.ManufactureDate !== undefined && this.ManufactureDate !== '') &&
      (this.Quantity !== undefined && this.Quantity !== '') && (this.purchaseDate != undefined && this.purchaseDate != '')) {

      this.AlertPop = true
      this.AlertPopData = [
        {
          message: 'Inventory Successfully added.',
          icon: 'far fa-check-circle',
          color: '#31e284',
          background: '#31e284'
        }
      ]
    }
    else {
      this.AlertPop = true
      this.AlertPopData = [
        {
          message: 'Fill the required fields.',
          icon: 'fas fa-exclamation-circle',
          color: '#ff3f3f',
          background: '#ff3f3f'
        }
      ]
    }
  }

  Reset() {
    // location.reload()
  }
}
