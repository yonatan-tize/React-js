import { useState } from 'react'
import './app.css'


function Square({value, onSquareClick}){
  return(
    <>
      <button className="square-btn" onClick={onSquareClick}>
        {value}
      </button>
    </>
  )
}

function Board(props){

  function handleClick(idx){
    if (props.squares[idx] || calculateWinner(props.squares)){
      return 
    }
    const nextSquares = props.squares.slice()
  
    if (props.xIsNext){
      nextSquares[idx] = "X";
    } else{
      nextSquares[idx] = "O";
    }
    props.onPlay(nextSquares)
  }
  

  const winner = calculateWinner(props.squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else{
    status = "Next player: " + (props.xIsNext ? "X" : "O");
  }
  if (!props.squares.includes(null)) {
    status = "The game ended with a draw";
  }

  return(
    <>
      <div className='status'>{status}</div>
      <div className="square-container">
        <Square value={props.squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={props.squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={props.squares[2]} onSquareClick={() => handleClick(2)} />
         
        <Square value={props.squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={props.squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={props.squares[5]} onSquareClick={() => handleClick(5)} />
      
        <Square value={props.squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={props.squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={props.squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  )
}

function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const currentSquares = history[history.length - 1];

  function handlePlay(nextSquares) {

    setHistory([...history, nextSquares])
    setXIsNext(!xIsNext)
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function App() {
  return(
    <Game/>
  )
}

export default App
