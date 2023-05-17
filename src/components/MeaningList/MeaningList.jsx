import React from 'react';
import { getWord } from 'redux/selectors';
import { useSelector } from 'react-redux';
import SynonymList from 'components/SynonymList/SynonymList';
import css from './MeaningList.module.css';
function MeaningList({ index }) {
  const word = useSelector(getWord)[0];

  return (
    <>
      <h3 className={css.heading}>Meaning</h3>
      <ul>
        {word.meanings[index].definitions.map(
          ({ definition, synonyms, example }, index) => (
            <li key={index} className={css.item}>
              <p>{definition}</p>
              <p className={css.exampleSentence}>{example}</p>
              {synonyms.length > 0 && <SynonymList synonym={synonyms} />}
            </li>
          )
        )}
      </ul>
    </>
  );
}

export default MeaningList;
