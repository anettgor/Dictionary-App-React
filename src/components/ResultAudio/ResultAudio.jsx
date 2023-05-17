import React from 'react';
import { useSelector } from 'react-redux';
import { IoIosPlayCircle } from 'react-icons/io';
import css from './ResultAudio.module.css';
import { getWord } from 'redux/selectors';

function ResultAudio() {
  const { word, phonetic, phonetics } = useSelector(getWord)[0];
  const audioSrc = phonetics.find(phonetic => phonetic.audio)?.audio || '';
  const audio = new Audio(audioSrc);

  const play = () => {
    audio.play();
  };

  return (
    <div className={css.container}>
      <div>
        <h1 className={css.heading}>{word}</h1>
        <p className={css.pronounciation}>{phonetic}</p>
      </div>
      {audioSrc && (
        <button className={css.button} onClick={play}>
          <IoIosPlayCircle size={60} fill={'#a445eddd'} />
        </button>
      )}
    </div>
  );
}

export default ResultAudio;
