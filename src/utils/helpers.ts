import { IAPIResponse } from '../services/api';

export const formatCurrency = ({
  value,
  currency,
  locale = 'en',
}: {
  value: number;
  currency: string;
  locale?: string;
}): string => new Intl.NumberFormat(locale, { style: 'currency', currency }).format(value);

export const roundAmount = (amount: number): number => {
  return Math.round(amount * 100_000) / 100_000;
};

export const parseFetchedData = (data: string): IAPIResponse => {
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
};

export const mockedFechedData = (): IAPIResponse => {
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
    {
      code: 'PHP',
      country: 'Philippines',
      amount: 100,
      rate: 41,
    },
  ];
  const date = '02 Fev 2024';

  return { exchangeRates, date };
};
