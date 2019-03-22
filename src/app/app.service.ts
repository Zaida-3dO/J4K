import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {User} from './models/user';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  path: Subject<string> = new BehaviorSubject(null);
  path$ = this.path.asObservable();
  constructor() { }

  setPath(path: string) {
    this.path.next(path);
  }

  getUser(success: (user: User) => void, error: (error: string) => void) {
    // Todo: Implement getting current user
    success(new User());
  }
}
