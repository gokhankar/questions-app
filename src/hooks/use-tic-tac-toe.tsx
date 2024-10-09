import { useState } from "react";

const initialBoard = () => Array(9).fill(null);

const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard);
  const [winMessage, setWinMessage] = useState<null | string>(null);
  const [xList, setXList] = useState<number[]>([]);
  const [yList, setYList] = useState<number[]>([]);

  // console.log(board);
  const [isNextX, setIsNextX] = useState(true);
  const WINNING_PATTERNS: number[][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  const calculateWinner = (): void => {
    // console.log("calculateWinner start");
    // console.log("calculateWinner xList", xList);
    // console.log("calculateWinner yList", yList);
    // console.log("calculateWinner board", board);

    for (let i = 0; i < WINNING_PATTERNS.length; i++) {
      const checker = (arr: number[], target: number[]) =>
        target.every((v) => arr.includes(v));
      if (checker(xList, WINNING_PATTERNS[i])) win("X");
      if (checker(yList, WINNING_PATTERNS[i])) win("Y");
    }
    if (!board.includes(null) && !board.includes("."))
      setWinMessage("Game ended in a draw");
  };
  const handleClick = (cell: string, index: number) => {
    // console.log("handleClick start");
    if (isNextX) {
      const newXList = xList;
      newXList.push(index);
      setXList([...newXList]);
    } else {
      const newYList = yList;
      newYList.push(index);
      setYList([...newYList]);
    }
    const newBoard = board;
    newBoard[index] = isNextX ? "X" : "O";
    setBoard([...newBoard]);
    setIsNextX(!isNextX);
  };

  const resetGame = () => {
    window.location.reload();
    // console.log("resetGame start");
    // setWinMessage("");
    // setIsNextX(true);
    // setXList([]);
    // setYList([]);
    // setBoard(initialBoard);
    // setWinMessage(null);
  };
  const win = (winner: string) => {
    // console.log("win start", winner);
    for (let i = 0; i < board.length; i++) {
      if (board[i] === null) {
        const newBoard = board;
        newBoard[i] = "*";
        setBoard([...newBoard]);
      }
    }
    setWinMessage(` ${winner === "Y" ? "O" : "X"} wins `);
  };

  return {
    board,
    winMessage,
    isNextX,
    calculateWinner,
    handleClick,
    resetGame,
    xList,
    yList,
  };
};

export default useTicTacToe;
