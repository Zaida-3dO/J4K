import {Component, OnInit} from '@angular/core';
import {AppService} from '../../app.service';
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
    this.appService.login(this.user.email, this.user.password).subscribe(
      (data: any) => {
        this.appService.setToken(data.token);
        // this.router.navigate(['reporter']);
      }, error => {
        console.log('Error', error);
        alert('Fail');
      });
  }

  validate() {
    // Ensure things are well defined!!
  }

  constructor(private appService: AppService) {
    this.user = new User();
  }

  ngOnInit() {
    this.appService.setPath('Login');
  }

}
