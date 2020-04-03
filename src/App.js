import React from 'react';
import { useState } from 'react';
import './styles/App.css';
import Card from './components/Card.js'
import CardSlot from './components/CardSlot.js'

function App() {
  const [act, setAct] = useState(true),
  [topCard, setTopCard] = useState(52),
  [live, setLive] = useState(true),
  [flip, setFlip] = useState(false),
  shuffle = arr => {
    let newArr = [...arr]
    let index = newArr.length, temp, random;
    while (0 !== index) {
      random = Math.floor(Math.random() * index);
      index -= 1;
      temp = newArr[index];
      newArr[index] = newArr[random];
      newArr[random] = temp;
    }
    return newArr
  },
  createDeck = () => {
    const newDeck = []
    for (let i = 0; i < 52; i++) {
      const value = (i  > 38? i - 39 : i > 25? i - 26 : i > 12? i - 13 : i)+1,
      suite = i  > 38? 'C' : i > 25? 'S' : i > 12? 'D' : 'H';
      newDeck.push(
        <Card
        key={`card${i}`}
        style={{
          display: 'inline-block',
          position: 'absolute',
        }}
        active={act}
        live={live}
        flipped={flip}
        topCard={topCard}
        setTopCard={setTopCard}
        value={[(value), suite]}
        scale={.5}
        />);
      };
      return newDeck;
    },
    [deck, setDeck] = useState(createDeck),
    gameboardStyle = {
      position: 'absolute',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, rgba(19,121,9,1) 0%, rgba(12,50,9,1) 100%)'
  };

  return (
    <div style={gameboardStyle}>
      <button onClick={() => setAct(!act)}>Make {act? `Inactive` : `Active`}</button>
      <button onClick={() => setLive(!live)}>Make {live? `Dead` : `Alive`}</button>
      <button onClick={() =>setFlip(!flip)}>{`${flip? `un` : ``}flip all`}</button>
      <button onClick={() => { setDeck(shuffle(deck)); console.log(deck) } }>Shuffle</button>

      <div>
        <CardSlot card={deck}/>
      </div>
    </div>
  );
}

export default App;
