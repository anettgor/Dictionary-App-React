import React from 'react';
import css from './SynonymList.module.css';
import { useDispatch } from 'react-redux';
import { fetchWord } from './../../redux/operations';

function SynonymList({ synonym }) {
  const dispatch = useDispatch();

  const handleClick = word => {
    dispatch(fetchWord(word));
  };
  return (
    <div className={css.listContainer}>
      <h3 className={css.heading}>Synonyms</h3>
      <div>
        {synonym.map((word, index) => (
          <span
            className={css.listItem}
            key={index}
            onClick={() => handleClick(word)}
          >
            {index === 0 ? word : `, ${word}`}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SynonymList;
