import { Component, OnInit } from '@angular/core';
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

  selectedCheckbox: any
  inputValue: any

  ionViewWillEnter() {
    this.selectedCheckbox = 1
    this.app.ind = 3
  }

  selectBox(id: any) {
    this.selectedCheckbox = id
  }

}
