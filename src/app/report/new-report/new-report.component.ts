import { Component, OnInit } from '@angular/core';
import {Report} from '../../models/report';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.css']
})
export class NewReportComponent implements OnInit {

  report: Report;

  constructor(private appService: AppService) {
    this.report = new Report();
  }

  addTag() {

  }

  sendReport() {

  }

  ngOnInit() {
    this.appService.setPath('Make A Report!');
  }

}
