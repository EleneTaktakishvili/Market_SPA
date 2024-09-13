import { createReducer, on } from '@ngrx/store';
import { loginSuccess, logout } from './auth.actions';

export interface AuthState {
  token: string | null;
  isAuthenticated: boolean;
}

export const initialState: AuthState = {
  token: null,
  isAuthenticated: false,
};

export const authReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { token }) => ({
    ...state,
    token,
    isAuthenticated: true,
  })),
  on(logout, (state) => ({
    ...state,
    token: null,
    isAuthenticated: false,
  }))
);
