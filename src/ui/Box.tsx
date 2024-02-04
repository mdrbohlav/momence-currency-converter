import { styled } from 'styled-components';

const Box = styled.div`
  background-color: var(--color-grey-0-alpha);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
  padding: 1rem;

  @media screen and (min-width: 768px) {
    border-radius: var(--border-radius-xl);
    padding: 2rem;
  }
`;

export default Box;
