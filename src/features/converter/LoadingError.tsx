import { useQueryClient } from '@tanstack/react-query';

import { useExchangeRates } from '../../hooks/useExchangeRates';
import Box from '../../ui/Box';
import Button from '../../ui/Button';
import Spacer from '../../ui/Spacer';

function LoadingError() {
  const queryClient = useQueryClient();
  const { error } = useExchangeRates();

  function reloadData() {
    queryClient.invalidateQueries({
      queryKey: ['exchangeRates'],
    });
  }

  return (
    <Box $color="red">
      <Spacer $size="md">
        <p>{error?.message || 'Something went wrong.'}</p>
        <Button $color="red" onClick={reloadData}>
          Reload
        </Button>
      </Spacer>
    </Box>
  );
}

export default LoadingError;
