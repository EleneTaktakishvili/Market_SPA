import { createReducer, on } from '@ngrx/store';
import { AppState } from '../app.state';
import {
  loadComapnies,
  loadCompaniesFailure,
  loadCompaniesSuccess,
  loadMarkets,
  loadMarketsFailure,
  loadMarketsSuccess,
  updatePrice,
  updatePricesSuccess,
} from './market.actions';

const initialState: AppState = {
  companies: [],
  markets: [],
};

export const appReducer = createReducer(
  initialState,
  on(loadMarkets, (state) => ({ ...state, loading: true })),
  on(loadMarketsSuccess, (state, { markets }) => ({
    ...state,
    markets,
    loading: false,
    error: null,
  })),
  on(loadMarketsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(loadComapnies, (state) => ({ ...state, loading: true })),
  on(loadCompaniesSuccess, (state, { companies }) => ({
    ...state,
    companies,
    loading: false,
    error: null,
  })),
  on(loadCompaniesFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(updatePrice, (state, { marketId, companyId, price }) => {
    const updatedMarkets = state.markets.map((market) => {
      if (market.id === marketId) {
        return {
          ...market,
          prices: { ...market.prices, [companyId]: price },
        };
      }
      return market;
    });
    return {
      ...state,
      markets: updatedMarkets,
    };
  }),
  on(updatePricesSuccess, (state, { markets }) => ({
    ...state,
    markets,
  }))
);
