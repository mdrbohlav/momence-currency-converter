import { css, styled } from 'styled-components';

export interface ISpacer {
  $size?: 'sm' | 'md' | 'lg';
}

const sizes = {
  sm: css`
    & > * + * {
      margin-top: 0.5rem;
    }
  `,
  md: css`
    & > * + * {
      margin-top: 1rem;
    }
  `,
  lg: css`
    & > * + * {
      margin-top: 2rem;
    }
  `,
};

const Spacer = styled.div<ISpacer>`
  ${(props) => sizes[props.$size || 'md']}

  margin: 0;
`;

export default Spacer;
