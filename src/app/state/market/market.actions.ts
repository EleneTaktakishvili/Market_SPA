import { createAction, props } from '@ngrx/store';
import { Company } from 'src/app/modules/market/models/company';
import { Market } from 'src/app/modules/market/models/market';

export const loadMarkets = createAction('[Market] Load Markets');

export const loadMarketsSuccess = createAction(
  '[Market] Load Markets Success',
  props<{ markets: Market[] }>()
);
export const loadMarketsFailure = createAction(
  '[Market] Load Markets Failure',
  props<{ error: any }>()
);

export const loadComapnies = createAction('[Company] Load Companys');

export const loadCompaniesSuccess = createAction(
  '[Company] Load Companies Success',
  props<{ companies: Company[] }>()
);
export const loadCompaniesFailure = createAction(
  '[Company] Load Companies Failure',
  props<{ error: any }>()
);

export const updatePrice = createAction(
  '[Market] Update Price',
  props<{ marketId: string; companyId: string; price: number }>()
);

export const updatePricesSuccess = createAction(
  '[Market] Update Prices Success',
  props<{ markets: Market[] }>()
);

export const updatePricesFailure = createAction(
  '[Market] Update Prices Failure',
  props<{ error: any }>()
);
