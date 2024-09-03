import CalculateWinner from "../utils/CalculateWinner";
import Square from "./Square";
import '../app.css'

function Board(props){

    function handleClick(idx){
      if (props.squares[idx] || CalculateWinner(props.squares)){
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
    
  
    const winner = CalculateWinner(props.squares);
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

export default Board;