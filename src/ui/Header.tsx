import { styled } from 'styled-components';

import Heading from './Heading';
import ThemeSwitch from './ThemeSwitch';

const StyledHeader = styled.header`
  padding: 1.2rem 0;
  position: relative;
`;

const ThemeSwitchContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;

  display: flex;
  align-items: center;
`;

function Header() {
  return (
    <StyledHeader>
      <Heading as="h1">CZK Converter</Heading>

      <ThemeSwitchContainer>
        <ThemeSwitch />
      </ThemeSwitchContainer>
    </StyledHeader>
  );
}

export default Header;
