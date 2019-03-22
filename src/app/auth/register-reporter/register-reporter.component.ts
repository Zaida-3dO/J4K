import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';

@Component({
  selector: 'app-register-reporter',
  templateUrl: './register-reporter.component.html',
  styleUrls: ['./register-reporter.component.css']
})
export class RegisterReporterComponent implements OnInit {
  reporter: User;

  onRegister() {
    this.validate();
    console.log(this.reporter);
  }

  validate() {
    // Ensure things are well defined!!
  }

  constructor() {
    this.reporter = new User();
  }

  ngOnInit() {
  }

}
