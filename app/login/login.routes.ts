/**
 * Created by ilya on 29/01/2017.
 */
import { provideRoutes, Routes } from '@angular/router';
import { Router, CanActivate } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DashboardGuard } from '../dashboard/dashboard.guard';
import { AdminComponent } from '../admin/admin.component';
import { AdminGuard } from '../admin/admin.guard';
import { StatisticsComponent } from '../statistic/statistics.component';
import { StatisticsGuard } from '../statistic/satistics.guard';
import { QAComponent } from '../qa/qa.component';
import { QAGuard } from '../qa/qa.guard';
import { TranscriptsComponent } from '../transcripts/transcripts.component';
import { TranscriptsGuard } from '../transcripts/transcripts.guard';

export const LoginRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate:[DashboardGuard] },
  { path: 'admin', component: AdminComponent, canActivate:[AdminGuard] },
  { path: 'statistics', component: StatisticsComponent, canActivate:[StatisticsGuard] },
  { path: 'qa', component: QAComponent, canActivate:[QAGuard] },
  { path: 'transcripts', component: TranscriptsComponent, canActivate:[TranscriptsGuard] },
];


export const authProviders = [AdminGuard,StatisticsGuard,QAGuard,TranscriptsGuard,DashboardGuard];//qa gaurd , statistics guard
