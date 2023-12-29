import React, { useState } from "react";
import Board from "./components/Board";
import ScoreBoard from "./components/ScoreBoard";
import ResetButton from "./components/ResetButton";

function App() {
  const WIN_CONDITION = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  // const board = ["X","X","X","X","X","X","X","X","X"]
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);

  const handleBoxClick = (boxIdx) => {
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    });
    setBoard(updatedBoard);

    checkWinner(updatedBoard)
    const winner = checkWinner(updatedBoard);
    if(winner){
      if(winner=="O"){
        let {oScore} = scores;
        oScore += 1;
        setScores({...scores,oScore})
      }
      else{
        let {xScore} = scores;
        xScore += 1;
        setScores({...scores,xScore})
      }
    }

    setXPlaying(!xPlaying);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITION.length; i++) {
      const [x, y, z] = WIN_CONDITION[i];

      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        console.log(board[x]);
        setGameOver(true);
        return board[x];
      }
    }
  };

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
    // let {oScore} = scores;
    //     oScore = 0;
    // let {xScore} = scores;
    //     xScore = 0;
    // setScores({xScore,oScore})
  };
  const newGame = ()=>{
    setGameOver(false);
    setBoard(Array(9).fill(null));
    let {oScore} = scores;
        oScore = 0;
    let {xScore} = scores;
        xScore = 0;
    setScores({xScore,oScore})
  }

  return (
    <div>
      <ScoreBoard scores={scores} xPlaying={xPlaying} />
      <Board board={board} onClick={gameOver?resetBoard:handleBoxClick} />
      <ResetButton resetBoard={resetBoard} newGame={newGame}/>
    </div>
  );
} 


export default App;