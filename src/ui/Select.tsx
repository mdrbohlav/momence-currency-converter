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
  height: 2.75rem;
  width: 5.25rem;
  text-align: center;

  &:focus {
    border-bottom-color: var(--color-brand-600);
    outline: none;
  }
`;

export default Select;
