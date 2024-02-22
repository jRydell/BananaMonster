import './Monster.css';


const Monster = ({name, kills, image}) => {
  return (
    <>
      <div className='MonsterCard'>
        <img className='MonsterImage' src={image} alt={`${name} monster`} />
        <p>Name: {name}</p>
        <p>Kills: {kills}</p>
      </div>
    </>
  );
  
}

export default Monster;