import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss'],
})
export class EditCategoryComponent implements OnInit {


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

  CategoryImages: any = [
    {
      id: 1,
      image: '../../assets/img/critical.png',
      medicine_category: 'Critical'
    },
    {
      id: 2,
      image: '../../assets/img/normal.png',
      medicine_category: 'Non-Critical'
    }
  ]



  constructor(public app: AppComponent) { }

  ngOnInit() {
    this.FilterCategory = 'All'
    this.DummyLocalInventory = this.CategoryImages
    this.app.ind = 0
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

  // FilterbyCategory(data: any) {
  //   console.log(data.target.value);
  //   if (data.target.value != 'All') {
  //     this.CategoryImages = this.DummyLocalInventory.filter((res: any) => {
  //       return res. medicine_category == data.target.value
  //     })
  //   } else {
  //     this.CategoryImages = this.DummyLocalInventory
  //   }
  // }

  EditInvent(data: any) {
    this.EditInventoryData = data
    this.EditActionPopup = true
  }

}
