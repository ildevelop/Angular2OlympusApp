"use strict";
function isLoggedin() {
    var isLogged = JSON.parse(localStorage.getItem('isLoggedIn'));
    console.log('client ' + (localStorage.getItem('user')) + ' token logged ' + isLogged);
    //TODO back end request to session checks user logged in to backend
    return isLogged.value === "true";
}
exports.isLoggedin = isLoggedin;
function checkPermissions(permission) {
    var theToken = JSON.parse(localStorage.getItem('user'));
    //TODO back end request to session checks user permissions to backend
    console.log('client ' + (localStorage.getItem('user')) + ' token type' + theToken);
    var permissions = theToken.permissions;
    for (var value in permissions) {
        if (value.valueOf() === permission) {
            return true;
        }
    }
    return false;
}
exports.checkPermissions = checkPermissions;
function getTokenFromBrowser() {
    var theToken = JSON.parse(localStorage.getItem('user'));
    return theToken;
}
exports.getTokenFromBrowser = getTokenFromBrowser;
//# sourceMappingURL=isLoggedIn.service.js.map