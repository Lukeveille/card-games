import React from 'react';
import { useState } from 'react';
import heart from '../svg/heart.svg'
import diamond from '../svg/diamond.svg'
import spade from '../svg/spade.svg'
import club from '../svg/club.svg'

export default props => {
  const [flipped, setFlipped] = useState(false),
  [glow, setGlow] = useState(false),
  cardScale = props.scale,
  innerWidth = cardScale * 9,
  innerHeight = cardScale * 14,
  border = cardScale * .8,
  number = props.value[0] === 1? 'A' : props.value[0] === 11? 'J' : props.value[0] === 12? 'Q' : props.value[0] === 13? 'K' : props.value[0],
  suit = props.value[1] === 'H'? heart : props.value[1] === 'D'? diamond : props.value[1] === 'S'? spade : club,
  suitStyle = {
    fontSize: `${cardScale * 1.75}em`,
    margin: props.value[0] === 10? `${cardScale * .14}rem ${cardScale * -.1}rem` : `${cardScale * .14}rem`,
    color: props.value[1] === 'D' || props.value[1] === 'H'? '#c00' : '#000'
  },
  cardWrapper = {
    width: `${innerWidth + border * 2}rem`,
    height: `${innerHeight + border * 2}rem`,
    borderRadius: `${cardScale * 10}px`,
    display: 'inline-block',
    position: 'relative',
    transition: 'transform .2s ease-in-out',
    transformStyle: 'preserve-3d',
    transform: flipped? 'rotateY(180deg)' : 'none',
    boxShadow: glow? '0 0 1em #ff0' : '0 0 1em #000',
    zIndex: glow? '10000' : 'auto'
  },
  cardFace = {
    width: `${innerWidth}rem`,
    height: `${innerHeight}rem`,
    border: `${border}rem solid #fff`,
    borderRadius: `${cardScale * 10}px`,
    margin: 'auto',
    background: '#a00',
    cursor: glow? 'pointer' : 'default',
    position: 'absolute',
    backfaceVisibility: 'hidden'
  },
  cardBack = {...cardFace, background: '#fff', transform: 'rotateY(180deg)'},
  suiteImage = size => (<img 
    src={suit}
    alt='suit'
    style = {{
      width: `${cardScale * size}em`
    }}
  />),
  cardSuite = style => <div style={style}>
    <p style={suitStyle}>{number}</p>
    {suiteImage(1.5)}
  </div>,
  faceCard = 'FACE',
  suiteFace = props.value[0] < 11? suiteImage(1) : faceCard;

  return (
    <div
      style={cardWrapper}
      onMouseOver={() => { if (!flipped && props.active) setGlow(true) }}
      onMouseOut={() => { setGlow(false) }}
      onClick={() => { setGlow(false); setFlipped(true) }}
    >
      <figure
        style={cardFace}
      ></figure>
      <figure
        style={cardBack}
      >
        {cardSuite({textAlign: 'left'})}
        {props.value[0] === 1? suiteImage(3) : suiteFace}
        {cardSuite({
          textAlign: 'right',
          transform: 'rotateX(180deg)',
          bottom: '1px',
          right: '1px',
          position: 'absolute'
        })}
      </figure>
    </div>
  )
}