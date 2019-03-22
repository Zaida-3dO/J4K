import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {RegisterComponent} from './auth/register/register.component';
import {RegisterAdvocateComponent} from './auth/register-advocate/register-advocate.component';
import {RegisterReporterComponent} from './auth/register-reporter/register-reporter.component';
import {NewReportComponent} from './report/new-report/new-report.component';

const routes: Routes = [
  {
    path: '', component: LandingPageComponent,
    children: [
      {
        path: 'register',
        children: [
          {
            path: '',
            component: RegisterComponent
          },
          {
            path: 'advocate',
            component: RegisterAdvocateComponent
          },
          {
            path: 'reporter',
            component: RegisterReporterComponent
          }
        ]
      },
      {
        path: 'new/report',
        component: NewReportComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
