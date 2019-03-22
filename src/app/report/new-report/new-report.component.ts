import { Component, OnInit } from '@angular/core';
import {Report} from '../../models/report';

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.css']
})
export class NewReportComponent implements OnInit {

  report: Report;

  constructor() {
    this.report = new Report();
  }

  addTag() {

  }

  sendReport() {

  }

  ngOnInit() {
  }

}
