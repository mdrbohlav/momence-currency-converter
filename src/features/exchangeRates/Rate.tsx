import { styled } from 'styled-components';

import { IExchangeRate } from '../../interfaces/features/exchangeRates/exchangeRate';
import { formatCurrency } from '../../utils/helpers';

interface IRateProps {
  rate: IExchangeRate;
}

const StyledRate = styled.li`
  align-items: center;
  display: flex;
`;

const Country = styled.span`
  display: inline-block;
  flex: 1;
  font-weight: 700;
  margin-right: 0.5rem;
`;

const Foreign = styled.span`
  min-width: 5rem;
  text-align: right;
`;

const Main = styled.span`
  display: inline-block;
  width: 6rem;
  text-align: right;
`;

const Rate: React.FC<IRateProps> = ({ rate }) => {
  return (
    <StyledRate>
      <Country>{rate.country}</Country>
      <Foreign>{formatCurrency({ value: rate.amount, currency: rate.code })}</Foreign>

      <Main>{formatCurrency({ value: rate.rate, currency: 'CZK' })}</Main>
    </StyledRate>
  );
};

export default Rate;
