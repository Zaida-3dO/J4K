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

  onRegister() {
    this.validate();
    console.log(this.advocate);
    this.appService.registerUser(this.advocate, 'reporter').subscribe(
      (data: any) => {
        alert('Successfull');
      }, error => {
        console.log('Error', error);
        alert('Fail');
      });
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
