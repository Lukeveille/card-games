import React from 'react';
import { useState } from 'react';
import './styles/App.css';
import Card from './components/Card.js'

function App() {
  const [act, setAct] = useState(true),
  deck = [],
  [topCard, setTopCard] = useState(52),
  [live, setLive] = useState(true),
  [flip, setFlip] = useState(false);

  if (!deck.length) {
    for (let i = 0; i < 52; i++) {
      const value = (i  > 38? i - 39 : i > 25? i - 26 : i > 12? i - 13 : i)+1;
      const suite = i  > 38? 'C' : i > 25? 'S' : i > 12? 'D' : 'H';
      deck.push(
        <Card
          key={`card${i}`}
          style={{
            display: 'inline-block',
            position: 'absolute',
          }}
          active={act}
          live={live}
          flipped={flip}
          zindex={i}
          topCard={topCard}
          setTopCard={setTopCard}
          value={[(value), suite]}
          scale={.5}
        />)
    }
  }

  return (
    <div
    style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, rgba(19,121,9,1) 0%, rgba(12,50,9,1) 100%)'
    }}
    >
      <button
        onClick={() => {
          setAct(!act)
        }}
      >Make {act? `Inactive` : `Active`}</button>
      <button
        onClick={() => {
          setLive(!live)
        }}
      >Make {live? `Dead` : `Alive`}</button>
      <button
        onClick={() => {
          setFlip(!flip)
        }}
      >{`${flip? `un` : ``}flip all`}</button>

      <div id="deck">
        {deck}
      </div>
    </div>
  );
}

export default App;
