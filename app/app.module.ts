import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import {RouterModule, Router}from '@angular/router';
import { AppComponent }  from './app.component';
import { LoginComponent} from './login/login.component';
import {MainComponent}from './menu/menu.component'
import {LoginService} from "./login/login.service";
import {ForgotComponent} from './login/forgot.component';
import {AppRoutingModule} from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TranscriptsComponent } from './transcripts/transcripts.component';
import { StatisticsComponent } from './statistic/statistics.component';
import { QAComponent } from './qa/qa.component';
import { AdminComponent } from './admin/admin.component';
import {LoginRoutingModule} from './login/login-routing.module';
import {DashboardRoutingModule} from "./dashboard/dashboard-routing.module";
import {authDashboardProviders} from "./dashboard/dashboard.routes";

@NgModule({
  imports:[
    BrowserModule,
    FormsModule,
    DashboardRoutingModule,
    LoginRoutingModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    ForgotComponent,
    DashboardComponent,
    TranscriptsComponent,
    StatisticsComponent,
    QAComponent,
    AdminComponent
  ],
  providers: [
    LoginService,
    authDashboardProviders
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule {
 // constructor(storageService: LocalStorageService){}
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}

