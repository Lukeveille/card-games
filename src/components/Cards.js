import React from 'react';
import Card from './Card.js';
import { useState } from 'react';
import heartQueen from '../svg/queen_of_hearts.svg';
import diamondQueen from '../svg/queen_of_diamonds.svg';
import spadeQueen from '../svg/queen_of_spades.svg';
import clubQueen from '../svg/queen_of_clubs.svg';
import heartKing from '../svg/king_of_hearts.svg';
import diamondKing from '../svg/king_of_diamonds.svg';
import spadeKing from '../svg/king_of_spades.svg';
import clubKing from '../svg/king_of_clubs.svg';
import heartJack from '../svg/jack_of_hearts.svg';
import diamondJack from '../svg/jack_of_diamonds.svg';
import spadeJack from '../svg/jack_of_spades.svg';
import clubJack from '../svg/jack_of_clubs.svg';

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
        return <Card key={`card${i}`} active={true} value={card} scale={.7}/>
      })}
      <br />
      <img src={heartQueen} alt='helpme' />
      <img src={diamondQueen} alt='helpme' />
      <img src={spadeQueen} alt='helpme' />
      <img src={clubQueen} alt='helpme' />
      <img src={heartKing} alt='helpme' />
      <img src={diamondKing} alt='helpme' />
      <img src={spadeKing} alt='helpme' />
      <img src={clubKing} alt='helpme' />
      <img src={heartJack} alt='helpme' />
      <img src={diamondJack} alt='helpme' />
      <img src={spadeJack} alt='helpme' />
      <img src={clubJack} alt='helpme' />
      {/* <Card active={true} value={[2, 'H']} scale={1}/> */}
    </div>
  )
};