import { SnackbarActions, SnackbarActionTypes } from './snackbar.actions';

export interface State {
  show: boolean;
}

const initialState: State = {
  show: false
};

export function reducer(state: State = initialState, action: SnackbarActions) {
  switch (action.type) {
    case SnackbarActionTypes.SnackbarClose:
      return { ...state, show: false };
    case SnackbarActionTypes.SnackbarOpen:
      return { ...state, show: true };
    default:
      return state;
  }
}
