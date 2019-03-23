import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {User} from './models/user';
import {environment} from '../environments/environment';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private API_URL: any = environment.config.API_URL;

  path: Subject<string> = new BehaviorSubject(null);
  path$ = this.path.asObservable();

  token: string;
  user: any;

  constructor(private  http: HttpClient, private router: Router) {
  }

  setPath(path: string) {
    this.path.next(path);
  }

  loadUser() {
    return this.http.get(this.API_URL + 'user');
  }

  createReport(report) {
    console.log(report);
    const payload = new HttpParams()
      .set('address', report.address)
      .set('country', report.country)
      .set('description', report.content)
      .set('title', report.title)
      .set('state', report.state)
      .set('tags', JSON.stringify(report.tags))
      .set('persons', JSON.stringify(report.persons));
    return this.http.post(this.API_URL + 'reports/create', payload);
  }

  login(email, password) {
    // console.log(user);
    const payload = new HttpParams()
      .set('email', email)
      .set('password', password);
    return this.http.post(this.API_URL + 'login', payload);
    // console.log('Me');
    // return this.http.post(this.API_URL + 'login', {A: 'A'});
  }

  setToken(token) {
    this.token = token;
    this.setUser();
  }

  setUser() {
    this.http.get(this.API_URL + 'user' + '?token=' + this.token).subscribe(
      (data2: any) => {
        console.log('USER', data2);
        this.user = data2.user;
        this.router.navigate([this.user.role[0]]);
      }, error2 => {
        console.log('Error', error2);
      });
  }

  getUser(success: (user: User) => void, error: (error: string) => void) {
    // Todo: Implement getting current user
    success(new User());
  }

  isLoggedIn() {
    return !!this.user;
  }

  getAllReports() {
    return this.http.get(this.API_URL + 'reports' + '?token=' + this.token);
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
