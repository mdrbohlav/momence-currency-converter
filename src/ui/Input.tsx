import { css, styled } from 'styled-components';

export interface IInput {
  $variant?: 'default' | 'main' | 'foreign';
}

const variants = {
  default: css`
    padding: 0 0.5rem;

    @media screen and (min-width: 768px) {
      padding: 0 1rem;
    }
  `,
  main: css`
    padding: 0 0.5rem 0 5.75rem;

    @media screen and (min-width: 768px) {
      padding: 0 1rem 0 6.25rem;
    }
  `,
  foreign: css`
    padding: 0 3rem 0 0.5rem;

    @media screen and (min-width: 768px) {
      padding: 0 3.5rem 0 1rem;
    }
  `,
};

const Input = styled.input<IInput>`
  border: none;
  box-sizing: border-box;
  border-bottom: 1px solid var(--color-grey-300);
  background-color: transparent;
  border-radius: 0;
  color: var(--color-grey-700);
  font-size: 0.875rem;
  height: 2.75rem;
  flex: 1;
  min-width: 1px;

  &:focus {
    border-bottom-color: var(--color-brand-600);
    outline: none;
  }

  ${(props) => variants[props.$variant || 'default']}
`;

export default Input;
