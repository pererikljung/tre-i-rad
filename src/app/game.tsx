'use client'
import {useState} from "react";

function Button({value, buttonClick}) {
  return (
    <button onClick={buttonClick} className="outline-solid h-(--buttonsize) w-(--buttonsize) text-(length:--buttontextsize)" >{value}</button>
  )
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


export default function Game() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [history, setHistory] = useState(Array(8));
    const [currentClick, setCurrentClick] = useState(0);

    function handleClick(i) {

        const currentHistory = history.slice();
        const nextSquares = squares.slice();
        
        if (squares[i] || calculateWinner(squares)){
            return;
          }
        
          if (currentClick >= 8){
            nextSquares[currentHistory[currentClick % 8]] = null;
        }
        
        if (xIsNext) {
            nextSquares[i] = "X";
          } else {
            nextSquares[i] = "O";
          }
        
        currentHistory[currentClick % 8] = i;
        setXIsNext(!xIsNext);
        setSquares(nextSquares);
        setCurrentClick(currentClick + 1);
        setHistory(currentHistory);
      }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

  return (
    <>
    <div className="grid grid-cols-3">
        <div className="col-span-3 text-center text-[4vw]">{status}</div>
        < Button value={squares[0]} buttonClick={() => handleClick(0)}/>
        < Button value={squares[1]} buttonClick={() => handleClick(1)}/>
        < Button value={squares[2]} buttonClick={() => handleClick(2)}/>

        < Button value={squares[3]} buttonClick={() => handleClick(3)}/>
        < Button value={squares[4]} buttonClick={() => handleClick(4)}/>
        < Button value={squares[5]} buttonClick={() => handleClick(5)}/>

        < Button value={squares[6]} buttonClick={() => handleClick(6)}/>
        < Button value={squares[7]} buttonClick={() => handleClick(7)}/>
        < Button value={squares[8]} buttonClick={() => handleClick(8)}/>
        <button className="col-span-3 text-[2vw]">Reset</button>
      </div>
      </>
    
  );
}
