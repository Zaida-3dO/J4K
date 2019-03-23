import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {User} from './models/user';
import {environment} from '../environments/environment';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private API_URL: any = environment.config.API_URL;

  path: Subject<string> = new BehaviorSubject(null);
  path$ = this.path.asObservable();

  constructor(private  http: HttpClient) {
  }

  setPath(path: string) {
    this.path.next(path);
  }

  loadUser() {
    return this.http.get(this.API_URL + 'user');
  }

  login(user) {
    console.log('Me');
    return this.http.post(this.API_URL + 'login', {A: 'A'});
  }

  getUser(success: (user: User) => void, error: (error: string) => void) {
    // Todo: Implement getting current user
    success(new User());
  }

  registerUser(user, role) {
    console.log(user);
    const payload = new HttpParams()
      .set('address', user.address)
      .set('country', user.country)
      .set('description', user.description)
      .set('info', user.info)
      .set('phoneNumber', user.phoneNumber)
      .set('state', user.state)
      .set('name', user.name)
      .set('email', user.email)
      .set('password', user.password)
      .set('password_confirmation', user.confirmPassword)
      .set('role', role);
    return this.http.post(this.API_URL + 'register', payload);
  }
}
