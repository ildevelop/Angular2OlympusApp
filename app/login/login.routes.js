"use strict";
var dashboard_component_1 = require('../dashboard/dashboard.component');
var dashboard_guard_1 = require('../dashboard/dashboard.guard');
exports.LoginRoutes = [
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent, canActivateChild: [dashboard_guard_1.DashboardGuard] }
];
exports.authProviders = [dashboard_guard_1.DashboardGuard]; //qa gaurd , statistics guard
//# sourceMappingURL=login.routes.js.map