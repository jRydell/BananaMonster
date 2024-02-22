import './Monster.css';


const Monster = ({name, kills, image}) => {
  return (
    <>
      <div className='MonsterCard'>
        <p>Name: {name}</p>
        <p>Kills: {kills}</p>
        <img className='MonsterImage' src={image} alt={`${name} monster`} />
      </div>
    </>
  );
  
}

export default Monster;