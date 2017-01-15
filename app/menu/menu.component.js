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
 * Created by Radu on 1/14/2017.
 */
var core_1 = require('@angular/core');
var UserInfo_1 = require('./UserInfo');
var MainComponent = (function () {
    function MainComponent() {
        this.user = new UserInfo_1.UserInfo();
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent.prototype.sumbitForm = function (event, user) {
        event.preventDefault();
        console.log(user);
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: 'main-menu',
            templateUrl: './app/menu/menu.html',
            styles: [".text-center{background-color:darkgray;}.btn1{background-color:darkgray;font-weight:bold;}.btn1:hover{background-color:aquamarine;color:#6BE;}.row{margin:15px;}.sml{font-size: smaller;}"]
        }), 
        __metadata('design:paramtypes', [])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=menu.component.js.map