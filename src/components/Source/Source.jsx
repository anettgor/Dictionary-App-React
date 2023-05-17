import React from 'react';
import { useSelector } from 'react-redux';
import { MdOpenInNew } from 'react-icons/md';
import css from './Source.module.css';
import { getWord } from './../../redux/selectors';
function Source() {
  const word = useSelector(getWord);
  const sourceUrl = word[0].sourceUrls[0];

  return (
    <p className={css.text}>
      Source{' '}
      <a href={sourceUrl} className={css.link} target="_blank" rel="noreferrer">
        {sourceUrl}
        <MdOpenInNew />
      </a>
    </p>
  );
}

export default Source;
