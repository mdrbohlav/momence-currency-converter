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
      margin-top: 1.25rem;
    }
  `,
  lg: css`
    & > * + * {
      margin-top: 2rem;
    }
  `,
};

const Spacer = styled.div<ISpacer>`
  margin-bottom: 0;
  margin-left: 0;
  margin-right: 0;

  ${(props) => sizes[props.$size || 'md']}
`;

export default Spacer;
