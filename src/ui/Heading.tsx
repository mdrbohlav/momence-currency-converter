import { css, styled } from 'styled-components';

const Heading = styled.h1`
  ${(props) =>
    props.as === 'h1' &&
    css`
      font-weight: 600;
      font-size: 2rem;

      @media screen and (min-width: 768px) {
        font-size: 2.5rem;
      }

      @media screen and (min-width: 1024px) {
        font-size: 3rem;
      }
    `}

  ${(props) =>
    props.as === 'h2' &&
    css`
      font-size: 1.25rem;
      font-weight: 600;

      @media screen and (min-width: 768px) {
        font-size: 1.5rem;
      }
    `}

  line-height: 1.4;
  margin: 0;
`;

export default Heading;
