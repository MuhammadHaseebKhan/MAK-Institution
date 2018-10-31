import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-office-automation-detail',
  templateUrl: './office-automation-detail.component.html',
  styleUrls: ['./office-automation-detail.component.css']
})
export class OfficeAutomationDetailComponent implements OnInit {

  dataSet = [
    {
      key    : '1',
      name   : 'Monday',
      age    : '3:00 p.m - 4:30 p.m' ,
      address: 'New York No. 1 Lake Park'
    },
    {
      key    : '2',
      name   : 'Tuesday',
      age    : '4:00 p.m - 5:30 p.m',
      address: 'London No. 1 Lake Park'
    },
    {
      key    : '3',
      name   : 'Wednesday',
      age    : '5:00 p.m - 6:30 p.m',
      address: 'Sidney No. 1 Lake Park'
    },
    {
      key    : '3',
      name   : 'Thursday',
      age    : '6:00 p.m - 7:30 p.m',
      address: 'Sidney No. 1 Lake Park'
    },
    {
      key    : '3',
      name   : 'Friday',
      age    : '7:00 p.m - 8:30 p.m',
      address: 'Sidney No. 1 Lake Park'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
