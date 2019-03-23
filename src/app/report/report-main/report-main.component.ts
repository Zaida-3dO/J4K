import { Component, OnInit } from '@angular/core';
import {Report} from '../../models/report';
import {Caption} from '../../models/caption';

@Component({
  selector: 'app-report-main',
  templateUrl: './report-main.component.html',
  styleUrls: ['./report-main.component.css']
})
export class ReportMainComponent implements OnInit {

  report: any;
  caption: Caption;
  relateds = [];

  constructor() {
    this.caption = new Caption();
    this.report = {
      date: '23 March, 2019',
      title: 'Addressing the series of abduction at the Central Park.',
      content: 'Projecting surrounded literature yet delightful alteration but bed men. Open are from long why cold. I' +
        'f must snug by upon sang loud left. ' +
        'As me do preference entreaties compliment motionless ye literature. Day behaviour explained law remainder.' +
        ' Produce can cousins account you pasture. P' +
        'eculiar delicate an pleasant provided do perceive. It sportsman earnestly ye preserved an on. Moment' +
        ' led family sooner cannot' +
        ' her window pulled any. Or raillery if improved landlord to speaking hastened differed he. ' +
        'Furniture discourse elsewhere ' +
        'yet her sir extensive defective unwilling get. Why resolution one motionless you him thoroughly. Noise is round to in' +
        ' it quick timed doors. Written address greatly get attacks inhabit pursuit our but. Lasted hunted enough an u' +
        'p seeing in lively letter. Had judgment out opinions property the supplied.',
      tags: ['Abduction', 'Abuse', 'Rape']
    };
    this.relateds = this.getRelatedReports(this.report);
  }
  getRelatedReports(reports) {
      return [];
  }


  ngOnInit() {
  }

}
