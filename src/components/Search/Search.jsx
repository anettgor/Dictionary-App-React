import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { fetchWord } from './../../redux/operations';
import { setStatusSearch } from './../../redux/searchSlice';

import css from './Search.module.css';
function Search() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const trimmedValue = value.trim();

  const handleSubmit = e => {
    e.preventDefault();
    if (!value || trimmedValue === '') {
      alert('Please enter a value');
    } else {
      dispatch(fetchWord(trimmedValue));
      dispatch(setStatusSearch(trimmedValue));
      e.currentTarget.reset();
      setValue('');
    }
  };

  return (
    <form className={css.container} onSubmit={handleSubmit}>
      <input
        className={css.input}
        type="text"
        placeholder="Search for any word..."
        onChange={e => setValue(e.target.value)}
      />
      <button className={css.submit} type="submit">
        <HiMagnifyingGlass size={20} fill={'#a445ed'} />
      </button>
    </form>
  );
}

export default Search;
