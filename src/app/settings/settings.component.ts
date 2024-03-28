import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {

  constructor(public app: AppComponent, public router: Router) { }

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
  SchedulePop: boolean = false
  SchedulePopData: any = []
  SchedulePopTitle: any
  setSchedule: any = []
  Data: any = []
  notifyTab: any
  ChooseoneId: any


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
    this.notifyTab = 1
    this.ChooseoneId = 0
    this.app.ind = 8
    this.SelectOne = 'test'
    this.app.loader = true
    setTimeout(() => {
      this.app.loader = false
    }, 500)
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

  See(data: any) {
    this.router.navigate(['/' + data])
  }

  week(data: any) {
    this.SchedulePop = true
    if (data == 'Weekly') {
      this.SchedulePopData = this.Weeksubname
      this.SchedulePopTitle = 'Weekly Schedule'
    } else if (data == 'Monthly') {
      this.SchedulePopData = this.Monthlysubname
      this.SchedulePopTitle = 'Monthly Schedule'
    }
  }

  ScheduleCheck(data: any, data1: any) {
    if (data.target.checked == true) {
      this.setSchedule.push(data1)
    } else {
      this.Data = []
      this.Data = this.setSchedule.filter((res: any) => {
        return res.name != data1
      })
      console.log(this.Data);

    }
  }

  tab(id: any) {
    this.notifyTab = id

    if (id == 2) {
      this.ChooseoneId = 0
    }
  }

  chooseOnecheck(id: any) {
    this.ChooseoneId = id
  }

}
