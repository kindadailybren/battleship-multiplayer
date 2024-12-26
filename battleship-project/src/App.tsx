import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Game, GameSmaller } from './components/Game.tsx'
import Chat from './components/Chat.tsx'
import Moves from './components/Moves.tsx'
import './App.css'

function App() {

  const [clickedPosition, setClickedPosition] = useState<string | null>(null);

    const handleSquareClick = (position: string) => {
        setClickedPosition(position);
        console.log(position);
    };

  return (
    <>
      <div className="App">
          <Chat />
          <div>
            <h1>ENEMY SHIPS</h1>
            <Game onSquareClick={handleSquareClick} /> 
          </div>
          <div>
            <Moves clickedPosition={clickedPosition}/>
            <h1 className='header'>YOUR SHIPS</h1>
            <GameSmaller />
          </div>  
      </div>
    </>
  )
}

export default App
