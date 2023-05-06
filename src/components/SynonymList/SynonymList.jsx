import React from 'react';
import css from './SynonymList.module.css';

function SynonymList({ synonym }) {
  const fetchWord = word => {
    console.log(word);
  };
  return (
    <div className={css.listContainer}>
      <h3 className={css.heading}>Synonyms</h3>

      {synonym.map((word, index) => {
        if (index === 0) {
          return (
            <span
              className={css.listItem}
              key={index}
              onClick={() => fetchWord(word)}
            >
              {word}
            </span>
          );
        } else {
          return (
            <span
              className={css.listItem}
              key={index}
              onClick={() => fetchWord(word)}
            >
              {', ' + word}
            </span>
          );
        }
      })}
    </div>
  );
}

export default SynonymList;
