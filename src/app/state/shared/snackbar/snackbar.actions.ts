import { MatSnackBarConfig } from '@angular/material';
import { Action } from '@ngrx/store';

export enum SnackbarActionTypes {
  SnackbarOpen = '[Snackbar] Open',
  SnackbarClose = '[Snackbar] Close',
}

export class SnackbarOpen implements Action {
  readonly type = SnackbarActionTypes.SnackbarOpen;

  readonly matsnackbarconfig: MatSnackBarConfig = {
    duration : 5000,
    panelClass: ['primary-snackbar']
  };

  constructor(public payload: {
    message: string,
    action?: string,
    config?: MatSnackBarConfig
  }) {
    this.payload.config = this.payload.config || this.matsnackbarconfig;
  }

}

export class SnackbarClose implements Action {
  readonly type = SnackbarActionTypes.SnackbarClose;
}

export type SnackbarActions = SnackbarOpen | SnackbarClose;
