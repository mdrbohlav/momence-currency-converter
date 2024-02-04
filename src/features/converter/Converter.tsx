import { useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';

import { useExchangeRates } from '../../hooks/useExchangeRates';
import { IChangeValue } from '../../interfaces/features/converter/changeValue';
import Box from '../../ui/Box';
import Button from '../../ui/Button';
import ButtonIcon from '../../ui/ButtonIcon';
import Error from '../../ui/Error';
import RemoveIcon from '../../ui/RemoveIcon';
import Separator from '../../ui/Separator';
import Spacer from '../../ui/Spacer';
import Spinner from '../../ui/Spinner';
import { roundAmount } from '../../utils/helpers';
import ForeignCurrency from './ForeignCurrency';
import MainCurrency from './MainCurrency';

function Converter() {
  const queryClient = useQueryClient();
  const { data: { exchangeRates } = { exchangeRates: [] }, isLoading, isError, error } = useExchangeRates();
  const [foreignCurrenciesIds, setForeignCurrenciesIds] = useState<number[]>([0]);
  const [mainAmount, setMainAmout] = useState(0);

  function handleAddForeignCurrency() {
    setForeignCurrenciesIds((state) => [...state, Math.random()]);
  }

  function handleChange({ amount }: IChangeValue) {
    setMainAmout(amount);
  }

  function handleManualForeignChange({ amount, currency }: IChangeValue) {
    const exchangeRate = exchangeRates.find((rate) => rate.code === currency);
    const newMainAmount = roundAmount(amount * (exchangeRate?.rate || 1));

    setMainAmout(newMainAmount);
  }

  function handleRemoveForeignCurrency(foreignCurrencyId: number) {
    setForeignCurrenciesIds((ids) => ids.filter((id) => id !== foreignCurrencyId));
  }

  function reloadData() {
    queryClient.invalidateQueries({
      queryKey: ['exchangeRates'],
    });
  }

  if (isLoading) return <Spinner />;

  if (isError)
    return (
      <Error>
        <Spacer $size="md">
          <p>{error?.message || 'Something went wrong.'}</p>
          <Button $variant="red" onClick={reloadData}>
            Reload
          </Button>
        </Spacer>
      </Error>
    );

  return (
    <>
      <Box>
        <MainCurrency amount={mainAmount} onChange={handleChange} />
      </Box>

      <Separator />

      <Box>
        <Spacer $size="lg">
          <Spacer>
            {foreignCurrenciesIds.map((id) => (
              <ForeignCurrency
                key={id}
                rates={exchangeRates}
                mainAmount={mainAmount}
                onManualChange={handleManualForeignChange}
              >
                {foreignCurrenciesIds.length > 1 && (
                  <ButtonIcon onClick={() => handleRemoveForeignCurrency(id)}>
                    <RemoveIcon />
                  </ButtonIcon>
                )}
              </ForeignCurrency>
            ))}
          </Spacer>

          <Button $block onClick={handleAddForeignCurrency}>
            Add another currency
          </Button>
        </Spacer>
      </Box>
    </>
  );
}

export default Converter;
