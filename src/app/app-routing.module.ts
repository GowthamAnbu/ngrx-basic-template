import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SimpleLayoutComponent } from './core/containers/simple-layout/simple-layout.component';
import { FullLayoutComponent } from './core/containers/full-layout/full-layout.component';

const routes: Routes = [

  {
    path: '',
    component: SimpleLayoutComponent,
    children: [
      {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
      },
      {
        path: '',
        redirectTo: 'auth/login',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: 'user',
        loadChildren: './user/user.module#UserModule'
      },
      {
        path: '',
        redirectTo: 'user/dashboard',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
