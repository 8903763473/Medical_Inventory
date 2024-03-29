import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.scss'],
})
export class PrescriptionComponent implements OnInit {

  constructor(public router: Router, public app: AppComponent) { }

  LocalInventory: any = []
  categories: any = []
  Category: any
  categoryListPopup: boolean = false
  ProductListPopup: boolean = false
  manufacturerListPopup: boolean = false
  BatchListPopup: boolean = false
  UnitListPopup: boolean = false
  pickedCategory: any
  pickedProduct: any
  pickedBatch: any
  pickedUnit: any
  pickedmanufacturer: any
  DummyLocalInventory: any = []
  ProductList: any = []
  manufacturerList: any = []
  unitList: any = []
  TotalDays: any
  Morning: any
  Afternoon: any
  Evening: any
  MorningQty: any
  AfternoonQty: any
  EveningQty: any
  ActionPopup: boolean = false
  EditPrescription: boolean = false
  allChecked: boolean = false


  medications: any = [
    { batch: 1, type: 'Tablet', name: 'Brufen', dose: '500mg', frequency: '1 - 1 - 0', expDate: '25 Apr 2024', quantity: 6, duration: 3 },
    { batch: 1, type: 'Tablet', name: 'Aspirin', dose: '300mg', frequency: '1 - 0 - 2', expDate: '19 Apr 2024', quantity: 15, duration: 5 },
    { batch: 4, type: 'Tablet', name: 'Crosin', dose: '200mg', frequency: '0 - 0 - 2', expDate: '30 Apr 2024', quantity: 6, duration: 3 }
  ];






  ngOnInit() {
    this.app.ind = 4
    this.MorningQty = 1
    this.AfternoonQty = 1
    this.EveningQty = 1
    this.app.loader = true
    setTimeout(() => {
      this.app.loader = false
    }, 500)
    this.Categories()
  }

  Categories() {
    const LocalData: any = localStorage.getItem('InventoryData')
    this.LocalInventory = JSON.parse(LocalData)
    this.DummyLocalInventory = this.LocalInventory
    this.categories = new Set(this.LocalInventory.map((res: any) => res.category));
    this.categories = Array.from(this.categories).map(category => ({ category }));
  }

  PickCategory(data: any) {
    console.log(data);
    this.pickedCategory = data.category
    this.categoryListPopup = false
    this.ProductList = []
    this.unitList = []
    this.manufacturerList = []
    this.ProductList = this.DummyLocalInventory.filter((res: any) => {
      return res.category == data.category
    })
    this.pickedProduct = undefined
    this.pickedmanufacturer = undefined
    this.pickedUnit = undefined
  }

  PickProduct(data: any, category: any) {
    console.log(data);
    this.manufacturerList = []
    this.pickedProduct = data.productName
    const filteredProduct = this.DummyLocalInventory.filter((item: any) => item.category === category && item.productName === data.productName);

    if (filteredProduct.length > 0) {
      const manufacturers = filteredProduct.map((m: any) => m.manufacturer);
      console.log(manufacturers);
      manufacturers[0]?.forEach((res1: any) => {
        this.manufacturerList.push(res1);
      });

      const Units = filteredProduct.map((m: any) => m.size);
      console.log(Units);
      Units[0]?.forEach((res2: any) => {
        this.unitList.push(res2);
      });


      this.ProductListPopup = false
      console.log(this.unitList);
      return manufacturers;
    } else {
      console.log('Product not found');
      return [];
    }
  }


  Pickmanufacture(data: any) {
    console.log(data);
    this.pickedmanufacturer = data.manufacturers
    this.manufacturerListPopup = false
  }

  pickedunit(data: any) {
    this.pickedUnit = data.sizes
    this.UnitListPopup = false
  }

  PickBatch(data: any) {
    console.log(data);
    this.manufacturerListPopup = false
  }

  MorningCheck(data: any) {
    this.Morning = data.target.checked
  }

  AfternoonCheck(data: any) {
    this.Afternoon = data.target.checked
  }

  EveningCheck(data: any) {
    this.Evening = data.target.checked
  }

  MorningIcon(mrng: any, status: any) {
    if (this.Morning == true) {
      if (mrng != 1 && status == 'minus') {
        this.MorningQty = mrng - 1
      } else if (mrng != 0 && status == 'add') {
        this.MorningQty = mrng + 1
      }
    }
  }

  AfternoonIcon(Aff: any, status: any) {
    if (this.Afternoon == true) {
      if (Aff != 1 && status == 'minus') {
        this.AfternoonQty = Aff - 1
      } else if (Aff != 0 && status == 'add') {
        this.AfternoonQty = Aff + 1
      }
    }
  }

  EveningIcon(Eve: any, status: any) {
    if (this.Evening == true) {
      if (Eve != 1 && status == 'minus') {
        this.EveningQty = Eve - 1
      } else if (Eve != 0 && status == 'add') {
        this.EveningQty = Eve + 1
      }
    }
  }

  submit() {
    this.EditPrescription = false
  }

  Pharmacist() {
    this.router.navigate(['/Orders'])
  }

  AllCheck(data: any) {
    if (data.target.checked == true) {
      this.allChecked = true
    } else {
      this.allChecked = false
    }
  }

  Unit() {
    this.UnitListPopup = true
  }
}
