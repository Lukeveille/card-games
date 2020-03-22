import React from 'react';
import './styles/App.css';
import Card from './components/Card.js'

function App() {
  const newDeck = [];
  for (let i = 0; i < 52; i++) {
    const suite = i  > 38? 'C' : i > 25? 'S' : i > 12? 'D' : 'H';
    const value = i  > 38? i - 39 : i > 25? i - 26 : i > 12? i - 13 : i;
    newDeck.push([value + 1, suite])
  };
  const shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  shuffle(newDeck);

  return (
    <div className="Gameboard">
      <div>
        {newDeck.map((card, i) => {
          return <Card key={`card${i}`} active={true} value={card} scale={.5}/>
        })}
      </div>
    </div>
  );
}

export default App;
