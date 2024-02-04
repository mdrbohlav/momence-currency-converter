import { useReload } from '../../hooks/useReload';
import Box from '../../ui/Box';
import Button from '../../ui/Button';
import Spacer from '../../ui/Spacer';

function ReloadStale() {
  const { reload } = useReload();

  return (
    <Box $color="secondary">
      <Spacer $size="md">
        <p>You might have old data fetched.</p>

        <Button onClick={reload}>Refresh data</Button>
      </Spacer>
    </Box>
  );
}

export default ReloadStale;
