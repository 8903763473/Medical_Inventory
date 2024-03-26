import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {

  constructor(public app: AppComponent) { }

  AlertSetting: any = [
    {
      id: 1,
      checkedImg: '../../assets/img/checked.svg',
      uncheckedImg: '../../assets/img/unchecked.svg',
      name: 'Day'
    },
    {
      id: 2,
      checkedImg: '../../assets/img/checked.svg',
      uncheckedImg: '../../assets/img/unchecked.svg',
      name: 'Week'
    },
    {
      id: 3,
      checkedImg: '../../assets/img/checked.svg',
      uncheckedImg: '../../assets/img/unchecked.svg',
      name: 'Month'
    },
    {
      id: 4,
      checkedImg: '../../assets/img/checked.svg',
      uncheckedImg: '../../assets/img/unchecked.svg',
      name: 'Customise'
    },
  ]

  cameraimageUrl: any = '../../assets/img/Camera.svg'
  @ViewChild('imageInput') imageInput: ElementRef<HTMLInputElement> | any;
  notifyType: boolean = false
  selectedCheckbox: any
  inputValue: any
  OrgAlert: boolean = false
  Schedule: boolean = false
  manageUser: boolean = false
  imageUrl: any
  Gender: any



  ionViewWillEnter() {
    this.selectedCheckbox = 1
    this.app.ind = 3
  }

  selectBox(id: any) {
    this.selectedCheckbox = id
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


  handleImageClick() {
    this.imageInput.nativeElement.click();
  }

  PickGender(data: any) {
    this.Gender = data
  }
}
