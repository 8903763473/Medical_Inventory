import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-unit-size',
  templateUrl: './edit-unit-size.component.html',
  styleUrls: ['./edit-unit-size.component.scss'],
})
export class EditUnitSizeComponent {

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

  UnitSizes: any = [
    {
      id: 1,
      category: 'Tablets',
      measure: 'tablet',
      unit: '1',
      size: '20',
    },
    {
      id: 2,
      category: 'Tablets',
      measure: 'tablet',
      unit: '1',
      size: '15',
    },
    {
      id: 3,
      category: 'Syrups',
      measure: 'ml',
      unit: '1',
      size: '180',
    },
    {
      id: 4,
      category: 'Syrups',
      measure: 'ml',
      unit: '1',
      size: '250',
    },
    {
      id: 5,
      category: 'Injections',
      measure: 'ml',
      unit: '1',
      size: '1',
    },
    {
      id: 6,
      category: 'Capsules',
      measure: 'tablet',
      unit: '1',
      size: '10',
    },
    {
      id: 7,
      category: 'Capsules',
      measure: 'tablet',
      unit: '1',
      size: '5',
    }
  ]
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

  EditManufacture(data: any) {
    this.editData = [
      {
        category: data.category,
        measure: data.measure,
        unit: data.unit,
        size: data.size
      }
    ]
    this.EditActionPopup = true
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
