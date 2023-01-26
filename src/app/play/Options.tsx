'use client';
import React from 'react';

type guess = 'win' | 'lose' | 'none';

const randomNumber = (price: number) => (Math.random() * price + 1).toFixed(2);

function Options({ price }: { price: number }) {
  const [guessCorrect, setGuessCorrect] = React.useState<guess>(`none`);
  return (
    <div>
      <div>{guessCorrect !== `none` && guessCorrect}</div>
      <button onClick={() => setGuessCorrect(`lose`)}>
        {randomNumber(price)}
      </button>
      <button onClick={() => setGuessCorrect(`lose`)}>
        {randomNumber(price)}
      </button>
      <button onClick={() => setGuessCorrect(`lose`)}>
        {randomNumber(price)}
      </button>
      <button onClick={() => setGuessCorrect(`win`)}>{price}</button>
    </div>
  );
}

export default Options;
