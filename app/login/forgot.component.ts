/**
 * Created by Radu on 1/15/2017.
 */
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import {LoginService} from "./login.service";

@Component({
  moduleId: module.id,
  selector: 'forgot',
  template: ` 
    <h1>{{title}}</h1> 
  `
})
//TODO forgotpass.html - input email + send button
export class ForgotComponent {
  title = 'Forgot pass';
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }


}
