"use strict";
var admin_component_1 = require('../admin/admin.component');
var admin_guard_1 = require('../admin/admin.guard');
var statistics_component_1 = require('../statistic/statistics.component');
var satistics_guard_1 = require('../statistic/satistics.guard');
var qa_component_1 = require('../qa/qa.component');
var qa_guard_1 = require('../qa/qa.guard');
var transcripts_component_1 = require('../transcripts/transcripts.component');
var transcripts_guard_1 = require('../transcripts/transcripts.guard');
exports.DashboardRoutes = [
    { path: 'admin', component: admin_component_1.AdminComponent, canActivateChild: [admin_guard_1.AdminGuard] },
    { path: 'statistics', component: statistics_component_1.StatisticsComponent },
    { path: 'qa', component: qa_component_1.QAComponent, canActivateChild: [qa_guard_1.QAGuard] },
    { path: 'transcripts', component: transcripts_component_1.TranscriptsComponent },
];
exports.authDashboardProviders = [admin_guard_1.AdminGuard, satistics_guard_1.StatisticsGuard, qa_guard_1.QAGuard, transcripts_guard_1.TranscriptsGuard]; //qa gaurd , statistics guard
//# sourceMappingURL=dashboard.routes.js.map