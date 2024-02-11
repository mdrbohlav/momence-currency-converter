import { IExchangeRate } from '../features/exchangeRates/exchangeRate';

export interface IAPIResponse {
  exchangeRates: IExchangeRate[];
  date: string;
}
