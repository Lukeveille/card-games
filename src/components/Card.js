import React from 'react';
import { useState } from 'react';

export default props => {
  const [flipped, setFlipped] = useState(false),
  cardScale = .7,
  innerWidth = cardScale * 9,
  innerHeight = cardScale * 14,
  border = cardScale * .8,
  cardWrapper = {
    width: `${innerWidth + border * 2}em`,
    height: `${innerHeight + border * 2}em`,
    borderRadius: `${cardScale * 10}px`,
    display: 'inline-block',
    position: 'relative',
    transition: 'transform .2s ease-in-out',
    transformStyle: 'preserve-3d',
    transform: flipped? 'rotateY(180deg)' : 'none'
  },
  cardFace = {
    width: `${innerWidth}em`,
    height: `${innerHeight}em`,
    border: `${border}em solid #fff`,
    borderRadius: `${cardScale * 10}px`,
    margin: 'auto',
    background: '#a00',
    cursor: 'pointer',
    position: 'absolute',
    backfaceVisibility: 'hidden'
  },
  cardBack = {...cardFace, background: '#fff', transform: 'rotateY(180deg)'};

  return (
    <div
      style={cardWrapper}
      className='card'
      onClick={() => setFlipped(true)}
    >
      <figure
        style={cardFace}
      >
        {52 - props.cardInDeck}
      </figure>
      <figure
        style={cardBack}
      >
        {props.value[0]}
        <br />
        {props.value[1]}
      </figure>
    </div>
  )
}