import { css, styled } from 'styled-components';

export interface IBox {
  $color?: 'default' | 'primary' | 'secondary' | 'red';
}

const colors = {
  default: css`
    background-color: var(--color-grey-0-alpha);
  `,
  primary: css`
    color: var(--color-brand-800);
    background-color: var(--color-brand-100);
  `,
  secondary: css`
    color: var(--color-secondary-100);
    background-color: var(--color-secondary-600);
  `,
  red: css`
    color: var(--color-red-800);
    background-color: var(--color-red-100);
  `,
};

const Box = styled.div<IBox>`
  background-color: var(--color-grey-0-alpha);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-sm);
  padding: 1rem;

  @media screen and (min-width: 768px) {
    border-radius: var(--border-radius-xl);
    padding: 2rem;
  }

  ${(props) => colors[props.$color || 'default']}
`;

export default Box;
