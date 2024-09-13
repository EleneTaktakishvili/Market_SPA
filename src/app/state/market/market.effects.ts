import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, switchMap, tap, timer } from 'rxjs';
import { MarkertService } from 'src/app/modules/market/services/markert.service';
import {
  loadComapnies,
  loadCompaniesFailure,
  loadCompaniesSuccess,
  loadMarkets,
  loadMarketsFailure,
  loadMarketsSuccess,
  updatePricesSuccess,
} from './market.actions';
import { Market } from 'src/app/modules/market/models/market';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private marketService: MarkertService
  ) {}

  loadInitialDataforMarkets$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMarkets),
      mergeMap(() =>
        this.marketService.getAllMarkets().pipe(
          map((markets) => loadMarketsSuccess({ markets })),
          catchError((error) => of(loadMarketsFailure({ error })))
        )
      )
    )
  );

  loadInitialDataForCompanies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadComapnies),
      mergeMap(() =>
        this.marketService.getAllCompanies().pipe(
          map((companies) => loadCompaniesSuccess({ companies })),
          catchError((error) => of(loadCompaniesFailure({ error })))
        )
      )
    )
  );

  // On successful update, load markets list every 5 seconds
  loadMarketsOnUpdateSuccess$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updatePricesSuccess), // Trigger on successful update
      switchMap(() =>
        timer(0, 5000).pipe(
          // Start immediately, then every 5 seconds
          switchMap(() =>
            this.marketService.getAllMarkets().pipe(
              map((markets: Market[]) => loadMarketsSuccess({ markets })),
              catchError((error) => of(loadMarketsFailure({ error })))
            )
          )
        )
      )
    )
  );
}
