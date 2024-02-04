import { useQueryClient } from '@tanstack/react-query';

export function useReload() {
  const queryClient = useQueryClient();

  function reload() {
    queryClient.invalidateQueries({
      queryKey: ['exchangeRates'],
    });
  }

  return { reload };
}
