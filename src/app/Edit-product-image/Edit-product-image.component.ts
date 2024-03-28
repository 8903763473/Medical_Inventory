import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-edit-product-image',
  templateUrl: './Edit-product-image.component.html',
  styleUrls: ['./Edit-product-image.component.scss'],
})
export class EditProductImageComponent implements OnInit {

  InventoryImages = [
    {
      "category": "Tablets",
      "name": "paracitamol",
      "manufacturer": "Pharmavit",
      "image": "../../assets/img/tablet 1.jpeg"
    },
    {
      "category": "Tablets",
      "name": "head pain",
      "manufacturer": "MediLife",
      "image": "../../assets/img/tablet2.jpeg",
    },
    {
      "category": "Injections",
      "name": "Fever",
      "manufacturer": "NutraLif",
      "image": "../../assets/img/injection1.jpeg"
    },
    {
      "category": "Injections",
      "name": "Cold",
      "manufacturer": "NatureCu",
      "image": "../../assets/img/injection 2.jpeg"
    },
    {
      "category": "Capsules",
      "name": "back pain",
      "manufacturer": "Wellness",
      "image": "../../assets/img/capsule1.jpeg"
    },
    {
      "category": "Capsules",
      "name": "pain kiler",
      "manufacturer": "LifeScie",
      "image": "../../assets/img/capsule2.jpeg"
    },
    {
      "category": "Syrups",
      "name": "Alpha coff",
      "manufacturer": "MedTech",
      "image": "../../assets/img/syrup.jpeg"
    },
    {
      "category": "Syrups",
      "name": "Tripala syrup",
      "manufacturer": "HealthCare",
      "image": "../../assets/img/syrup2.jpeg"
    }
  ]

  ActionPopup: boolean = false
  LocalInventory: any = []
  categories: any = []
  ProductByCategory: any = []
  EditActionPopup: boolean = false
  EditInventoryData: any
  deleteAlert: boolean = false
  selectImage: any
  NewCategory: any
  NewProduct: any
  DummyLocalInventory: any = []
  FilterCategory: any




  constructor(public app: AppComponent) { }

  ngOnInit() {
    this.FilterCategory = 'All'
    this.DummyLocalInventory = this.InventoryImages
    this.app.ind = 0
    this.app.loader = true
    setTimeout(() => {
      this.app.loader = false
    }, 1000)

    this.LocalCalculation();
  }

  LocalCalculation() {
    const LocalData: any = localStorage.getItem('InventoryData')
    this.LocalInventory = JSON.parse(LocalData)
    this.categories = new Set(this.LocalInventory.map((res: any) => res.category));
    this.categories = Array.from(this.categories).map(category => ({ category }));
    this.ProductByCategory = []
    this.CalculateCategory()
  }


  SelectCategory(data: any) {
    this.ProductByCategory = this.LocalInventory.filter((res: any) => {
      return data.target.value == res.category ? res.productName : ''
    })
  }

  Buttons() {
    this.deleteAlert = false
  }

  handleImageSelect(event: any) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      console.log(selectedFile);
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.EditInventoryData.image = e.target.result;
      };
      reader.readAsDataURL(selectedFile);
    }
  }

  handleImageSelectNew(event: any) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      console.log(selectedFile);
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectImage = e.target.result;
      };
      reader.readAsDataURL(selectedFile);
    }
  }

  CalculateCategory() {
    this.categories = new Set(this.LocalInventory.map((res: any) => res.category));
    this.categories = Array.from(this.categories).map(category => ({ category }));
    this.categories = this.categories.concat({ category: 'All' });
    console.log(this.categories);
  }

  FilterbyCategory(data: any) {
    console.log(data.target.value);
    if (data.target.value != 'All') {
      this.InventoryImages = this.DummyLocalInventory.filter((res: any) => {
        return res.category == data.target.value
      })
    } else {
      this.InventoryImages = this.DummyLocalInventory
    }
  }

  EditInvent(data: any) {
    this.EditInventoryData = data
    this.EditActionPopup = true
  }
}
