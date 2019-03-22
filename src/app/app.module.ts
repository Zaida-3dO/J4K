import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterAdvocateComponent } from './auth/register-advocate/register-advocate.component';
import { RegisterReporterComponent } from './auth/register-reporter/register-reporter.component';
import { RegisterComponent } from './auth/register/register.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AdvocateComponent } from './advocate/advocate.component';
import { ReporterComponent } from './reporter/reporter.component';
import { UpdateProfileComponent } from './auth/update-profile/update-profile.component';
import { ReportMainComponent } from './report/report-main/report-main.component';
import { NewReportComponent } from './report/new-report/new-report.component';
import { ReporterMainComponent } from './reporter/reporter-main/reporter-main.component';
import { AdvocateMainComponent } from './advocate/advocate-main/advocate-main.component';
import { ReportListDirective } from './report/report-list.directive';
import { ReportCardDirective } from './report/report-card.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  // TODO report list directive
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterAdvocateComponent,
    RegisterReporterComponent,
    RegisterComponent,
    LandingPageComponent,
    AdvocateComponent,
    ReporterComponent,
    UpdateProfileComponent,
    ReportMainComponent,
    NewReportComponent,
    ReporterMainComponent,
    AdvocateMainComponent,
    ReportListDirective,
    ReportCardDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
