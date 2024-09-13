import { Company } from "../modules/market/models/company";
import { Market } from "../modules/market/models/market";

export interface AppState {
    companies: Company[];
    markets: Market[];
  }