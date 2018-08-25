import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { environment } from '../../environments/environment';
import { AppState } from './app.interfaces';
import * as fromSnackbar from './shared/snackbar/snackbar.reducer';
import * as fromAuth from './auth/auth.reducer';

export const appReducer: ActionReducerMap<AppState> = {
  router: routerReducer,
  snackbar: fromSnackbar.reducer,
  user: fromAuth.reducer
};

export const appMetaReducers: MetaReducer<AppState>[] = !environment.production
  ? [storeFreeze]
  : [];
