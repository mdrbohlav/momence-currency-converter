import { useEffect, useState } from 'react';

import ButtonIcon from './ButtonIcon';
import MoonIcon from './MoonIcon';
import SunIcon from './SunIcon';

function ThemeSwitch() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(window.matchMedia('(prefers-color-scheme: dark)').matches);

  function handleToggle() {
    setIsDarkMode((state) => !state);
  }

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return <ButtonIcon onClick={handleToggle}>{isDarkMode ? <SunIcon /> : <MoonIcon />}</ButtonIcon>;
}

export default ThemeSwitch;
