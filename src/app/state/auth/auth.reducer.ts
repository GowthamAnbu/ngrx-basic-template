import { Action } from '@ngrx/store';
import { AuthActions, AuthActionTypes } from '../auth/auth.actions';
import { User } from '../user/user.model';

export interface State {
  user: User | null;
}

export const initialState: State = {
  user: null,
};

export function reducer(state = initialState, action: AuthActions): State {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess:
      return { ...state, user: action.payload.user };
    case AuthActionTypes.LoginFailure:
      return { ...state, user: null };
    case AuthActionTypes.Login:
      return { ...state, user: null };
    default:
      return state;
  }
}

export const selectUser = (state: State) => state.user;
