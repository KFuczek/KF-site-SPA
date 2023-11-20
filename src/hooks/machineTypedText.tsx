import React, { useState, useEffect, useRef } from 'react';

export const useMachineTypedText = (
  words: string[],
  keySpeed = 1000,
  maxPauseAmount = 10,
  startTyping: boolean
) => {
  const [currentWord, setCurrentWord] = useState(['']);
  const [fullText, setFullText] = useState(['']);
  const typingInterval = useRef<NodeJS.Timer>();
  const letterIndex = useRef<number>(0);
  const wordIndex = useRef<number>(0);

  const typeLetter = () => {
    if (words.length <= wordIndex.current) {
      clearInterval(typingInterval.current);
      return;
    }

    if (letterIndex.current >= words[wordIndex.current].length) {
      wordIndex.current = wordIndex.current + 1;
      setCurrentWord(currentWord.concat(' '));
      setFullText(currentWord.concat(' '));
      letterIndex.current = 0;
      return;
    }

    const segment = words[wordIndex.current].split('');
    setCurrentWord(currentWord.concat(segment[letterIndex.current]));
    setFullText(fullText.concat(segment[letterIndex.current]));
    letterIndex.current = letterIndex.current + 1;
  };

  useEffect(() => {
    if (!startTyping || words.length === 0 || !words[0]) {
      return;
    }

    setTimeout(() => {
      typingInterval.current = setInterval(() => {
        typeLetter();
      }, keySpeed);
    }, maxPauseAmount);

    return () => {
      clearInterval(typingInterval.current);
    };
  }, [keySpeed, words, maxPauseAmount, startTyping]);

  return {
    word: <>{fullText.join('')}</>
  };
};
