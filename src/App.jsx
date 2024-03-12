// App.js
import React from "react"; // Import React
import "./App.css";
import AnimalList from "./Components/AnimalList/AnimalList";

const App = () => {
  return (
    <>
      <AnimalList animals={["dog", "horse", "cow", "cat", "fiska"]} />
      <main className="Main">{/* <MonsterBox /> */}</main>
    </>
  );
};

export default App;
