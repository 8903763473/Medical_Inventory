import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-manage-patients',
  templateUrl: './manage-patients.component.html',
  styleUrls: ['./manage-patients.component.scss'],
})
export class ManagePatientsComponent {

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
  newPatient: boolean = false

  patients: any = [
    {
      patientId: 1,
      Name: "John Doe",
      Age: 30,
      contact: "123-456-7890",
      disease: "Fever",
      alargies: "None"
    },
    {
      patientId: 2,
      Name: "Jane Smith",
      Age: 25,
      contact: "987-654-3210",
      disease: "Headache",
      alargies: "Penicillin"
    },
    {
      patientId: 3,
      Name: "Michael Johnson",
      Age: 45,
      contact: "555-555-5555",
      disease: "Back Pain",
      alargies: "Dust"
    },
    {
      patientId: 4,
      Name: "Emily Brown",
      Age: 35,
      contact: "111-222-3333",
      disease: "Allergies",
      alargies: "Pollen"
    },
    {
      patientId: 5,
      Name: "David Wilson",
      Age: 50,
      contact: "444-444-4444",
      disease: "Diabetes",
      alargies: "Shellfish"
    }
  ];

  constructor(public app: AppComponent) { }

  ionViewWillEnter() {
    this.deleteAlert = false
    this.Addpage = 1
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
    this.DummyLocalInventory = this.patients
    this.DummyLocalInventory.push({ disease: 'All' })
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
      this.patients = this.DummyLocalInventory.filter((res: any) => {
        return res.disease == data.target.value
      })
    } else {
      this.patients = this.DummyLocalInventory.filter((res: any) => {
        return res.disease != 'All'
      })
    }
  }

  Buttons() {
    this.deleteAlert=false
  }

  EditInvent(data: any) {
    this.EditInventoryData = data
    this.EditActionPopup = true
  }


}
