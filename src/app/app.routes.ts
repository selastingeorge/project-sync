import { Routes } from '@angular/router';

import {AngularFireAuthGuard} from '@angular/fire/compat/auth-guard';
import { redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { RiskManagementComponent } from './pages/dashboard/risk-management/risk-management.component';
import { TestCaseManagementComponent } from './pages/dashboard/test-case-management/test-case-management.component';
import { ResourceManagementComponent } from './pages/dashboard/resource-management/resource-management.component';
import { AuditManagementComponent } from './pages/dashboard/audit-management/audit-management.component';
import { CsatManagementComponent } from './pages/dashboard/csat-management/csat-management.component';
import { ReportsComponent } from './pages/dashboard/reports/reports.component';
import { SettingsComponent } from './pages/dashboard/settings/settings.component';
import { HomeComponent } from './pages/dashboard/home/home.component';
import { ProjectManagementComponent } from './pages/dashboard/project-management/project-management.component';

const redirectUnauthorized = () => redirectUnauthorizedTo(['signin']);

export const routes: Routes = [
    {
        path:'',
        component:SignInComponent
    },
    {
        path:'signin',
        component:SignInComponent,
    },
    {
        path:'signup',
        component:SignUpComponent
    },
    {
        path:'forgot-password',
        component:ForgotPasswordComponent
    },
    {
        path:'dashboard',
        component:DashboardComponent,
        canActivate:[AngularFireAuthGuard],
        data: { 
            authGuardPipe: redirectUnauthorized 
        },
        children:[
            {
                path:'home',
                component:HomeComponent
            },
            {
                path:'project-management',
                component:ProjectManagementComponent
            },
            {
                path:'risk-management',
                component:RiskManagementComponent
            },
            {
                path:'test-case-management',
                component:TestCaseManagementComponent
            },
            {
                path:'resource-management',
                component:ResourceManagementComponent
            },
            {
                path:'audit-management',
                component:AuditManagementComponent
            },
            {
                path:'csat-management',
                component:CsatManagementComponent
            },
            {
                path:'reports',
                component:ReportsComponent
            },
            {
                path:'settings',
                component:SettingsComponent
            },
        ]
    },
    
];
