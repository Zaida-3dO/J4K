import {Component, OnInit} from '@angular/core';
import {AppService} from '../app.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  path: string;

  constructor(private appService: AppService) {
  }

  ngOnInit() {
    this.appService.path$.subscribe(data => this.path = data);
  }

}
