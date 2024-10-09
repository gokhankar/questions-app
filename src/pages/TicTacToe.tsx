import { useEffect } from "react";
import useTicTacToe from "../hooks/use-tic-tac-toe";

const TicTacToe = () => {
  const {
    board,
    resetGame,
    calculateWinner,
    handleClick,
    isNextX,
    winMessage,
  } = useTicTacToe();

  useEffect(() => calculateWinner, [board, calculateWinner]);

  return (
    <div className="game">
      <div className="status">
        <h6>
          {winMessage
            ? winMessage
            : isNextX
            ? "Player X turn"
            : "Player O turn"}
        </h6>
        <button
          type="button"
          color=""
          className="btn btn-warning"
          onClick={resetGame}
          style={{}}
        >
          Restart
        </button>
        {/* <button
          type="button"
          className="btn btn-warning"
          onClick={() => console.log(winMessage)}
        >
          Log
        </button> */}
      </div>
      <div className="board">
        {board.map((cell, index) => (
          <button
            className="cell"
            key={index}
            disabled={cell !== null}
            onClick={() => handleClick(cell, index)}
          >
            {cell}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
