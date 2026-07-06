import { useState } from "react";
import Cell from "../Cell";

const GameBoard = () => {
  const [board, setBoard] = useState<string[][]>(
    Array.from({ length: 6 }, () => Array.from({ length: 7 }, () => "")),
  );
  const [currentPlayer, setCurrentPlayer] = useState<"red" | "yellow">("red");

  const handleClick = (column: number) => {
    for (let row = 5; row >= 0; row--) {
      if (board[row][column] === "") {
        const newBoard = board.map((r) => [...r]);
        newBoard[row][column] = currentPlayer;
        setBoard(newBoard);
        setCurrentPlayer(currentPlayer === "red" ? "yellow" : "red");
        break;
      }
    }
  };

  return (
    <div className="grid grid-cols-7 bg-white p-4 rounded-lg mx-auto w-fit">
      {Array.from({ length: 6 }).map((_, indexY) =>
        Array.from({ length: 7 }).map((_, indexX) => (
          <Cell
            key={`${indexY}-${indexX}`}
            filled={board[indexY][indexX] as "red" | "yellow" | ""}
            column={indexX}
            handleClick={handleClick}
          />
        )),
      )}
    </div>
  );
};

export default GameBoard;
