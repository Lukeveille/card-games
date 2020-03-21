import React from 'react';
import Card from './Card.js';
import { useState } from 'react';
// import heartQueen from '../svg/queen_of_hearts.svg';
// import diamondQueen from '../svg/queen_of_diamonds.svg';
// import spadeQueen from '../svg/queen_of_spades.svg';
// import clubQueen from '../svg/queen_of_clubs.svg';
// import heartKing from '../svg/king_of_heart.svg';
// import diamondKing from '../svg/king_of_diamond.svg';
// import spadeKing from '../svg/king_of_spade.svg';
// import clubKing from '../svg/king_of_club.svg';
// import heartJack from '../svg/jack_of_heart.svg';
// import diamondJack from '../svg/jack_of_diamond.svg';
// import spadeJack from '../svg/jack_of_spade.svg';
// import clubJack from '../svg/jack_of_club.svg';

export default props => {
  const [deck] = useState(props.newDeck),
  shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  shuffle(deck);
  
  return (
    // <div>
    //   {deck.map((card, i) => {
    //     return <Card key={`card${i}`} active={true} value={card} scale={1}/>
    //   })}
    // </div>
    <Card active={true} value={[4, 'H']} scale={1}/>
  )
};