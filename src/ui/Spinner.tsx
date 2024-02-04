import { keyframes, styled } from 'styled-components';

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const Spinner = styled.div`
  aspect-ratio: 1;
  border-radius: var(--border-radius-full);
  width: 6rem;
  margin: 4rem auto;

  animation: ${rotate} 1.5s infinite linear;
  background:
    radial-gradient(farthest-side, var(--color-brand-600) 94%, #0000) top/0.625rem 0.625rem no-repeat,
    conic-gradient(#0000 30%, var(--color-brand-600));
  -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 0.625rem), #000 0);
  mask: radial-gradient(farthest-side, #0000 calc(100% - 0.625rem), #000 0);
`;

export default Spinner;
