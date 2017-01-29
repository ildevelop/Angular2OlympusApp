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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var app_component_1 = require('./app.component');
var login_component_1 = require('./login/login.component');
var menu_component_1 = require('./menu/menu.component');
var login_service_1 = require("./login/login.service");
var forgot_component_1 = require('./login/forgot.component');
var app_routing_module_1 = require('./app-routing.module');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var transcripts_component_1 = require('./transcripts/transcripts.component');
var statistics_component_1 = require('./statistic/statistics.component');
var qa_component_1 = require('./qa/qa.component');
var admin_component_1 = require('./admin/admin.component');
var AppModule = (function () {
    // constructor(storageService: LocalStorageService){}
    // Diagnostic only: inspect router configuration
    function AppModule(router) {
        console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule
            ],
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                menu_component_1.MainComponent,
                forgot_component_1.ForgotComponent,
                dashboard_component_1.DashboardComponent,
                transcripts_component_1.TranscriptsComponent,
                statistics_component_1.StatisticsComponent,
                qa_component_1.QAComponent,
                admin_component_1.AdminComponent
            ],
            providers: [
                login_service_1.LoginService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map