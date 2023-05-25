import React from 'react';

import css from './NotFound.module.css';
function NotFound() {
  return (
    <>
      <h2>No Definitions Found</h2>
      <p className={css.text}>
        Oops! It seems that the word you are looking for cannot be found. Try
        again later or search for a different term.
      </p>
    </>
  );
}

export default NotFound;
