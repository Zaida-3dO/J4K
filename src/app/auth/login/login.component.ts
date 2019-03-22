import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User;

  onLogin() {
    this.validate();
    console.log(this.user);
  }

  validate() {
    // Ensure things are well defined!!
  }

  constructor() {
    this.user = new User();
  }

  ngOnInit() {
  }

}
