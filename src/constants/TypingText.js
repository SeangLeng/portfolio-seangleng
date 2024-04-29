'use client';

import React, { useState, useEffect } from 'react';

export const TypingText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayText(text.substring(0, index));
      setIndex(prevIndex => prevIndex + 1);
    }, 10);

    return () => clearInterval(intervalId);
  }, [text, index]);

  return <p id='intro' className='md:text-lg text-base w-full'>{displayText}</p>;
};
