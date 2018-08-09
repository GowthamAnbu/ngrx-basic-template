import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { SimpleLayoutComponent } from './containers/simple-layout/simple-layout.component';
import { NotificationComponent } from './components/notification/notification.component';
import { FullLayoutComponent } from './containers/full-layout/full-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SimpleLayoutComponent,
    NotificationComponent,
  ],
  declarations: [
    SimpleLayoutComponent,
    NotificationComponent,
    FullLayoutComponent,
  ]
})
export class CoreModule { }
