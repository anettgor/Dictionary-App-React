import React from 'react';
import css from './Search.module.css';
import { HiMagnifyingGlass } from 'react-icons/hi2';
function Search() {
  return (
    <form className={css.container}>
      <input
        className={css.input}
        type="text"
        placeholder="Search for any word..."
      />
      <button className={css.submit} type="submit">
        <HiMagnifyingGlass size={20} fill={'#a445ed'} />
      </button>
    </form>
  );
}

export default Search;
