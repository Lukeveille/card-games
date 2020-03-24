import React from 'react';
import { useState } from 'react';
import './styles/App.css';
import Card from './components/Card.js'

const newDeck = [];
for (let i = 0; i < 52; i++) {
  const suite = i  > 38? 'C' : i > 25? 'S' : i > 12? 'D' : 'H';
  const value = i  > 38? i - 39 : i > 25? i - 26 : i > 12? i - 13 : i;
  newDeck.push([value + 1, suite])
};
// const shuffle = a => {
//   for (let i = a.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [a[i], a[j]] = [a[j], a[i]];
//   }
//   return a;
// };
// shuffle(newDeck);

function App() {
  const [act, setAct] = useState(true),
  [live, setLive] = useState(true),
  [flip, setFlip] = useState(true);

  return (
    // <div className="Gameboard">
    <div>
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
        {newDeck.map((card, i) => {
          return <Card
            key={`card${i}`}
            style={{
              display: 'inline-block',
              position: 'absolute',
            }}
            active={act}
            live={live}
            flipped={flip}
            value={card}
            scale={1}
          />
        })}
      </div>
    </div>
  );
}

export default App;
