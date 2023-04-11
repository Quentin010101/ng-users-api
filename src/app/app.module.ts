import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TextComponent } from './form/text/text.component';
import { PasswordComponent } from './form/password/password.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DocsComponent } from './docs/docs.component';
import { UserInfoComponent } from './dashboard/user-info/user-info.component';
import { StatisticComponent } from './dashboard/statistic/statistic.component';
import { TemplateComponent } from './global/template/template.component';
import { HeaderComponent } from './global/header/header.component';
import { PricingComponent } from './pricing/pricing.component';
import { ErrorComponent } from './form/error/error.component';
import { BackComponent } from './global/icon/back/back.component';
import { BillingComponent } from './dashboard/billing/billing.component';
import { LogoutComponent } from './global/icon/logout/logout.component';
import { UserComponent } from './global/icon/user/user.component';
import { StatComponent } from './global/icon/stat/stat.component';
import { MoneyComponent } from './global/icon/money/money.component';
import { ApikeyComponent } from './dashboard/user-info/apikey/apikey.component';
import { CardComponent } from './dashboard/billing/card/card.component';
import { APIUsersRandomComponent } from './docs/apiusers-random/apiusers-random.component';
import { APIUserInfoComponent } from './docs/apiuser-info/apiuser-info.component';
import { ModelComponent } from './docs/model/model.component';
import { APIFindByNameComponent } from './docs/find-by-name/find-by-name.component';
import { ChartComponent } from './dashboard/statistic/chart/chart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent,
    TextComponent,
    PasswordComponent,
    DashboardComponent,
    DocsComponent,
    UserInfoComponent,
    StatisticComponent,
    TemplateComponent,
    HeaderComponent,
    PricingComponent,
    ErrorComponent,
    BackComponent,
    BillingComponent,
    LogoutComponent,
    UserComponent,
    StatComponent,
    MoneyComponent,
    ApikeyComponent,
    CardComponent,
    APIUsersRandomComponent,
    APIUserInfoComponent,
    ModelComponent,
    APIFindByNameComponent,
    ChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
