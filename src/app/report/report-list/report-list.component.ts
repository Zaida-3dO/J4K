import { Component, OnInit } from '@angular/core';
import {Report} from '../../models/report';
import {REPORTS} from '../../mock-reports';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {

  reports = REPORTS;

  constructor() { }

  ngOnInit() {
  }

}
