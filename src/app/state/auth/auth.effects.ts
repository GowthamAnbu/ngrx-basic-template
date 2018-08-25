import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { map, exhaustMap, catchError, tap, mergeMap } from 'rxjs/operators';
import { of, empty } from 'rxjs';
import {
  AuthActionTypes,
  Login,
  LoginSuccess,
  LoginFailure,
  /* Logout,
  LogoutConfirmed,
  LogoutComplete,
  LogoutCancelled, */
} from './auth.actions';
import { SnackbarOpenPrimary, SnackbarOpenSecondary } from '../shared/snackbar/snackbar.actions';
import { AuthService } from '../../auth/services/auth.service';
import { Router } from '@angular/router';
// import { MatDialog } from '@angular/material';
// import { LogoutPromptComponent } from '@app/auth/components/logout-prompt.component';

@Injectable()
export class AuthEffects {
  @Effect()
  login$ = this.actions$
    .ofType<Login>(AuthActionTypes.Login)
    .pipe(
      map(action => action.payload),
      exhaustMap(auth =>
        this.authService
          .login(auth)
          .pipe(
            map(body => new LoginSuccess(body)),
            catchError(error => of(new LoginFailure(error))),
          ),
      ),
    );

  @Effect()
  loginSuccesRedirect$ = this.actions$
    .ofType<LoginSuccess>(AuthActionTypes.LoginSuccess)
    .pipe(
      tap(() => {
        this.router.navigate(['/user/dashboard']);
      }),
      map(() => new SnackbarOpenPrimary({
        message: 'successfully logged in',
      })),
    );

  @Effect()
  loginFailureRedirect$ = this.actions$
    .ofType<LoginFailure>(AuthActionTypes.LoginFailure)
    .pipe(
      tap((error) => {
        console.log(error);
        this.router.navigate(['/auth/login']);
      }),
      map(() =>
        new SnackbarOpenSecondary({
          message: 'log in failed',
        })
      )
    );

  /* @Effect()
  logoutConfirmation$ = this.actions$
    .ofType<Logout>(AuthActionTypes.Logout)
    .pipe(
      exhaustMap(() =>
        this.dialogService
          .open(LogoutPromptComponent)
          .afterClosed()
          .pipe(
            map(confirmed => {
              if (confirmed) {
                return new LogoutConfirmed();
              } else {
                return new LogoutCancelled();
              }
            })
          ),
      ),
    );

  @Effect({ dispatch: false })
  logout$ = this.actions$
    .ofType<LogoutConfirmed>(AuthActionTypes.LogoutConfirmed)
    .pipe(
      exhaustMap(auth =>
        this.authService
          .logout()
          .pipe(
            tap(() => this.router.navigate(['/login'])),
            map(() => new LogoutComplete()),
            catchError(() => of(new LogoutComplete())),
          ),
      ),
    ); */

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router,
    // private dialogService: MatDialog,
  ) {}
}
