/**
 * Created by ilya on 29/01/2017.
 */

/**
 * Created by Radu on 1/15/2017.
 */
import { NgModule }             from '@angular/core';
import {RouterModule, Routes, CanActivate, Router} from '@angular/router';
import { LoginRoutes,authProviders }        from './login.routes';


const routes: Routes = [
   ...LoginRoutes
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
  ,
  providers: [
    authProviders
  ]
})
export class LoginRoutingModule {

  constructor(router: Router) {
   // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}

