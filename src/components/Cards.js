import React from 'react';
import Card from './Card.js';
import { useState } from 'react';

export default props => {
  const [deck] = useState(props.newDeck);
  // shuffle = a => {
  //   for (let i = a.length - 1; i > 0; i--) {
  //       const j = Math.floor(Math.random() * (i + 1));
  //       [a[i], a[j]] = [a[j], a[i]];
  //   }
  //   return a;
  // };

  // shuffle(deck);
  
  return (
    <div>
      {deck.map((card, i) => {
        return <Card key={`card${i}`} active={true} value={card} scale={.5}/>
      })}
    </div>
  )
};