import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './auth/signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { DocsComponent } from './docs/docs.component';
import { UserInfoComponent } from './dashboard/user-info/user-info.component';
import { StatisticComponent } from './dashboard/statistic/statistic.component';
import { PricingComponent } from './pricing/pricing.component';
import { BillingComponent } from './dashboard/billing/billing.component';
import { APIUserInfoComponent } from './docs/apiuser-info/apiuser-info.component';
import { APIUsersRandomComponent } from './docs/apiusers-random/apiusers-random.component';
import { APIFindByNameComponent } from './docs/find-by-name/find-by-name.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent },
  { path: 'pricing', component: PricingComponent},
  { path: 'docs', component: DocsComponent,
  children: [
    { path: '',redirectTo: 'user-info', pathMatch: 'full'},
    { path: 'user-info', component: APIUserInfoComponent},
    { path: 'users-random', component: APIUsersRandomComponent},
    { path: 'findByName', component: APIFindByNameComponent},
  ]
},
  { path: 'dashboard', component: DashboardComponent,
      canActivate: [AuthGuard],
      children: [
        { path: '',redirectTo: 'info', pathMatch: 'full'},
        { path: 'info', component: UserInfoComponent},
        { path: 'statistic', component: StatisticComponent},
        { path: 'billing', component: BillingComponent},
      ]
    },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
