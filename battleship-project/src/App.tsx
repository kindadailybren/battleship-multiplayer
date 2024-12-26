import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Game, GameSmaller } from './components/Game.tsx'
import Chat from './components/Chat.tsx'
import Moves from './components/Moves.tsx'
import './App.css'

function App() {
  return (
    <>
      <div className="App">
          <Chat />
          <div>
            <h1>ENEMY SHIPS</h1>
            <Game /> 
          </div>
          <div>
            <Moves />
            <h1 className='header'>YOUR SHIPS</h1>
            <GameSmaller />
          </div>  
      </div>
    </>
  )
}

export default App
