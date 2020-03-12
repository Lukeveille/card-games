import React from 'react';

export default props => {
  const cardScale = .5,
  cardFace = {
    width: `${cardScale * 9}em`,
    height: `${cardScale * 14}em`,
    border: `${cardScale * .9}em solid #fff`,
    borderRadius: `${cardScale * 10}px`,
    margin: 'auto',
    background: '#a00',
    cursor: 'pointer',
  }

  console.log(props.value)

  return (
    <div className='card'>
      <figure
        className='side'
        style={cardFace}
      ></figure>
      <figure
        className='side back'
        style={{...cardFace, background: '#fff'}}
      >
        {props.value[0]}
        <br />
        {props.value[1]}
      </figure>
    </div>
  )
}