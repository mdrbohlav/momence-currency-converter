import { useEffect, useState } from 'react';

import { useExchangeRates } from '../../hooks/useExchangeRates';
import { IChangeValue } from '../../interfaces/features/converter/changeValue';
import { IForeignCurrency } from '../../interfaces/features/converter/foreignCurrency';
import Box from '../../ui/Box';
import Button from '../../ui/Button';
import ButtonIcon from '../../ui/ButtonIcon';
import RemoveIcon from '../../ui/RemoveIcon';
import Separator from '../../ui/Separator';
import Spacer from '../../ui/Spacer';
import Spinner from '../../ui/Spinner';
import { roundAmount } from '../../utils/helpers';
import ForeignCurrency from './ForeignCurrency';
import LoadingError from './LoadingError';
import MainCurrency from './MainCurrency';
import ReloadStale from './ReloadStale';

const DEFAULT_FOREIGN_CURRENCIES = ['EUR', 'USD'];

function Converter() {
  const { data: { exchangeRates } = { exchangeRates: [] }, isLoading, isError, isStale } = useExchangeRates();
  const [foreignCurrencies, setForeignCurrencies] = useState<IForeignCurrency[]>([]);
  const [mainAmount, setMainAmout] = useState<number | null>(0);

  const unusedCurrencies = exchangeRates
    .map((rate) => rate.code)
    .filter((currency) => !foreignCurrencies.find((fc) => fc.currency === currency));

  function handleAddForeignCurrency() {
    setForeignCurrencies((state) => [...state, { id: Math.random(), currency: unusedCurrencies[0] }]);
  }

  function handleChangeMainAmount({ amount }: IChangeValue) {
    setMainAmout(amount);
  }

  function handleChangeForeignAmountManually({ amount, currency }: IChangeValue) {
    if (amount === null) {
      setMainAmout(null);
      return;
    }

    const exchangeRate = exchangeRates.find((rate) => rate.code === currency);

    if (!exchangeRate) {
      return;
    }

    const newMainAmount = roundAmount((amount * exchangeRate.rate) / exchangeRate.amount);

    setMainAmout(newMainAmount);
  }

  function handleChangeForeignCurrency(id: number, { currency }: IChangeValue) {
    setForeignCurrencies((state) =>
      state.map((fc) => {
        if (fc.id !== id) {
          return fc;
        }

        return { ...fc, currency };
      }),
    );
  }

  function handleRemoveForeignCurrency(foreignCurrencyId: number) {
    setForeignCurrencies((state) => state.filter((fc) => fc.id !== foreignCurrencyId));
  }

  useEffect(() => {
    if (foreignCurrencies.length) return;

    const newForeignCurrencies = [];

    for (const currency of DEFAULT_FOREIGN_CURRENCIES) {
      if (!unusedCurrencies.includes(currency)) continue;

      newForeignCurrencies.push({ id: Math.random(), currency });
    }

    if (!newForeignCurrencies.length) return;

    setForeignCurrencies(newForeignCurrencies);
  }, [exchangeRates, foreignCurrencies, unusedCurrencies]);

  if (isLoading) return <Spinner />;

  if (isError) return <LoadingError />;

  return (
    <Spacer $size="lg">
      {isStale && <ReloadStale />}

      <Box>
        <MainCurrency amount={mainAmount} onChange={handleChangeMainAmount} />
      </Box>

      <Separator />

      <Box>
        <Spacer $size="lg">
          <Spacer>
            {foreignCurrencies.map(({ id, currency }) => (
              <ForeignCurrency
                key={id}
                defaultCurrency={currency}
                unusedCurrencies={unusedCurrencies}
                mainAmount={mainAmount}
                onCurrencyChange={(data: IChangeValue) => handleChangeForeignCurrency(id, data)}
                onManualChange={handleChangeForeignAmountManually}
              >
                {foreignCurrencies.length > 1 && (
                  <ButtonIcon onClick={() => handleRemoveForeignCurrency(id)}>
                    <RemoveIcon />
                  </ButtonIcon>
                )}
              </ForeignCurrency>
            ))}
          </Spacer>

          {unusedCurrencies.length > 0 && (
            <Button $block onClick={handleAddForeignCurrency}>
              Add currency
            </Button>
          )}
        </Spacer>
      </Box>
    </Spacer>
  );
}

export default Converter;
