import React from 'react';
import { IoIosPlayCircle } from 'react-icons/io';
import css from './ResultAudio.module.css';
import { getWord } from 'redux/selectors';
import { useSelector } from 'react-redux';

function ResultAudio() {
  const word = useSelector(getWord);

  return (
    <div className={css.container}>
      <div>
        <h1 className={css.heading}>{word[0].word}</h1>
        <p className={css.pronounciation}>{word[0].phonetic}</p>
      </div>
      <IoIosPlayCircle size={60} fill={'#a445eddd'} />
      {/* <audio>
        <source
          src="https://api.dictionaryapi.dev/media/pronunciations/en/ethereal-us.mp3"
          type="audio/mp3"
        />
        Your browser does not support the audio element
      </audio> */}
    </div>
  );
}

export default ResultAudio;
