import React from 'react';
import Card from './Card.js';

const deck = [];
for (let i = 0; i < 52; i++) {
  const suite = i  > 38? 'C' : i > 25? 'S' : i > 12? 'D' : 'H';
  const value = i  > 38? i - 39 : i > 25? i - 26 : i > 12? i - 13 : i;
  
  deck.push([value + 1, suite])
}

export default () => {
  const choice = deck[Math.floor(Math.random() * deck.length)];
  return (
    <Card value={choice}/>
  )
}