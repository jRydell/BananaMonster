import React, { useState, useEffect } from "react";
import "./MonsterBox.css";
import Monster from "../Monster/Monster";
import monsterData from "./monster.json";

const MonsterBox = () => {
  const initialMonsters = monsterData.data.map((monster) => ({
    ...monster,
    kills: 0,
  }));

  const [monsters, setMonsters] = useState(initialMonsters);

  useEffect(() => {
    // Sort monsters whenever the state is updated
    const sortedMonsters = [...monsters].sort((a, b) => b.kills - a.kills);
    setMonsters(sortedMonsters);
  }, [monsters]);

  return (
    <>
      <div className="MonsterBox">
        <h1>Leaderboard</h1>
        {monsters.map((monster, index) => (
        <Monster
         key={index}
         name={monster.name}
         image={monster.image}
         kills={monster.kills}
        
         setKills={(newKills) => {
              const updatedMonsters = [...monsters];
              updatedMonsters[index].kills = newKills;
              setMonsters(updatedMonsters);
            }}
          />
        ))}
      </div>
    </>
  );
};

export default MonsterBox;
