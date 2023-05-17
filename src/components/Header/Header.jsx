import React, { useEffect, useState } from 'react';
import { BiBook, BiMoon } from 'react-icons/bi';
import css from './Header.module.css';
function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches;
    setDarkMode(prefersDarkMode);
  }, []);

  const handleModeChange = () => {
    setDarkMode(prevMode => !prevMode);
  };

  useEffect(() => {
    const html = document.querySelector('html');
    const body = document.querySelector('body');

    if (darkMode) {
      html.dataset.colorTheme = 'dark';
      body.classList.add('darkTheme');
    } else {
      html.dataset.colorTheme = 'light';
      body.classList.remove('darkTheme');
    }
  }, [darkMode]);

  return (
    <div className={css.headerContainer}>
      <BiBook size={40} fill={'#757575'} />
      <input
        type="checkbox"
        id="switch-mode"
        className={css.input}
        checked={darkMode}
        onChange={handleModeChange}
      />
      <label htmlFor="switch-mode" className={css.label}>
        <BiMoon size={20} className={css.switchIcon} />
      </label>
    </div>
  );
}

export default Header;
