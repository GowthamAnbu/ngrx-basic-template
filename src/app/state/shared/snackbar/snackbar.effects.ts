import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { SnackbarActionTypes, SnackbarOpen, SnackbarClose } from './snackbar.actions';

@Injectable()
export class SnackbarEffects {

  @Effect({
    dispatch: false
  })
  closeSnackbar$: Observable<any> = this.actions.ofType(SnackbarActionTypes.SnackbarClose)
    .pipe(
      tap(() => this.matSnackBar.dismiss())
    );

  @Effect()
  showSnackbar$: Observable<any> = this.actions.ofType(SnackbarActionTypes.SnackbarOpen)
    .pipe(
      map((action: SnackbarOpen) => action.payload),
      tap(payload => this.matSnackBar.open(payload.message, payload.action, payload.config)),
      delay(5000),
      map(() => new SnackbarClose())
    );

  constructor(
    private actions: Actions,
    private matSnackBar: MatSnackBar
  ) {}

}
