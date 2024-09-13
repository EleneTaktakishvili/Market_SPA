import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Market } from '../models/market';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root',
})
export class MarkertService {
  private authUrl = 'https://your-api-url.com/auth'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getAllMarkets(): Observable<any> {
    return this.http.get<Market[]>(`${this.authUrl}/markets`).pipe();
  }
  getAllCompanies(): Observable<any> {
    return this.http.get<Company[]>(`${this.authUrl}/companies`).pipe();
  }
  updateMarket(market: Market): Observable<any> {
    return this.http.post<Market>(`${this.authUrl}/update-market`, market).pipe();
  }
}
