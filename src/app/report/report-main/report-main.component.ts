import {Component, OnInit} from '@angular/core';
import {REPORTS} from '../../mock-reports';
import {Caption} from '../../models/caption';
import {AppService} from '../../app.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-report-main',
  templateUrl: './report-main.component.html',
  styleUrls: ['./report-main.component.css']
})
export class ReportMainComponent implements OnInit {

  report: any;
  caption: Caption;
  relateds = [];
  user: User;

  constructor(private appService: AppService) {
    this.caption = new Caption();
    this.report = {
      date: '23 March, 2019',
      title: '12 year old sentenced live Imprisonment.',
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
      tags: ['Abduction', 'Abuse', 'Rape'],
      persons: [],
      caption: 'It sportsman earnestly ye preserved an on. ',
      status: 'closed'
    };
    this.relateds = [REPORTS[1], REPORTS[8]];
    console.log(this.relateds);
  }

  accept() {
    this.appService.accept(this.report);
  }

  getRelatedReports(reports) {
    return [REPORTS[1], REPORTS[8]];
  }


  ngOnInit() {
  }

}
