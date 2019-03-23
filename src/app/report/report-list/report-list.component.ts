import {Component, OnInit} from '@angular/core';
import {Report} from '../../models/report';
import {REPORTS} from '../../mock-reports';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {

  reports: any;

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    console.log('All list');
    this.appService.getAllReports().subscribe(
      (data2: any) => {
        console.log('My Reports', data2);
        this.reports = data2.data;
      }, error => {
        console.log('Error', error);
      });
  }

}
