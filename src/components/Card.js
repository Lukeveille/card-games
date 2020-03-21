import React from 'react';
import { useState } from 'react';
import heart from '../svg/heart.svg'
import diamond from '../svg/diamond.svg'
import spade from '../svg/spade.svg'
import club from '../svg/club.svg'

export default props => {
  const [flipped, setFlipped] = useState(true),
  [glow, setGlow] = useState(false),
  innerWidth = props.scale * 9,
  innerHeight = props.scale * 14,
  border = props.scale * .8,
  number = props.value[0] === 1? 'A' : props.value[0] === 11? 'J' : props.value[0] === 12? 'Q' : props.value[0] === 13? 'K' : props.value[0],
  suit = props.value[1] === 'H'? heart : props.value[1] === 'D'? diamond : props.value[1] === 'S'? spade : club,
  suitStyle = {
    fontSize: `${props.scale * 1.75}em`,
    margin: props.value[0] === 10? `${props.scale * .14}rem ${props.scale * -.1}rem` : `${props.scale * .14}rem`,
    color: props.value[1] === 'D' || props.value[1] === 'H'? '#c00' : '#000'
  },
  cardWrapper = {
    width: `${innerWidth + border * 2}rem`,
    height: `${innerHeight + border * 2}rem`,
    borderRadius: `${props.scale * 10}px`,
    display: 'inline-block',
    position: 'relative',
    transition: 'transform .2s ease-in-out',
    transformStyle: 'preserve-3d',
    transform: flipped? 'rotateY(180deg)' : 'none',
    boxShadow: glow? '0 0 1em #ff0' : '0 0 1em #000',
    zIndex: glow? '10000' : 'auto'
  },
  cardBack = {
    width: `${innerWidth}rem`,
    height: `${innerHeight}rem`,
    border: `${border}rem solid #fff`,
    borderRadius: `${props.scale * 10}px`,
    margin: 'auto',
    background: '#a00',
    cursor: glow? 'pointer' : 'default',
    position: 'absolute',
    backfaceVisibility: 'hidden'
  },
  cardFace = {
    ...cardBack,
    background: '#fff',
    transform: 'rotateY(180deg)',
    display: 'grid',
    gridTemplateColumns: '1fr 3fr 1fr'
  },
  suiteImage = (size, flip, num = 0) => <img 
    key={`${num}img`}
    src={suit}
    alt='suit'
    style = {{
      width: `${props.scale * size}rem`,
      transform: flip? 'rotateX(180deg)' : 'none'
    }}
  />,
  suiteGrid = () => {
    let arr = [];
    for (let i = 0; i < props.value[0]; i++) {
      const num = props.value[0] === 4 || props.value[0] === 10? i+1 : props.value[0] === 7? i-1 : i,
      flip = num > (props.value[0] / 2)? true : false;
      arr.push(suiteImage(1, flip, i))
    }
    if (props.value[0] < 4) {
      return arr;
    } else {
      let count = 0,
      newArr = [];
      while (arr.length > 0) {
        newArr[count] = <div key={`${props.value[1]}row${count}`} style={{display: 'flex', justifyContent: 'space-around'}}>

          {(props.value[0] !== 4 && props.value[0] !== 6 && props.value[0] !== 9 && props.value[0] !== 10 && (count+2) % 2)?
          props.value[0] === 7 && count !== 1?
          arr.splice(0,2) :
          arr.splice(0,1) :
          (props.value[0] === 9 & count === 2) || (props.value[0] === 10 & count === 1) || (props.value[0] === 10 & count === 4)?
          arr.splice(0,1) : arr.splice(0,2)}

        </div>
        count++
      }
      return newArr;
    }
  },
  cardSuite = style => <div style={style}>
    <p style={suitStyle}>{number}</p>
    {suiteImage(1.5)}
  </div>,
  faceCard = 'FACE',
  suiteFace = props.value[0] < 11?
  suiteGrid()
  : faceCard;

  return (
    <div
      style={cardWrapper}
      onMouseOver={() => { if (!flipped && props.active) setGlow(true) }}
      onMouseOut={() => { setGlow(false) }}
      onClick={() => { setGlow(false); setFlipped(true) }}
    >
      <figure
        style={cardBack}
      ></figure>
      <figure
        style={cardFace}
      >
        {cardSuite({textAlign: 'left'})}
        <div style={{
          display: 'flex',
          justifyContent: props.value[0] === 1 || props.value[0] > 10? 'space-around' : 'space-between',
          alignItems: 'center',
          flexFlow: 'column wrap',
          margin: '.5em 0'
        }}>
          {props.value[0] === 1? suiteImage(3) : suiteFace}
        </div>
        {cardSuite({
          textAlign: 'right',
          transform: 'rotateX(180deg)',
          bottom: '1px',
          right: '1px',
        })}
      </figure>
    </div>
  )
}