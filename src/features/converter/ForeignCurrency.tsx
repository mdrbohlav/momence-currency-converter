import { useState } from 'react';
import { styled } from 'styled-components';

import { useExchangeRates } from '../../hooks/useExchangeRates';
import { IForeignCurrencyProps } from '../../interfaces/features/converter/foreignCurrency';
import Input from '../../ui/Input';
import Row from '../../ui/Row';
import Select from '../../ui/Select';
import { roundAmount } from '../../utils/helpers';

const ChildrenContainer = styled.div`
  position: absolute;
  bottom: 0;
  top: 0;
  right: 0;

  display: flex;
  align-items: center;
`;

const ForeignCurrency: React.FC<IForeignCurrencyProps> = ({
  mainAmount,
  defaultCurrency,
  unusedCurrencies,
  onCurrencyChange,
  onManualChange,
  children,
}) => {
  const { data: { exchangeRates } = { exchangeRates: [] } } = useExchangeRates();
  const [selectedCurrency, setSelectedCurrency] = useState<string>(defaultCurrency);

  const selectedRate = exchangeRates.find((rate) => rate.code === selectedCurrency);
  const exchangedValue =
    selectedRate && mainAmount !== null ? roundAmount((mainAmount * selectedRate.amount) / selectedRate.rate) : null;

  function handleSelectedCurrency(event: React.ChangeEvent<HTMLSelectElement>) {
    const newCurrency = event.target.value;

    setSelectedCurrency(newCurrency);
    onCurrencyChange({ amount: exchangedValue, currency: newCurrency });
  }

  function handleChangeAmount(event: React.ChangeEvent<HTMLInputElement>) {
    const newExchangedAmount = event.target.value === '' ? null : Number(event.target.value);

    onManualChange({ amount: newExchangedAmount, currency: selectedCurrency });
  }

  return (
    <Row>
      <Select onChange={handleSelectedCurrency} value={selectedCurrency}>
        {exchangeRates.map((rate) => (
          <option
            key={rate.code}
            value={rate.code}
            disabled={rate.code !== selectedCurrency && !unusedCurrencies.includes(rate.code)}
          >
            {rate.code} - {rate.country}
          </option>
        ))}
      </Select>

      <Input
        type="number"
        $variant={children ? 'foreign' : 'default'}
        min="0"
        value={exchangedValue ?? ''}
        onChange={handleChangeAmount}
      />

      {children && <ChildrenContainer>{children}</ChildrenContainer>}
    </Row>
  );
};

export default ForeignCurrency;
