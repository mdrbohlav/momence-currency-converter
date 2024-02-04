import { IExchangeRate } from '../interfaces/features/exchangeRates/exchangeRate';

const API_URL = '/api/fetchData';

export interface IAPIResponse {
  exchangeRates: IExchangeRate[];
  date: string;
}

export async function getExchangeRates(): Promise<IAPIResponse> {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    const exchangeRates = [
      {
        code: 'USD',
        country: 'USA',
        amount: 1,
        rate: 24,
      },
      {
        code: 'EUR',
        country: 'EMU',
        amount: 1,
        rate: 24,
      },
    ];

    return Promise.resolve({ exchangeRates, date: '02 Feb 2024' });
  }

  const response = await fetch(API_URL);

  if (!response.ok) {
    console.error(response);
    return { exchangeRates: [], date: '' };
  }

  const data = await response.text();
  const lines = data.split(/\r?\n|\r|\n/g);
  const date = lines.shift()?.split('#')?.[0]?.trim() || '';
  const exchangeRates = [];

  lines.shift();

  for (const line of lines) {
    if (!line) continue;

    const parts = line.split('|');
    exchangeRates.push({
      country: parts[0],
      amount: Number(parts[2]),
      code: parts[3],
      rate: Number(parts[4]),
    });
  }

  return { exchangeRates, date };
}
