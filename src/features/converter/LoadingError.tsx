import { useExchangeRates } from '../../hooks/useExchangeRates';
import { useReload } from '../../hooks/useReload';
import Box from '../../ui/Box';
import Button from '../../ui/Button';
import Spacer from '../../ui/Spacer';

function LoadingError() {
  const { reload } = useReload();
  const { error } = useExchangeRates();

  return (
    <Box $color="red">
      <Spacer $size="md">
        <p>{error?.message || 'Something went wrong.'}</p>
        <Button $color="red" onClick={reload}>
          Reload
        </Button>
      </Spacer>
    </Box>
  );
}

export default LoadingError;
