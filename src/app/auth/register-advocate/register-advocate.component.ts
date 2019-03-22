import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register-advocate',
  templateUrl: './register-advocate.component.html',
  styleUrls: ['./register-advocate.component.css']
})
export class RegisterAdvocateComponent implements OnInit {

  advocate: User;

  constructor() { }

  ngOnInit() {
  }

}
