import styled from 'styled-components';

const Error = styled.div`
  background-color: var(--color-red-100);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
  color: var(--color-red-800);
  padding: 1rem;

  @media screen and (min-width: 768px) {
    border-radius: var(--border-radius-xl);
    padding: 2rem;
  }
`;

export default Error;
