import React from 'react';
import { useSelector } from 'react-redux';
import { getWordSearch } from './../../redux/selectors';

import css from './NotFound.module.css';
function NotFound() {
  const searchWord = useSelector(getWordSearch);
  return (
    <>
      <h2 className={css.heading}>
        No Definitions Found for <span className={css.word}>{searchWord}</span>
      </h2>
      <p className={css.text}>
        Oops! It seems that the word you are looking for cannot be found. Try
        again later or search for a different term.
      </p>
    </>
  );
}

export default NotFound;
