"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var User_1 = require('./User');
var login_service_1 = require('./login.service');
var LoginComponent = (function () {
    function LoginComponent(loginService) {
        this.loginService = loginService;
        this.isChecked = false;
        this.errorMessage = 'Login Failed';
        this.loginApproved = false;
        this.loading = false;
        this.debugWindow = false;
        this.isLoggedIn = false;
        this.errorFlag = false;
        this.user = new User_1.User();
        this.title = "w e l c o m e".toUpperCase();
    }
    LoginComponent.prototype.login = function (event, user) {
        this.loading = true;
        event.preventDefault();
        var body = JSON.stringify(user);
        console.log("body:" + body);
        if (this.isChecked) {
            localStorage.setItem("user", body);
        }
        if (this.checkUsers(user)) {
            // if(user.email == "ilya@gmail.com" && user.password == "1234"){
            var logged = JSON.stringify(this.isLoggedIn);
            localStorage.setItem("isLoggedIn", logged);
            this.setLogin();
        }
        // this.Router.navigate(['/formpage']);
    };
    LoginComponent.prototype.checkUsers = function (user) {
        var index = 0;
        for (index = 0; index < this.users.length; ++index) {
            console.log(this.users[index]);
            if (user.email == this.users[index].email && user.password == this.users[index].password) {
                return true;
            }
        }
        return false;
    };
    LoginComponent.prototype.setLogin = function () {
        this.isLoggedIn = true;
    };
    LoginComponent.prototype.setLogout = function () {
        this.isLoggedIn = false;
    };
    LoginComponent.prototype.setChecked = function () {
        this.isChecked = true;
    };
    LoginComponent.prototype.setErrorMessage = function (message) {
        this.errorMessage = message;
    };
    LoginComponent.prototype.getUsers = function () {
        var _this = this;
        this.loginService.getUsers().then(function (users) { return _this.users = users; });
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.getUsers();
        var newUser = localStorage.getItem("user");
        var newIsLoggedIn = localStorage.getItem("isLoggedIn");
        if (newUser) {
            this.user = JSON.parse(newUser);
        }
        console.log(newIsLoggedIn);
        if (newIsLoggedIn) {
            this.isLoggedIn = JSON.parse(newIsLoggedIn);
            console.log("User Checke" + this.isLoggedIn);
        }
    };
    Object.defineProperty(LoginComponent.prototype, "diagnostic", {
        get: function () { return this.user.toString(); },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.ForgotPass = function () {
        //TODO Forgot Password
        console.log("Forgot Password !!!");
    };
    LoginComponent = __decorate([
        core_1.Component({
            //directives: [ ROUTER_DIRECTIVES, CORE_DIRECTIVES, FORM_DIRECTIVES ],
            selector: 'login',
            templateUrl: './app/login/login.html',
            styleUrls: ['./app/login/login.css']
        }), 
        __metadata('design:paramtypes', [login_service_1.LoginService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map