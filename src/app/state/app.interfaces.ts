import { RouterReducerState } from '@ngrx/router-store';
import { RouterStateUrl } from './shared/utils';
import * as fromSnackbar from './shared/snackbar/snackbar.reducer';
import { State as userState } from '../state/auth/auth.reducer';

export interface AppState {
  router: RouterReducerState<RouterStateUrl>;
  snackbar: fromSnackbar.State;
  user: userState;
}

export type State = AppState;
