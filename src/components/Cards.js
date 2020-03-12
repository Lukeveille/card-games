import React from 'react';
import Card from './Card.js';
import { useState } from 'react';

export default props => {
  const [deck] = useState(props.newDeck),
  [cardInDeck, setCardInDeck] = useState(0),
  shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  shuffle(deck);

  // useEffect(() => {
  //   console.log(cardInDeck);
  // }, [setCardInDeck])
  
  return (
    <Card
      value={deck[cardInDeck]}
      setCardInDeck={setCardInDeck}
      cardInDeck={cardInDeck}
    />
  )
};