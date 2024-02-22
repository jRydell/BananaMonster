import './MonsterBox.css';
import Monster from '../Monster/Monster';
import monster from './monster.json';

const MonsterBox = () => {
  const data = monster.data;

  return (
   <>
   <h1>Monster Box</h1>
   {data.map((monster)=>{
      return <Monster name={monster.name} eyes={monster.eyes} image={monster.image} />
   })}  
   </>
  );
}

export default MonsterBox
