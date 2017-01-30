/**
 * Created by Radu on 1/15/2017.
 */
import { NgModule }             from '@angular/core';
import {RouterModule, Routes, CanActivate} from '@angular/router';
import { LoginRoutes, authProviders }        from './login/login.routes';
import { LoginComponent }   from './login/login.component';
import { ForgotComponent }      from './login/forgot.component';
import {LoginService} from "./login/login.service";
import {DashboardGuard} from "./dashboard/dashboard.guard";
import {DashboardComponent} from "./dashboard/dashboard.component";
// import { DashboardComponent }      from './dashboard/admin/admin.component';

const routes: Routes = [
 // { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login',  component: LoginComponent},
  { path: 'forgot', component: ForgotComponent }
  // ...LoginRoutes
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  providers: [
    authProviders,
    LoginService
  ]
})
export class AppRoutingModule {}
