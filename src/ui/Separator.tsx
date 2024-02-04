import { styled } from 'styled-components';

import ConvertIcon from './ConvertIcon';

const StyledSeparator = styled.div`
  position: relative;
`;

const IconContainer = styled.div`
  position: absolute;
  bottom: 0;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;

  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-25%);

  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-50);
  border-radius: var(--border-radius-full);
  color: var(--color-secondary-600);
  height: 3.5rem;
  width: 3.5rem;
  box-shadow: var(--shadow-md);

  @media screen and (min-width: 768px) {
    height: 4rem;
    width: 4rem;
  }
`;

function Separator() {
  return (
    <StyledSeparator>
      <IconContainer>
        <ConvertIcon />
      </IconContainer>
    </StyledSeparator>
  );
}

export default Separator;
