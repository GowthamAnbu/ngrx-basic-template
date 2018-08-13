import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './shared/utils';
import * as fromSnackbar from './shared/snackbar/snackbar.reducer';

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  snackbar: fromSnackbar.State;
}

export type State = AppState;
