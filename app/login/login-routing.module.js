/**
 * Created by ilya on 29/01/2017.
 */
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
/**
 * Created by Radu on 1/15/2017.
 */
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var login_routes_1 = require('./login.routes');
var routes = login_routes_1.LoginRoutes.slice();
var LoginRoutingModule = (function () {
    function LoginRoutingModule(router) {
        // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
    LoginRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule],
            providers: [
                login_routes_1.authProviders
            ]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());
exports.LoginRoutingModule = LoginRoutingModule;
//# sourceMappingURL=login-routing.module.js.map