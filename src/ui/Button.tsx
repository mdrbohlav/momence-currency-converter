import { css, styled } from 'styled-components';

export interface IButton {
  $block?: boolean;
}

const Button = styled.button<IButton>`
  border: none;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);

  font-size: 1rem;
  padding: 1rem 1.6rem;
  font-weight: 500;

  color: var(--color-brand-50);
  background-color: var(--color-brand-600);

  &:hover {
    background-color: var(--color-brand-700);
  }

  ${(props) =>
    props.$block &&
    css`
      display: block;
      width: 100%;
    `}
`;

export default Button;
