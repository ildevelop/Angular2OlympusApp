import { Component, Input, OnInit } from '@angular/core';
import {User} from './User';
import { LoginService } from './login.service';
import { Router }      from '@angular/router';
import { Http, Headers, Response } from '@angular/http';
import {ForgotComponent} from './forgot.component';
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  //directives: [ ROUTER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES ],
  selector: 'login',
  templateUrl:'./app/login/login.html',
  styleUrls:['./app/login/login.css']
})
export class LoginComponent implements OnInit{

  isChecked:boolean = false;
  errorMessage:string ='Login Failed';
  loginApproved: boolean = false;
  loading: boolean = false;
  debugWindow: boolean = false;
  isLoggedIn:boolean = false;
  errorFlag: boolean = false;
  users : User[];
  user= new User();

  constructor(private loginService: LoginService, public router: Router) { }
  login(event: any,user: User) {
    this.loading=true;
    event.preventDefault();
    let body = JSON.stringify(user);
    console.log("body:"+body);
    if(this.isChecked){
      localStorage.setItem("user", body);
    }
    //TODO revoke http request to backend check if user authenticated
    if(this.checkUsers(user)){
   // if(user.email == "ilya@gmail.com" && user.password == "1234"){
      let logged = JSON.stringify(true);
      localStorage.setItem("isLoggedIn", logged);
      this.setLogin();
     // console.log('Routes: ', JSON.stringify(this.router.config, undefined, 2));
      console.log("before navigate to /dashboard ")
      // this.router.navigate(['/dashboard']);
     // this.setLogin();
    }

  }

   checkUsers(user: User) {
     let index = 0;
     for (index = 0; index < this.users.length; ++index) {
       console.log(this.users[index]);
      if(user.email==this.users[index].email&& user.password==this.users[index].password){return true;}
     }
    return false;
  }

  setLogin(){
    this.isLoggedIn = true;
  }
  setLogout(){
    this.isLoggedIn = false;
  }
  setChecked(){
    this.isChecked= true;
  }
  setErrorMessage(message :string){
    this.errorMessage=message;
  }


  getUsers(): void {
    this.loginService.getUsers().then(users => this.users = users);
  }
  ngOnInit(): void {
    this.getUsers();
    let newUser = localStorage.getItem("user");
    let newIsLoggedIn = localStorage.getItem("isLoggedIn");
    if(newUser){
      this.user=JSON.parse(newUser);
    }
    console.log(newIsLoggedIn);
    if(newIsLoggedIn){
      this.isLoggedIn =JSON.parse(newIsLoggedIn);
      console.log("User Checke"+this.isLoggedIn);
    }

  }
  get diagnostic() { return this.user.toString(); }


  ForgotPass(){
    //TODO Forgot Password
    console.log("Forgot Password !!!");
  }

}
