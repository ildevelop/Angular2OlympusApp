/**
 * Created by ilya on 29/01/2017.
 */
import { provideRoutes, Routes } from '@angular/router';
import { Router, CanActivate } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DashboardGuard } from '../dashboard/dashboard.guard';
import {DashboardRoutes} from "../dashboard/dashboard.routes";

export const LoginRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent , canActivateChild: [DashboardGuard] }
];


export const authProviders = [DashboardGuard];//qa gaurd , statistics guard
