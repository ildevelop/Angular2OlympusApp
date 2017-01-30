/**
 * Created by ilya on 29/01/2017.
 */

/**
 * Created by Radu on 1/15/2017.
 */
import { NgModule }             from '@angular/core';
import {RouterModule, Routes, CanActivate, Router} from '@angular/router';
import {DashboardRoutes, authDashboardProviders} from "./dashboard.routes";


const routes: Routes = [
   ...DashboardRoutes
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  ,
  // providers: [
  //   authDashboardProviders
  // ]
})
export class DashboardRoutingModule {

  constructor(router: Router) {
   // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}

