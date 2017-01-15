/**
 * Created by Radu on 1/15/2017.
 */
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent }   from './login/login.component';
import { ForgotComponent }      from './login/forgot.component';

const routes: Routes = [
  { path: 'login',  component: LoginComponent },
  { path: 'forgot', component: ForgotComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
