import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-product-image',
  templateUrl: './Edit-product-image.component.html',
  styleUrls: ['./Edit-product-image.component.scss'],
})
export class EditProductImageComponent implements OnInit {

  InventoryImages = [
    {
      "category": "Tablet",
      "name": "paracitamol",
      "image": "../../assets/img/tablet 1.jpeg"
    },
    {
      "category": "Tablet",
      "name": "head pain",
      "image": "../../assets/img/tablet2.jpeg",
    },
    {
      "category": "Injection",
      "name": "Fever",
      "image": "../../assets/img/injection1.jpeg"
    },
    {
      "category": "Injection",
      "name": "Cold",
      "image": "../../assets/img/injection 2.jpeg"
    },
    {
      "category": "Capsule",
      "name": "back pain",
      "image": "../../assets/img/capsule1.jpeg"
    },
    {
      "category": "Capsule",
      "name": "pain kiler",
      "image": "../../assets/img/capsule2.jpeg"
    },
    {
      "category": "Syrup",
      "name": "Alpha coff",
      "image": "../../assets/img/syrup.jpeg"
    },
    {
      "category": "Syrup",
      "name": "Tripala syrup",
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

  constructor() { }

  ngOnInit() {
    this.LocalCalculation();
  }

  LocalCalculation() {
    const LocalData: any = localStorage.getItem('InventoryData')
    this.LocalInventory = JSON.parse(LocalData)
    this.categories = new Set(this.LocalInventory.map((res: any) => res.category));
    this.categories = Array.from(this.categories).map(category => ({ category }));
    this.ProductByCategory = []
  }


  SelectCategory(data: any) {
    this.ProductByCategory = this.LocalInventory.filter((res: any) => {
      return data.target.value == res.category ? res.productName : ''
    })
  }

  Buttons() {
    location.reload()
  }

  EditImageData(data: any) {
    this.EditActionPopup = true
    this.EditInventoryData = data
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


}
