import React from 'react';
import css from './PartOfSpeech.module.css';
import { useSelector } from 'react-redux';
import { getWord } from 'redux/selectors';
import MeaningList from 'components/MeaningList/MeaningList';
import SynonymList from 'components/SynonymList/SynonymList';

function PartOfSpeech() {
  const word = useSelector(getWord);
  const meanings = word[0].meanings;

  return meanings.map((meaning, index) => {
    return (
      <>
        <div className={css.container} key={index}>
          <h3 className={css.part}> {meaning.partOfSpeech}</h3>
          <div className={css.border}></div>
        </div>
        <MeaningList index={index} />
        {meanings[index].synonyms.length > 0 && (
          <SynonymList synonym={meanings[index].synonyms} />
        )}
      </>
    );
  });
}

export default PartOfSpeech;
