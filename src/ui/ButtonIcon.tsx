import { styled } from 'styled-components';

const ButtonIcon = styled.button`
  background: none;
  border: none;
  line-height: 0;

  border-radius: var(--border-radius-full);
  color: var(--color-grey-400);
  cursor: pointer;
  height: 2.5rem;
  width: 2.5rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: var(--color-grey-300);
    color: var(--color-brand-600);
  }

  & svg {
    height: 2.2rem;
    width: 2.2rem;
  }

  & span {
    font-size: 2rem;
    font-weight: 100;
  }
`;

export default ButtonIcon;
