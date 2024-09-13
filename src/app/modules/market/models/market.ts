export interface Market {
    id: string;
    name: string;
    prices: { [companyId: string]: number };
}
