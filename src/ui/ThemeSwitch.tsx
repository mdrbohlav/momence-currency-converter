import { useEffect, useState } from 'react';

import { brandColors, secondaryColors } from '../styles/GlobalStyles';
import ButtonIcon from './ButtonIcon';

function ThemeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(window.matchMedia('(prefers-color-scheme: dark)').matches);

  function handleToggle() {
    setIsDarkMode((state) => !state);
  }

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <ButtonIcon onClick={handleToggle}>
      {isDarkMode ? (
        <svg viewBox="0 0 24 24" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path
            d="M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"
            fill={brandColors[600]}
          />
          <path
            d="M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061"
            stroke={brandColors[600]}
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24">
          <path
            d="M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill={secondaryColors[600]}
          />
        </svg>
      )}
    </ButtonIcon>
  );
}

export default ThemeSwitch;
