import './AnimalShow.css';
import { useState } from 'react';
import React from 'react';

import bird from './image/bird.svg';
import cat from './image/cat.svg';
import cow from './image/cow.svg';
import dog from './image/dog.svg';
import horse from './image/horse.svg';
import gator from './image/gator.svg';
import heart from './image/heart.svg';

const svgMap={
  bird,
  cow,
  cat,
  dog,
  horse,
  gator,
  heart
};
export default function AnimalShow({type}) {
  const [clicks,setClicks]=useState(0);
  const handleClick=()=>{
      setClicks(clicks+1);
  };
  return (
    <div className='animal-show' onClick={handleClick}>
      <img className='animal' alt="animal" src={svgMap[type]}/>
      <img
      className='heart' 
      alt="heart" 
      src={svgMap[heart]}
      style={{ width: 10 + 10 * clicks +"px"  }}/>
    </div>
  )
}
