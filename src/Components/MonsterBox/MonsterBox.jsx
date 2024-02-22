import './MonsterBox.css';
import Monster from '../Monster/Monster';
import monster from './monster.json';

const MonsterBox = () => {
  const data = monster.data;

  return (
   <>
   <h2>Monster Box</h2>
   {data.map((monster)=>{
      return <Monster name={monster.name} eyes={monster.eyes} />
   })}  
   </>
  );
}

export default MonsterBox
