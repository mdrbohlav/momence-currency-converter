import { styled } from 'styled-components';

import Box from '../../ui/Box';
import Heading from '../../ui/Heading';
import Spacer from '../../ui/Spacer';
import Rate from './Rate';

const exchangeRates = [
  {
    code: 'USD',
    country: 'USA',
    amount: 1,
    rate: 24,
  },
  {
    code: 'EUR',
    country: 'EMU',
    amount: 1,
    rate: 24,
  },
];

const date = '02 Feb 2024';

const From = styled.p`
  font-style: italic;
`;

function ExcahngeRates() {
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
