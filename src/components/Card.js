import React from 'react';
import { useState, useEffect } from 'react';
import heart from '../svg/heart.svg'
import diamond from '../svg/diamond.svg'
import spade from '../svg/spade.svg'
import club from '../svg/club.svg'
import heartJack from '../svg/jack_of_hearts.svg';
import diamondJack from '../svg/jack_of_diamonds.svg';
import spadeJack from '../svg/jack_of_spades.svg';
import clubJack from '../svg/jack_of_clubs.svg';
import heartQueen from '../svg/queen_of_hearts.svg';
import diamondQueen from '../svg/queen_of_diamonds.svg';
import spadeQueen from '../svg/queen_of_spades.svg';
import clubQueen from '../svg/queen_of_clubs.svg';
import heartKing from '../svg/king_of_hearts.svg';
import diamondKing from '../svg/king_of_diamonds.svg';
import spadeKing from '../svg/king_of_spades.svg';
import clubKing from '../svg/king_of_clubs.svg';

export default props => {
  const [flipped, setFlipped] = useState(props.flipped),
  [active, setActive] = useState(props.active),
  [live, setLive] = useState(props.live),
  [glow, setGlow] = useState(false),
  [grabbed, setGrabbed] = useState(false),
  [rel, setRel] = useState(null),
  [pos, setPos] = useState({x: null, y: null}),
  border = props.scale * .8,
  innerWidth = props.scale * 9,
  width = innerWidth + border * 2,
  innerHeight = props.scale * 14,
  height = innerHeight + border * 2,
  number = props.value[0] === 1? 'A' : props.value[0] === 11? 'J' : props.value[0] === 12? 'Q' : props.value[0] === 13? 'K' : props.value[0],
  suit = props.value[1] === 'H'? heart : props.value[1] === 'D'? diamond : props.value[1] === 'S'? spade : club,
  suitStyle = {
    fontSize: `${props.scale * 1.75}em`,
    margin: props.value[0] === 10? `${props.scale * .14}rem ${props.scale * -.1}rem` : `${props.scale * .14}rem`,
    color: props.value[1] === 'D' || props.value[1] === 'H'? '#c00' : '#000'
  },
  cardWrapper = {
    ...props.style,
    width: `${width}rem`,
    height: `${height}rem`,
    borderRadius: `${props.scale * 10}px`,
    transition: 'transform .2s ease-in-out',
    transformStyle: 'preserve-3d',
    transform: flipped? 'rotateY(180deg)' : 'none',
    boxShadow: grabbed? `0 0 ${props.scale * 1}rem #000` : glow? `0 0 ${props.scale * .5}rem #000` : `0 0 ${props.scale * .25}rem #000`,
    cursor: !flipped && active? 'pointer' : grabbed && active? 'grabbing' : props.live && active? 'grab' : 'default',
    zIndex: glow? '100000' : 'default',
    top: `${pos.y}px`,
    left: `${pos.x}px`
  },
  cardBack = {
    width: `${innerWidth}rem`,
    height: `${innerHeight}rem`,
    border: `${border}rem solid #fff`,
    borderRadius: `${props.scale * 10}px`,
    margin: 'auto',
    background: '#a00',
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
  spacer = (num = 0) => (<samp  key={`spacer${num}`} style={{width: `${props.scale * 2.5}rem`, height: `${props.scale * 1.5}rem`}}></samp>),
  wideRow = arr => {
    arr.splice(1, 0, spacer());
    return arr;
  },
  suiteGrid = () => {
    let arr = [];
    for (let i = 0; i < props.value[0]; i++) {
      const num = props.value[0] === 2 || props.value[0] === 4 || props.value[0] === 10? i+1 : props.value[0] === 7? i-1 : i;
      arr.push(suiteImage(1, num > (props.value[0] / 2), i));
    }
    if (props.value[0] < 4) {
      return arr;
    } else {
      let row = 0,
      newArr = [];
      while (arr.length > 0) {
        newArr[row] = ((props.value[0] === 7 || props.value[0] === 10) && row === 3) ||
        (props.value[0] === 9 && (row === 5 || row === 1))?
        spacer(row)
        :
        <div key={`${props.value[1]}row${row}`} style={{display: 'flex', justifyContent: 'space-around'}}>
          {((props.value[0] === 5 || props.value[0] === 7 || props.value[0] === 8 || props.value[0] === 10) && row === 1) ||
          ((props.value[0] === 8 || props.value[0] === 9) && row === 3) ||
          (props.value[0] === 10 && row === 5)?
          arr.splice(0,1) : wideRow(arr.splice(0,2))}
        </div>
        row++
      }
      return newArr;
    }
  },
  cardSuite = style => (<div style={style}>
    <p style={suitStyle}>{number}</p>
    {suiteImage(1.5)}
  </div>),
  faceCard = () => {
    const face = props.value[0] === 11? props.value[1] === 'H'?
    heartJack :
    props.value[1] === 'D'?
    diamondJack :
    props.value[1] === 'S'?
    spadeJack : clubJack :
    props.value[0] === 12?  props.value[1] === 'H'?
    heartQueen :
    props.value[1] === 'D'?
    diamondQueen :
    props.value[1] === 'S'?
    spadeQueen : clubQueen :
    props.value[1] === 'H'?
    heartKing :
    props.value[1] === 'D'?
    diamondKing :
    props.value[1] === 'S'?
    spadeKing : clubKing;

    return <img src={face} alt='help' style={{position: 'absolute', height: '76%'}} />
  },
  suiteFace = props.value[0] < 11? suiteGrid() : faceCard();

  useEffect(() => {
    setActive(props.active)
  }, [props.active])
  useEffect(() => {
    setLive(props.live)
  }, [props.live])
  useEffect(() => {
    setFlipped(props.flipped)
  }, [props.flipped])

  return (
    <div
      style={cardWrapper}
      onMouseOver={() => {
        if ((!flipped && active) || (active && live)) {
          setGlow(true);
        }
      }}
      onMouseDown={e => {
        if ((flipped && active && live)) {
          const pos = e.currentTarget.getBoundingClientRect();
          setGrabbed(!grabbed);
          setRel({
            x: e.pageX - pos.x,
            y: e.pageY - pos.y,
          });
          e.stopPropagation();
          e.preventDefault();
        }
      }}
      onMouseUp={e => {
        if (grabbed) {
          setGrabbed(false);
          setGlow(true)
          e.stopPropagation();
          e.preventDefault();
        }
      }}
      onMouseMove={e => {
        if (!grabbed) return
        setPos({
          x: e.pageX - rel.x,
          y: e.pageY - rel.y
        })
      }}
      onMouseOut={e => {
        if (glow) {
          setGlow(false);
        }
        if (grabbed) {
          console.log('ya did it')
          setPos({
            x: e.pageX - rel.x,
            y: e.pageY - rel.y
          })
        }
      }}
      onClick={() => {
        if (!props.live) {
          setGlow(false)
        }
        if (props.active) {
          setFlipped(true)
        }
      }}
    >
      <figure style={cardBack}></figure>
      <figure style={cardFace}>
        {cardSuite({textAlign: 'left'})}
        <div style={{
          display: 'flex',
          justifyContent:  props.value[0] === 1? 'center' : 'space-between',
          alignItems: 'center',
          flexFlow: 'column wrap',
          margin: `${props.scale * 2}rem 0`
        }}>
          {props.value[0] === 1? suiteImage(3) : suiteFace}
        </div>
        {cardSuite({
          textAlign: 'right',
          transform: 'rotateX(180deg)'
        })}
      </figure>
    </div>
  );
};
