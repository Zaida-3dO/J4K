import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

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

}
