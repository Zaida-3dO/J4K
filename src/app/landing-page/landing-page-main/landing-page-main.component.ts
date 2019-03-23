import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-landing-page-main',
  templateUrl: './landing-page-main.component.html',
  styleUrls: ['./landing-page-main.component.css']
})
export class LandingPageMainComponent implements OnInit {

  constructor(private appService: AppService) {
  }


  ngOnInit() {
    this.appService.setPath('Home');
  }

}
