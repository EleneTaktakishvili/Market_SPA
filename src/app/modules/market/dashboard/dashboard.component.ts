import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { Market } from '../models/market';
import { Store } from '@ngrx/store';
import {
  selectcompanies,
  selectMarkets,
} from 'src/app/state/market/market.selectors';
import {
  loadComapnies,
  loadMarkets,
  updatePrice,
} from 'src/app/state/market/market.actions';
import { Company } from '../models/company';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  markets$: Observable<Market[]> | undefined;
  companies$: Observable<Company[]> | undefined;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(loadMarkets());
    this.markets$ = this.store.select(selectMarkets);
    this.store.dispatch(loadComapnies());
    this.companies$ = this.store.select(selectcompanies);
  }

  updatePrice(marketId: string, companyId: string, price: number) {
    this.store.dispatch(updatePrice({ marketId, companyId, price }));
  }
}
