import { MatSnackBarConfig } from '@angular/material';
import { Action } from '@ngrx/store';

export enum SnackbarActionTypes {
  SnackbarOpen = '[Snackbar] Open',
  SnackbarClose = '[Snackbar] Close',
}

export class SnackbarOpenPrimary implements Action {
  readonly type = SnackbarActionTypes.SnackbarOpen;

  readonly primaryConfig: MatSnackBarConfig = {
    duration : 5000,
    panelClass: ['primary-snackbar']
  };

  constructor(public payload: {
    message: string,
    action?: string,
    config?: MatSnackBarConfig
  }) {
    this.payload.config = this.payload.config || this.primaryConfig;
  }

}

export class SnackbarOpenSecondary implements Action {
  readonly type = SnackbarActionTypes.SnackbarOpen;

  readonly secondaryConfig: MatSnackBarConfig = {
    duration : 5000,
    panelClass: ['secondary-snackbar']
  };

  constructor(public payload: {
    message: string,
    action?: string,
    config?: MatSnackBarConfig
  }) {
    this.payload.config = this.payload.config || this.secondaryConfig;
  }

}

export class SnackbarClose implements Action {
  readonly type = SnackbarActionTypes.SnackbarClose;
}

export type SnackbarActions = SnackbarOpenPrimary | SnackbarOpenSecondary | SnackbarClose;
