import React from 'react';
import { BiBook, BiMoon } from 'react-icons/bi';
import css from './Header.module.css';
function Header() {
  return (
    <div className={css.headerContainer}>
      <BiBook size={40} fill={'#757575'} />
      <input type="checkbox" id="switch-mode" className={css.input} />
      <label for="switch-mode" className={css.label}>
        <BiMoon size={20} className={css.switchIcon} />
      </label>
    </div>
  );
}

export default Header;
