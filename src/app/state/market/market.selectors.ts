import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';

export const selectAppState = (state: any) => state.app;

export const selectMarkets = createSelector(
  selectAppState,
  (state: AppState) => state.markets
);

export const selectcompanies = createSelector(
  selectAppState,
  (state: AppState) => state.companies
);

export const selectCompanies = createSelector(
  selectAppState,
  (state: AppState) => state.companies
);
