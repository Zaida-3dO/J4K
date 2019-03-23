import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {AppService} from '../../app.service';
import {Router} from '@angular/router';

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
    this.appService.registerUser(this.reporter, 'reporter').subscribe(
      (data: any) => {
        this.appService.login(this.reporter.email, this.reporter.password).subscribe(
          (data2: any) => {
            this.appService.setToken(data2.token);
            this.router.navigate(['reporter']);
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
    this.reporter = new User();
  }

  ngOnInit() {
    this.appService.setPath('Reporter Registration');
  }
}
