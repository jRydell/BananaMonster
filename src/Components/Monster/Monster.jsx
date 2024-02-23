import React, { useState } from 'react';
import './Monster.css';

const Monster = ({ name, image, kills, setKills }) => {
  const moreKills = () => {
    setKills(kills + 1);
  };

  const lessKills = () => {
    setKills(kills - 1);
  };
 
  const ultraKill = () => {
    setKills(kills + 5);
  };

  return (
    <div className='MonsterCard'>
      <img className='MonsterImage' src={image} alt={`${name} monster`} />
      <p>Name: {name}</p>
      <p>Kills: {kills}</p>
      <button onClick={moreKills}>More Kills!</button>
      <button onClick={lessKills}>Less Kills!</button>
      <button onClick={ultraKill}>Ultra Kill!</button>
    </div>
  );
};

export default Monster;
