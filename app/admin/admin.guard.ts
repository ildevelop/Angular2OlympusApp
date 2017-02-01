/**
 * Created by ilya on 29/01/2017.
 */
import {isLoggedin,getTokenFromBrowser,checkPermissions}  from '../login/isLoggedIn.service';
import { Injectable }          from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild} from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Token} from'../login/token';

@Injectable()
export class AdminGuard implements CanActivateChild {
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean>|Promise<boolean>|boolean {
    console.log("before can activate admin child");
    if (isLoggedin()&&checkPermissions("admin")) {
      return true;
    }
    // this.router.navigate(['/dashboard']);
    return false;

  }
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



}
