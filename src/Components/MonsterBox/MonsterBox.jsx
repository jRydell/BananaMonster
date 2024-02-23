import './MonsterBox.css';
import Monster from '../Monster/Monster';
import monster from './monster.json';

const MonsterBox = () => {
  const data = monster.data;
  

  return (
   <>
   <div className='MonsterBox'>
   <h1>Leaderboard</h1>
   {data.map((monster)=>{
      return <Monster name={monster.name} kills={monster.kills} image={monster.image} color={monster.color} />
   })}
   </div>  
   </>
  );
}

export default MonsterBox
