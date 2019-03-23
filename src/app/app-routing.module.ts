import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {RegisterComponent} from './auth/register/register.component';
import {RegisterAdvocateComponent} from './auth/register-advocate/register-advocate.component';
import {RegisterReporterComponent} from './auth/register-reporter/register-reporter.component';
import {NewReportComponent} from './report/new-report/new-report.component';
import {ReporterComponent} from './reporter/reporter.component';
import {ReporterMainComponent} from './reporter/reporter-main/reporter-main.component';
import {LandingPageMainComponent} from './landing-page/landing-page-main/landing-page-main.component';
import {LoginComponent} from './auth/login/login.component';
import {UpdateProfileComponent} from './auth/update-profile/update-profile.component';
import {ReportMainComponent} from './report/report-main/report-main.component';
import {AdvocateComponent} from './advocate/advocate.component';
import {AdvocateMainComponent} from './advocate/advocate-main/advocate-main.component';
import {ReportListComponent} from './report/report-list/report-list.component';

const routes: Routes = [
  {
    path: '', component: LandingPageComponent,
    children: [
      {path: '', component: LandingPageMainComponent},
      {
        path: 'register',
        children: [
          {path: '', component: RegisterComponent},
          {path: 'advocate', component: RegisterAdvocateComponent},
          {path: 'reporter', component: RegisterReporterComponent}
        ]
      },
      {path: 'login', component: LoginComponent},
      {path: 'updateAccount', component: UpdateProfileComponent}
    ]
  },
  {
    path: 'reporter', component: ReporterComponent,
    children: [
      {path: '', component: ReporterMainComponent},
      {path: ':content', component: ReportListComponent},
      {path: 'report/:reportId', component: ReportMainComponent},
      {path: 'new/report', component: NewReportComponent},
      {path: 'updateAccount', component: UpdateProfileComponent}
    ]
  },
  {
    path: 'advocate', component: AdvocateComponent,
    children: [
      {path: '', component: AdvocateMainComponent},
      {path: ':content', component: ReportListComponent},
      {path: ':reportId', component: ReportMainComponent},
      {path: 'updateAccount', component: UpdateProfileComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
