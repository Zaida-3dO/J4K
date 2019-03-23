import { Component, OnInit } from '@angular/core';
import {Report} from '../../models/report';
import {AppService} from '../../app.service';
import {Caption} from '../../models/caption';

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.css']
})
export class NewReportComponent implements OnInit {

  report: Report;
  caption = new Caption();

  constructor(private appService: AppService) {
    this.report = new Report();
    this.report.caption = this.caption.getCaption(this.report, 20);
  }

  addTag() {

  }

  sendReport() {

  }

  ngOnInit() {
    this.appService.setPath('Make A Report!');
  }

}
