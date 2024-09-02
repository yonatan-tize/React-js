import { useState } from 'react'
import './app.css'

function Square({value, onSquareClick}){

  return(
    <>
      <button className="square-btn" onClick={onSquareClick}>{value}</button>
    </>
  )
}

function Board(){
  const [square, setSquare] = useState(Array(9).fill(null));

  function handleClick(idx){
    const nextSquare = square.slice()
    nextSquare[idx] = "X"
    setSquare(nextSquare)
  }

  return(
    <>
      <div className="square-container">
        <Square value={square[0]} onSquareClick={()=>handleClick(0)} />
        <Square value={square[1]} onSquareClick={()=>handleClick(1)} />
        <Square value={square[2]} onSquareClick={()=>handleClick(2)} />
         
        <Square value={square[3]} onSquareClick={()=>handleClick(3)} />
        <Square value={square[4]} onSquareClick={()=>handleClick(4)} />
        <Square value={square[5]} onSquareClick={()=>handleClick(5)} />
      
        <Square value={square[6]} onSquareClick={()=>handleClick(6)} />
        <Square value={square[7]} onSquareClick={()=>handleClick(7)} />
        <Square value={square[8]} onSquareClick={()=>handleClick(8)} />
      </div>
    </>
  )
}

function App() {
  return(
    <Board/>
  )
}

export default App
