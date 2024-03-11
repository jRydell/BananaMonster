// AnimalList.js
import React from "react"; // Import React
import "./AnimalList.css"; // Make sure to replace this with the correct path to your CSS file

const AnimalList = ({ animals }) => {
  return (
    <>
      <ul>
        {animals.map((animal) => {
          return <li key={animal}>{animal}</li>;
        })}
      </ul>
    </>
  );
};

export default AnimalList;
