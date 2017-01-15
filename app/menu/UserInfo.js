"use strict";
/**
 * Created by Radu on 1/13/2017.
 */
var UserInfo = (function () {
    function UserInfo() {
    }
    UserInfo.prototype.toString = function () {
        var string = '';
        for (var property in this) {
            if (this.hasOwnProperty(property)) {
                string += ' ' + property;
            }
        }
        return string;
    };
    return UserInfo;
}());
exports.UserInfo = UserInfo;
//# sourceMappingURL=UserInfo.js.map