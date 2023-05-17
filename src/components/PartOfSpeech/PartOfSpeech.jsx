import React from 'react';
import { useSelector } from 'react-redux';
import { getWord } from 'redux/selectors';
import MeaningList from 'components/MeaningList/MeaningList';
import SynonymList from 'components/SynonymList/SynonymList';
import css from './PartOfSpeech.module.css';

function PartOfSpeech() {
  const wordArr = useSelector(getWord);
  const meanings = wordArr[0].meanings;

  return meanings.map(({ partOfSpeech }, index) => {
    return (
      <>
        <div className={css.container} key={index}>
          <h3 className={css.part}> {partOfSpeech}</h3>
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
