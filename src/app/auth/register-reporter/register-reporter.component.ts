import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-register-reporter',
  templateUrl: './register-reporter.component.html',
  styleUrls: ['./register-reporter.component.css']
})
export class RegisterReporterComponent implements OnInit {
  reporter: User;
  password = '';
  confirmPassword = '';

  onRegister() {
    this.validate();
    console.log(this.reporter);
  }

  validate() {
    // Ensure things are well defined!!
  }

  constructor(private appService: AppService) {
    this.reporter = new User();
  }

  ngOnInit() {
    this.appService.setPath('Registration');
  }

}
