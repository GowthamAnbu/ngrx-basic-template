import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './components/signin/signin.component';
import { ContactRequestComponent } from './components/contact-request/contact-request.component';
import { SignOutComponent } from './components/sign-out/sign-out.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

const routes: Routes = [
  {
    path: 'login',
    component: SigninComponent,
  }, {
    path: 'contact_request',
    component: ContactRequestComponent,
  }, {
    path: 'logout',
    component: SignOutComponent,
  },
  {
    path: 'forgot_pwd',
    component: ForgotPasswordComponent,
  }, {
    path: 'reset_password/:token',
    component: ResetPasswordComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }