import React from 'react';
import css from './Search.module.css';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWord } from './../../redux/operations';
function Search() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(fetchWord(value.trim()));
    e.currentTarget.reset();
    setValue('');
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
