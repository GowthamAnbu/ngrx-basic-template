import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from 'src/app/user/dashboard/dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule,
  ],
  declarations: [DashboardComponent]
})
export class UserModule { }
