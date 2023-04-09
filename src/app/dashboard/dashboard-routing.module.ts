import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserInfoComponent } from './user-info/user-info.component';
import { DashboardComponent } from './dashboard.component';
import { StatisticComponent } from './statistic/statistic.component';


const routes: Routes = [
  { path: '', component: DashboardComponent,
children: [
  { path: 'info', component: UserInfoComponent},
  { path: 'statistic', component: StatisticComponent},

]},
]
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
