import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthGuard } from '../auth/guard/auth.guard';
import { DashboardComponent } from 'src/app/user/dashboard/dashboard.component';

const routes: Routes = [
  /* {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  }, */
  {
    path: 'test',
    component: DashboardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
