import { useState } from "react";
import { Game, GameSmaller } from "./components/Game.tsx";
import Chat from "./components/Chat.tsx";
import Moves from "./components/Moves.tsx";
import NavBar from "./components/NavBar.tsx";
import "./App.css";

function App() {
  const [clickedPosition, setClickedPosition] = useState<string | null>(null); //useState function sets the clickedPosition variable
  const [name, setName] = useState<string>("Set Name");                        //useState function sets the name variable
  const [isShip, setShip] = useState<boolean | undefined>(false);
  const [prepPhase, setPhase] = useState<boolean>(false);

  const handleSquareClick = (position: string, target?: boolean) => {   //Function for clicking the squares on the game board
    setClickedPosition(position);                     //Changes the clickedPosition with the position
    setShip(target);                                  //Changes the setShip if the tile is part of a ship
    console.log(position);
    console.log(target);
  };

  const handleNameChange = (name: string) => { //Function for changing the name to reflect the chat
    setName(name);                             //changes the name with the setName useState function
  };

  if(!prepPhase){ //If it is Game Phase, Display Game Proper
    return (
      <>
        <NavBar onNameChange={handleNameChange} />      {/*Nav Bar component and has onNameChange function*/}
        <div className="App">
          <Chat name={name} />                          {/*Chat Bar component which gives the name from the onNameChange in the NavBar*/}
          <div>
            <h1>ENEMY SHIPS</h1>
            <Game onSquareClick={handleSquareClick} prepPhase={prepPhase}/>  {/*Game Board component with onSquareClick function and pass the useState fnc*/}
          </div>
          <div>
            <Moves clickedPosition={clickedPosition} isShip={isShip} />      {/*Displays the move of users and if it is hit*/}
            <h1 className="header">YOUR SHIPS</h1>
            <GameSmaller />                                                  {/*Displays the move of Enemy*/}
          </div>
        </div>
      </>
    );
  } else { //If it is Prep Phase, Display Preparation Board
    return(
    <>
      <NavBar onNameChange={handleNameChange} />      {/*Nav Bar component and has onNameChange function*/}
      <div className="App">
        <Chat name={name} />                          {/*Chat Bar component which gives the name from the onNameChange in the NavBar*/}
        <div>
          <h1>YOUR SHIPS</h1>
          <Game onSquareClick={handleSquareClick} prepPhase={prepPhase} />  {/*Game Board component with onSquareClick function and pass the useState fnc*/}
        </div>
      </div>
    </>
    );
  }
}

export default App;