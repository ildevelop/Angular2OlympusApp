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
 * Created by ilya on 29/01/2017.
 */
var isLoggedIn_service_1 = require('../login/isLoggedIn.service');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var TranscriptsGuard = (function () {
    function TranscriptsGuard(router, http) {
        this.router = router;
        this.http = http;
        this.errorMessage = '';
    }
    TranscriptsGuard.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    TranscriptsGuard.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    TranscriptsGuard.prototype.canActivate = function (route, state) {
        if (isLoggedIn_service_1.isLoggedin() && isLoggedIn_service_1.checkPermissions("transcripts")) {
            return true;
        }
        this.router.navigate(['/dashboard']);
        return false;
    };
    TranscriptsGuard = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http])
    ], TranscriptsGuard);
    return TranscriptsGuard;
}());
exports.TranscriptsGuard = TranscriptsGuard;
//# sourceMappingURL=transcripts.guard.js.map