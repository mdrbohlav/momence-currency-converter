import { useState } from 'react';
import { styled } from 'styled-components';

import { IChangeValue } from '../../interfaces/features/converter/changeValue';
import { IExchangeRate } from '../../interfaces/features/exchangeRates/exchangeRate';
import Input from '../../ui/Input';
import Row from '../../ui/Row';
import Select from '../../ui/Select';
import { roundAmount } from '../../utils/helpers';

interface IForeignCurrencyProps {
  rates: IExchangeRate[];
  mainAmount: number;
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

const ForeignCurrency: React.FC<IForeignCurrencyProps> = ({ rates = [], mainAmount, onManualChange, children }) => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>(rates[0]?.code || '');
  const selectedRate = rates.find((rate) => rate.code === selectedCurrency);
  const exchangedValue = !selectedRate ? 0 : roundAmount((mainAmount * selectedRate.amount) / selectedRate.rate);

  function handleSelected(event: React.ChangeEvent<HTMLSelectElement>) {
    setSelectedCurrency(event.target.value);
  }

  function handleInput(event: React.ChangeEvent<HTMLInputElement>) {
    const newExchangedAmount = Number(event.target.value);

    onManualChange({ amount: newExchangedAmount, currency: selectedCurrency });
  }

  return (
    <Row>
      <Select onChange={handleSelected} value={selectedCurrency}>
        {rates.map((rate) => (
          <option key={rate.code} value={rate.code}>
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