import React, { useState } from "react";
import './Monster.css';

const Monster = ({ name, image }) => {
  
  const [kills, setKills] = useState(0);
  const handleClick = () => {
    setKills(kills + 1);
  };

  return (
    <div className='MonsterCard'>
      <img className='MonsterImage' src={image} alt={`${name} monster`} />
      <p>Name: {name}</p>
      <p>Kills: {kills}</p>
      <button onClick={handleClick}>More Kills!</button>
    </div>
  );
};

export default Monster;
