import { styled } from 'styled-components';

import Converter from '../features/converter/Converter';
import ExchangeRates from '../features/exchangeRates/ExchangeRates';
import Header from './Header';

const StyledAppLayout = styled.div`
  margin: 0 auto;
  padding: 1rem 0.5rem;
  max-width: 1024px;

  @media screen and (min-width: 640px) {
    padding: 1rem;
  }
`;

const Main = styled.main`
  @media screen and (min-width: 640px) {
    flex: 1;
  }
`;

const Sidebar = styled.aside`
  @media screen and (min-width: 640px) {
    width: 40%;
    max-width: 23rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media screen and (min-width: 640px) {
    flex-direction: row;
  }
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />

      <Container>
        <Main>
          <Converter />
        </Main>

        <Sidebar>
          <ExchangeRates />
        </Sidebar>
      </Container>
    </StyledAppLayout>
  );
}

export default AppLayout;
