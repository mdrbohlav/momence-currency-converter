import { styled } from 'styled-components';

const Select = styled.select`
  border: none;
  box-sizing: border-box;
  border-bottom: 1px solid var(--color-grey-300);
  background-color: transparent;
  border-radius: 0;
  color: var(--color-grey-700);
  font-size: 0.875rem;
  padding: 0 1rem;
  height: 3rem;
  width: 5.25rem;
  text-align: center;

  @media screen and (min-width: 768px) {
    height: 3.5rem;
  }

  @media screen and (min-width: 1024px) {
    height: 4rem;
  }

  &:focus {
    border-bottom-color: var(--color-brand-600);
    outline: none;
  }
`;

export default Select;
