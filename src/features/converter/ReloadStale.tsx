import { useQueryClient } from '@tanstack/react-query';

import Box from '../../ui/Box';
import Button from '../../ui/Button';
import Spacer from '../../ui/Spacer';

function ReloadStale() {
  const queryClient = useQueryClient();

  function reloadData() {
    queryClient.invalidateQueries({
      queryKey: ['exchangeRates'],
    });
  }

  return (
    <Box $color="secondary">
      <Spacer $size="md">
        <p>You might have old data fetched.</p>

        <Button onClick={reloadData}>Refresh data</Button>
      </Spacer>
    </Box>
  );
}

export default ReloadStale;
