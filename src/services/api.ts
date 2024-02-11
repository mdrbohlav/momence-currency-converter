import { mockedFechedData, parseFetchedData } from '../utils/helpers';

const API_URL = '/api/fetchData';

export async function getExchangeRates() {
  if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    const { exchangeRates, date } = mockedFechedData();
    return Promise.resolve({ exchangeRates, date });
  }

  const response = await fetch(API_URL);

  if (!response.ok) {
    console.error(response);
    return { exchangeRates: [], date: '' };
  }

  const data = await response.text();
  const { exchangeRates, date } = parseFetchedData(data);

  return { exchangeRates, date };
}
