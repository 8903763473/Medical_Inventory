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
  DailySchedule: any
  WeeklySchedule: any
  MonthlySchedule: any
  newPatient: boolean = false
  SelectOne: any
  SelectMultiple: any
  singleCheck: any

  ScheduleList: any = [
    {
      name: 'Daily'
    },
    {
      name: 'Weekly'
    },
    {
      name: 'Monthly'
    }
  ]

  Weeksubname: any = [
    {
      name: 'Monday'
    },
    {
      name: 'Tuesday'
    },
    {
      name: 'Wednesday'
    },
    {
      name: 'Thursday'
    },
    {
      name: 'Friday'
    },
    {
      name: 'Saturday'
    },
    {
      name: 'Sunday'
    }
  ]

  Monthlysubname: any = [
    {
      name: 'January'
    },
    {
      name: 'February'
    },
    {
      name: 'March'
    },
    {
      name: 'April'
    },
    {
      name: 'May'
    },
    {
      name: 'June'
    },
    {
      name: 'July'
    },
    {
      name: 'Aug'
    },
    {
      name: 'Sept'
    },
    {
      name: 'Oct'
    },
    {
      name: 'Nov'
    },
    {
      name: 'Dec'
    }
  ]


  ionViewWillEnter() {
    this.selectedCheckbox = 1
    this.app.ind = 6
    this.SelectOne = 'test'
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

  NotifyMe(type: any) {

  }

  ChooseSchedule(data: any) {
    this.DailySchedule = data.target.value
  }

  handleRadioChange(data: any) {
    console.log(data);
    console.log(data.target.value);
    if (data.target.value == 'One') {
      this.SelectOne = data.target.checked
    } else if (data.target.value == 'Multiple') {
      this.SelectOne = false
    }
    this.singleCheck = 0
  }

  Check(data: any) {
    this.singleCheck = data
  }

  Check1(data: any) {
    this.singleCheck = data
  }

}
