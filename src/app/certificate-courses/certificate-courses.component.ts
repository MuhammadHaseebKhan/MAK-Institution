import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-certificate-courses',
  templateUrl: './certificate-courses.component.html',
  styleUrls: ['./certificate-courses.component.css']
})
export class CertificateCoursesComponent implements OnInit {

  data = [
    {
      one: 'Office Automation'
    },
    {
      two: 'Professional Microsoft Office 2016'
    },
    {
      three: 'Basic C.I.T'
    },
    {
      four: 'HARDWARE AND SOFTWARE'
    },
    {
      five: 'AutoCAD 2D & 3D'
    },
    {
      six: 'Advanced Architecture'
    },
    {
      seven: 'Architectural Visualization'
    },
    {
      eight: 'Computerized Accounting'
    },
    {
      nine: 'Advanced Excel'
    },
    {
      ten: 'Quick Book'
    },
    {
      eleven: 'C Language'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
