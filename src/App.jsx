import { useState } from 'react';
import Board from './components/Borad';
import GameBtns from './components/GameBtns';

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function forward() {
    setCurrentMove(Math.min(history.length - 1, currentMove + 1))
  }

  function backward() {
    if (currentMove !== 0){
      setCurrentMove(currentMove - 1)
    }
  }

  function reset() {
    const history=[Array(9).fill(null)]
    setHistory(history)
    setCurrentMove(0)
  }

  return (
    <div className="game">
      <h1>
        Tic-Tac-Toe
      </h1>
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-ops">
        <GameBtns onReset={() => reset()} onBack={() => backward()} onForw={() => forward()} />
      </div>
    </div>
  );
}

