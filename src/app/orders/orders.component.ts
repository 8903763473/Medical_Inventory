import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent {

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
  FilterStage: any
  PrescriptionDetails: boolean = false
  DummyAllOrders: any = []


  PatientStage: any = [
    {
      id: 1,
      stage: 'Critical'
    },
    {
      id: 2,
      stage: 'Non-Critical'
    },
    {
      id: 3,
      stage: 'All'
    }
  ]

  AllOrders: any = [
    {
      id: 'MI-1',
      stage: 'Critical',
      name: 'Vijay',
      address: '42/2 , north street, Vannimanagaram,628205',
      batch: '1',
      Exp: 'Apr 05 2024'
    },
    {
      id: 'MI-2',
      stage: 'Non-Critical',
      name: 'Muthu',
      address: '321A , East street, Trichendur,648205',
      batch: '6',
      Exp: 'May 30 2024'
    },
    {
      id: 'MI-3',
      stage: 'Non-Critical',
      name: 'Suresh',
      address: '7G , north street, Sonaganvilai,628245',
      batch: '2',
      Exp: 'June 15 2024'
    },
    {
      id: 'MI-4',
      stage: 'Non-Critical',
      name: 'Krishna',
      address: 'A2Z , East street, Kurumbur,628235',
      batch: '4',
      Exp: 'Aug 02 2024'
    },
    {
      id: 'MI-5',
      stage: 'Critical',
      name: 'Abdul',
      address: '12K , West street, Thirunelveli,623705',
      batch: '1',
      Exp: 'Sep 25 2024'
    },
    {
      id: 'MI-6',
      stage: 'Non-Critical',
      name: 'John',
      address: '54/1 , South street, Vallivilai,621205',
      batch: '2',
      Exp: 'Apr 04 2024'
    },
    {
      id: 'MI-7',
      stage: 'Critical',
      name: 'Raj',
      address: '1B , north street, Udankudi,628202',
      batch: '3',
      Exp: 'Dec 29 2024'
    }
  ]

  AllCheckBox: boolean = false

  constructor(public app: AppComponent, public router: Router) { }

  ionViewWillEnter() {
    this.app.ind = 5
    this.deleteAlert = false
    this.Addpage = 1
    this.FilterStage = 'All'
    this.PrescriptionDetails = false
    this.DummyAllOrders = this.AllOrders
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

  FilterbyStage(data: any) {
    if (data.target.value != 'All') {
      this.AllOrders = this.DummyAllOrders.filter((res: any) => {
        return res.stage == data.target.value
      })
    } else {
      this.AllOrders = this.DummyAllOrders
    }
  }

  Buttons() {
    this.deleteAlert = false
  }

  EditInvent(data: any) {
    this.EditInventoryData = data
    this.EditActionPopup = true
  }

  AllCheck(data: any) {
    if (data.target.checked == true) {
      this.AllCheckBox = true
    } else if (data.target.checked == false) {
      this.AllCheckBox = false
    }
  }

  OrderDetails(data: any) {
    localStorage.setItem('OrderDetails', data)
    this.router.navigate(['/Order_details'])
  }

}
