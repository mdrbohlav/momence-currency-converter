import { useQuery } from '@tanstack/react-query';

import { getExchangeRates } from '../services/api';

export function useExchangeRates() {
  return useQuery({
    queryKey: ['exchangeRates'],
    queryFn: getExchangeRates,
  });
}
