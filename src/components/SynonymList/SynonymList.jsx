import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchWord } from './../../redux/operations';
import css from './SynonymList.module.css';

function SynonymList({ synonym }) {
  const dispatch = useDispatch();

  const handleClick = word => {
    dispatch(fetchWord(word));
  };
  return (
    <div className={css.container}>
      <h3 className={css.heading}>Synonyms</h3>
      <ul className={css.listContainer}>
        {synonym.map((word, index) => (
          <li
            className={css.listItem}
            key={index}
            onClick={() => handleClick(word)}
          >
            {index === 0 ? word : ', ' + word}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SynonymList;
