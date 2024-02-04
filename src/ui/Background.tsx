import { styled } from 'styled-components';

import { brandColors, secondaryColors } from '../styles/GlobalStyles';

const StyledBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: hidden;
  z-index: -1;
`;

const Svg = styled.svg.attrs({ viewBox: '0 0 1155 678', fill: 'none' })`
  position: relative;
  top: 0;
  left: 50%;

  height: 42.375rem;
  transform: translateX(-50%);
  max-width: none;

  filter: blur(4rem);

  @media screen and (min-width: 1280px) {
    top: -1.25rem;
  }
`;

function Background() {
  return (
    <StyledBackground>
      <Svg>
        <path
          fill="url(#section_bg_gradient)"
          fillOpacity=".3"
          d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
        />
        <defs>
          <linearGradient
            id="section_bg_gradient"
            x1="1155.49"
            x2="-78.208"
            y1=".177"
            y2="474.645"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={brandColors[500]} />
            <stop offset="1" stopColor={secondaryColors[500]} />
          </linearGradient>
        </defs>
      </Svg>
    </StyledBackground>
  );
}

export default Background;
