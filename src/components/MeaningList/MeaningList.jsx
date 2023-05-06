import React from 'react';
import css from './MeaningList.module.css';
import { getWord } from 'redux/selectors';
import { useSelector } from 'react-redux';
import SynonymList from 'components/SynonymList/SynonymList';
function MeaningList({ index }) {
  const word = useSelector(getWord);
  console.log(word);
  return (
    <>
      <h3 className={css.heading}>Meaning</h3>
      <ul>
        {word[0].meanings[index].definitions.map((definition, index) => (
          <li key={index} className={css.item}>
            <p>{definition.definition}</p>
            <p className={css.exampleSentence}>{definition.example}</p>
            {definition.synonyms.length > 0 && (
              <SynonymList synonym={definition.synonyms} />
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default MeaningList;
