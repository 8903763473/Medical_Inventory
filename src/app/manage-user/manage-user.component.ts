import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.scss'],
})
export class ManageUserComponent {

  imageUrl: any
  Gender: any
  ScreenWidth: any
  cameraimageUrl: any = '../../assets/img/Camera.svg'
  @ViewChild('imageInput') imageInput: ElementRef<HTMLInputElement> | any;

  constructor(public app: AppComponent) {
    // this.ScreenSize()
  }


  ionViewWillEnter() {
    this.app.ind = 0
    this.Gender = ''
    this.app.loader = true
    setTimeout(() => {
      this.app.loader = false
    }, 500)
  }

  ScreenSize() {
    // setTimeout(() => {
    //   this.ScreenWidth = window.innerWidth
    // }, 2000)
    // this.ScreenSize()
  }


  PickGender(data: any) {
    this.Gender = data
  }

  handleImageClick() {
    this.imageInput.nativeElement.click();
  }

  handleImageSelect(event: any) {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      console.log(selectedFile);
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
        console.log(this.imageUrl);
      };
      reader.readAsDataURL(selectedFile);
    }
  }


}
