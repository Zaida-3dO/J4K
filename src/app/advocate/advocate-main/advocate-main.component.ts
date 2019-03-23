import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-advocate-main',
  templateUrl: './advocate-main.component.html',
  styleUrls: ['./advocate-main.component.css']
})
export class AdvocateMainComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.navigate(['/advocate/my-cases']);
  }

}
