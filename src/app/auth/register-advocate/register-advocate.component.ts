import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-register-advocate',
  templateUrl: './register-advocate.component.html',
  styleUrls: ['./register-advocate.component.css']
})
export class RegisterAdvocateComponent implements OnInit {

  advocate: User;
  password = '';
  confirmPassword = '';

  onRegister() {
    this.validate();
    console.log(this.advocate);
  }

  validate() {
     // Ensure things are well defined!!
  }

  constructor(private appService: AppService) {
    this.advocate = new User();
  }

  ngOnInit() {
    this.appService.setPath('Advocate Registration');
  }

}
