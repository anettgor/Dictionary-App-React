import ResultAudio from 'components/ResultAudio/ResultAudio';
import Source from 'components/Source/Source';
import PartOfSpeech from 'components/PartOfSpeech/PartOfSpeech';
import React from 'react';

function Result() {
  return (
    <>
      <ResultAudio />
      <PartOfSpeech />
      <Source />
    </>
  );
}

export default Result;
