import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {RegisterComponent} from './auth/register/register.component';
import {RegisterAdvocateComponent} from './auth/register-advocate/register-advocate.component';
import {RegisterReporterComponent} from './auth/register-reporter/register-reporter.component';

const routes: Routes = [
  {
    path: '', component: LandingPageComponent
  },
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
