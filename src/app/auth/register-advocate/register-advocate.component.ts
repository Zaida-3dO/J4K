import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {AppService} from '../../app.service';
import {Router} from '@angular/router';

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
    this.appService.registerUser(this.advocate, 'advocate').subscribe(
      (data: any) => {
        this.appService.login(this.advocate.email, this.advocate.password).subscribe(
          (data2: any) => {
            this.appService.setToken(data2.token);
            this.router.navigate(['advocate']);
          }, error => {
            console.log('Error', error);
          });
      }, error => {
        console.log('Error', error);
      });
  }

  validate() {
    // Ensure things are well defined!!
  }

  constructor(private appService: AppService, private router: Router) {
    this.advocate = new User();
  }

  ngOnInit() {
    this.appService.setPath('Advocate Registration');
  }
}
