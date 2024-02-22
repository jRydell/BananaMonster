import './Monster.css';


const Monster = ({name, eyes, image}) => {
  return (
    <>
      <div className='MonsterContainer'>
        <p>Name: {name}, Eyes: {eyes}</p>
        <img className='MonsterImage' src={image} alt={`${name} monster`} />
      </div>
    </>
  );
  
}

export default Monster;