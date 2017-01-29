/**
 * Created by ilya on 29/01/2017.
 */
import {isLoggedin,getTokenFromBrowser,checkPermissions}  from '../login/isLoggedIn.service';
import { Injectable }          from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Token} from'../login/token';

@Injectable()
export class DashboardGuard implements CanActivate {
  token :Token;
  errorMessage :string='';

  constructor( private router: Router,private http :Http) {

  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log("before dashboard guard");
    if (isLoggedin()) {
      return true;
    }
    return false;
  }


}
