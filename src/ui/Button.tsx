import { css, styled } from 'styled-components';

export interface IButton {
  $block?: boolean;
  $color?: 'primary' | 'secondary' | 'red';
}

const colors = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  secondary: css`
    color: var(--color-secondary-50);
    background-color: var(--color-secondary-600);

    &:hover {
      background-color: var(--color-secondary-700);
    }
  `,
  red: css`
    color: var(--color-red-100);
    background-color: var(--color-red-800);

    &:hover {
      background-color: var(--color-red-700);
    }
  `,
};

const Button = styled.button<IButton>`
  border: none;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);

  cursor: pointer;
  font-size: 1rem;
  padding: 1rem 1.6rem;
  font-weight: 500;

  ${(props) =>
    props.$block &&
    css`
      display: block;
      width: 100%;
    `}

  ${(props) => colors[props.$color || 'primary']}
`;

export default Button;
