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
