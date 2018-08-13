import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromAuth from './auth.reducer';

export interface State {
  auth: fromAuth.State;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export const selectAuthState = createFeatureSelector<fromAuth.State>('auth');
export const selectAuthUser = createSelector(
  selectAuthState,
  fromAuth.selectUser,
);
export const selectIsLoggedIn = createSelector(selectAuthUser, user => !!user);
