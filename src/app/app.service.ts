import { Injectable } from '@angular/core';
import {User} from './models/user';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  getUser(success: (user: User) => void, error: (error: string) => void) {
    // Todo: Implement getting current user
    success(new User());
  }
}
