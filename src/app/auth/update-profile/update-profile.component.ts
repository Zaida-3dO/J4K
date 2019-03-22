import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {AppService} from '../../app.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  user: User;

  onUpdate() {
    this.validate();
    console.log(this.user);
  }

  validate() {
    // Ensure things are well defined!!
  }

  constructor(appService: AppService) {
    appService.getUser((user: User) => {
      this.user = user;
    }, undefined);
  }

  ngOnInit() {
  }

}
