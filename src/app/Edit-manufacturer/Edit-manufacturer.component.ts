import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-manufacturer',
  templateUrl: './Edit-manufacturer.component.html',
  styleUrls: ['./Edit-manufacturer.component.scss'],
})
export class EditManufacturerComponent {

  ActionPopup: boolean = false
  EditActionPopup: boolean = false
  LocalInventory: any = []
  manufacturer: any = []
  ModifiedManufacturer: any = []
  deleteAlert: any = []
  Addpage: any
  selectedCategory: any
  categories: any = []
  FilterCategory: any
  DummyLocalInventory: any = []
  editData: any = []


  constructor() { }

  ionViewWillEnter() {
    this.deleteAlert = false
    this.Addpage = 1
    this.LocalCalculation()
  }
  LocalCalculation() {
    const LocalData: any = localStorage.getItem('InventoryData');
    this.LocalInventory = JSON.parse(LocalData);
    this.DummyLocalInventory = this.LocalInventory;

    this.manufacturer = Array.from(new Set(this.LocalInventory.map((res: any) => res.manufacturer)));

    this.ModifiedManufacturer = this.manufacturer.map((manufacturer: string, index: number) => ({
      manufacturer: manufacturer,
      id: index + 1,
      mobile: 8903763473,
      mail: 'vijay@gmail.com',
      address: '42/2, North Street, Vannimanagaram'
    }));

    this.ModifiedManufacturer.forEach((item: any) => {
      const inventoryItem = this.LocalInventory.find((invItem: any) => invItem.manufacturer === item.manufacturer);
      if (inventoryItem) {
        item.category = inventoryItem.category;
        item.productName = inventoryItem.productName;
      }
    });

    this.ModifiedManufacturer.forEach((Inv: any) => {
      const Manufacturer: any = []
      Inv.manufacturer.forEach((manufcture: any) => {
        Manufacturer.push(manufcture.manufacturers);
        Object.assign(Inv, { ManufactursList: Manufacturer })
      });
    });
    this.CategoryCalculation()
  }

  CategoryCalculation() {
    const LocalData: any = localStorage.getItem('InventoryData')
    this.LocalInventory = JSON.parse(LocalData)
    this.categories = new Set(this.LocalInventory.map((res: any) => res.category));
    this.categories = Array.from(this.categories).map(category => ({ category }));
    this.categories.push({ category: 'All' })
  }

  Buttons() {
    location.reload()
  }

  EditManufacture(data: any, contactPerson: any, Mobile: any) {
    this.editData = [
      {
        manufacturer: data.manufacturer,
        contact_person: contactPerson,
        mobile: Mobile
      }
    ]
    this.EditActionPopup = true
  }

  getManufacturerNames(): string {
    if (this.editData[0]?.manufacturer) {
      return this.editData[0].manufacturer.map((man: any) => man.manufacturers).join(', ');
    } else {
      return '';
    }
  }

  // FilterbyCategory(data: any) {
  //   if (data.target.value != 'All') {
  //     this.ModifiedManufacturer = this.DummyLocalInventory.filter((res: any) => {
  //       return res.category == data.target.value
  //     })
  //   } else {
  //     this.ModifiedManufacturer = this.DummyLocalInventory
  //   }
  //   console.log(this.ModifiedManufacturer);
  // }

}
