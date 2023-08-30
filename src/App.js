import { useState } from "react";
import AnimalShow from "./AnimalShow";
import './App.css';
function getRandonAnimals(){
const animals=['bird','cat','cow','gator','horse'];

 return  animals[Math.floor(Math.random()*animals.length)]
}


function App() {
  
  const [animals,setAnimals]=useState([]);
  const  handleClick =()=>{
   setAnimals([...animals,getRandonAnimals()]);
  };
  const renderdAnimals=animals.map((animal,index)=>{
    return <AnimalShow type={animal} key={index}/>
  });
  return (
    <>
     <div className="app">
      <button className='button' onClick={handleClick}>Add Animal</button>
       <div className="animal-list">{renderdAnimals}</div>
     </div> 

    </>
  );
}

export default App;
