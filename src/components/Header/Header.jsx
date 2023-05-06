import React from 'react';
import { BiBook, BiMoon } from 'react-icons/bi';
import css from './Header.module.css';
function Header() {
  return (
    <div className={css.headerContainer}>
      <BiBook size={40} fill={'#757575'} />

      <div className={css.wrapper}>
        <div className={css.switchContainer}>
          <div className={css.switch}></div>
          <input
            type="checkbox"
            role="switch"
            aria-checked="false"
            className={css.input}
          />
        </div>
        <BiMoon size={20} fill={'#757575'} />
      </div>
    </div>
  );
}

export default Header;
