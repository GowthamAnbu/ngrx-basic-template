import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './components/signin/signin.component';
import { ContactRequestComponent } from './components/contact-request/contact-request.component';
import { SignOutComponent } from './components/sign-out/sign-out.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './containers/auth/auth.component';
import { SignInWrapperComponent } from './containers/sign-in-wrapper/sign-in-wrapper.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../state/auth/auth.reducer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    AuthRoutingModule,
    SharedModule,
    StoreModule.forFeature('auth', reducer),
  ],
  declarations: [
    SigninComponent,
    ContactRequestComponent,
    SignOutComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    AuthComponent,
    SignInWrapperComponent,
  ]
})
export class AuthModule { }
