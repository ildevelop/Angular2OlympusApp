/**
 * Created by ilya on 29/01/2017.
 */
import { provideRoutes, Routes } from '@angular/router';
import { Router, CanActivate } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { AdminGuard } from '../admin/admin.guard';
import { StatisticsComponent } from '../statistic/statistics.component';
import { StatisticsGuard } from '../statistic/satistics.guard';
import { QAComponent } from '../qa/qa.component';
import { QAGuard } from '../qa/qa.guard';
import { TranscriptsComponent } from '../transcripts/transcripts.component';
import { TranscriptsGuard } from '../transcripts/transcripts.guard';

export const DashboardRoutes: Routes = [
  { path: 'admin', component: AdminComponent,   canActivateChild: [AdminGuard] },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'qa', component: QAComponent, canActivateChild: [QAGuard] },
  { path: 'transcripts', component: TranscriptsComponent },
];


export const authDashboardProviders = [AdminGuard,StatisticsGuard,QAGuard,TranscriptsGuard];//qa gaurd , statistics guard
