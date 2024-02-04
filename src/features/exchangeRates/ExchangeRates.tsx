import { styled } from 'styled-components';

import { useExchangeRates } from '../../hooks/useExchangeRates';
import Box from '../../ui/Box';
import Heading from '../../ui/Heading';
import Spacer from '../../ui/Spacer';
import Rate from './Rate';

const From = styled.p`
  font-style: italic;
`;

function ExcahngeRates() {
  const { data: { exchangeRates, date } = { exchangeRates: [], date: '' }, isLoading, isError } = useExchangeRates();

  if (isLoading) return null;

  if (isError) return null;

  return (
    <Box>
      <Spacer>
        <Heading as="h2">Available exchange rates</Heading>

        <From>From {date}</From>

        <Spacer as="ul" $size="sm">
          {exchangeRates.map((rate) => (
            <Rate key={rate.code} rate={rate} />
          ))}
        </Spacer>
      </Spacer>
    </Box>
  );
}

export default ExcahngeRates;
