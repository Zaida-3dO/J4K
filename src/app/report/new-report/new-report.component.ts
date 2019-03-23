import {Component, OnInit} from '@angular/core';
import {Report} from '../../models/report';
import {AppService} from '../../app.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.css']
})
export class NewReportComponent implements OnInit {

  report: Report;
  newTag: string;

  constructor(private appService: AppService, private router: Router) {
    this.report = new Report();
  }

  addTag() {
    if (this.newTag) {
      this.report.tags.push((this.newTag));
      this.newTag = '';
    }
  }

  addPoi() {
    const id = this.report.persons.length;
    this.report.persons.push({
      id,
      name: '',
      phone: '',
      email: '',
      address: '',
      type: ''
    });
  }

  sendReport() {
    this.appService.createReport(this.report).subscribe(
      (data: any) => {
        alert('Successfull');
      }, error => {
        alert('Fail');
      });
  }

  ngOnInit() {
    if (!this.appService.isLoggedIn()) {
      this.router.navigate(['/register/login']);
    }
    this.appService.setPath('Make A Report!');
  }

}
