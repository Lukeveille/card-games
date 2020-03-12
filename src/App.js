import React from 'react';
import './styles/App.css';
import Cards from './components/Cards.js'

function App() {
  const newDeck = [];
  for (let i = 0; i < 52; i++) {
    const suite = i  > 38? 'C' : i > 25? 'S' : i > 12? 'D' : 'H';
    const value = i  > 38? i - 39 : i > 25? i - 26 : i > 12? i - 13 : i;
    newDeck.push([value + 1, suite])
  }
  return (
    <div className="Gameboard">
      <Cards newDeck={newDeck}/>
    </div>
  );
}

export default App;
