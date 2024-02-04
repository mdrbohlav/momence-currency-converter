import { useState } from 'react';
import { styled } from 'styled-components';

import { useExchangeRates } from '../../hooks/useExchangeRates';
import { IChangeValue } from '../../interfaces/features/converter/changeValue';
import Input from '../../ui/Input';
import Row from '../../ui/Row';
import Select from '../../ui/Select';
import { roundAmount } from '../../utils/helpers';

interface IForeignCurrencyProps {
  mainAmount: number;
  defaultCurrency: string;
  unusedCurrencies: string[];
  onCurrencyChange: (data: IChangeValue) => void;
  onManualChange: (data: IChangeValue) => void;
  children?: React.ReactNode;
}

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
  const exchangedValue = !selectedRate ? 0 : roundAmount((mainAmount * selectedRate.amount) / selectedRate.rate);

  function handleSelected(event: React.ChangeEvent<HTMLSelectElement>) {
    const newCurrency = event.target.value;

    setSelectedCurrency(newCurrency);
    onCurrencyChange({ amount: exchangedValue, currency: newCurrency });
  }

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const newExchangedAmount = Number(event.target.value);

    onManualChange({ amount: newExchangedAmount, currency: selectedCurrency });
  }

  return (
    <Row>
      <Select onChange={handleSelected} value={selectedCurrency}>
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
        step="0.01"
        value={exchangedValue}
        onChange={handleInput}
      />

      {children && <ChildrenContainer>{children}</ChildrenContainer>}
    </Row>
  );
};

export default ForeignCurrency;
