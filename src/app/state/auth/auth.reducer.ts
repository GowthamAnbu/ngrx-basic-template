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
      return initialState;
    default:
      return state;
  }
}

export const selectUser = (state: State) => {
  console.log(state);
  return state.user;
};
