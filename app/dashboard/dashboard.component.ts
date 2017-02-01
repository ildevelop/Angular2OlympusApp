/**
 * Created by ilya on 29/01/2017.
 */
import { Component, Input, OnInit } from '@angular/core';
import {Token} from "../login/token";
import {User} from "../login/User";

@Component({
  //directives: [ ROUTER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES ],
  selector: 'app-dashboard',
  templateUrl:'./app/dashboard/dashboard.html',
  styleUrls:['./app/dashboard/dashboard.css']

})
export class DashboardComponent implements OnInit{

  user: User ;

  ngOnInit(): void {
    console.log("before get user dashboard");
    this.user= <User>JSON.parse(localStorage.getItem('user'));
    console.log("after get user "+this.user);
  }


}
