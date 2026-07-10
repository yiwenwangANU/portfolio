import { useState } from "react";
import Cell from "../Cell";
import Piece from "../Piece";
import checkWin from "./utils/checkWin";
import GameOverModal from "../GameOverModal";
import GameTurnModal from "../GameTurnModal";
import getValidPosition from "./utils/getValidPosition";

const GameBoard = () => {
  const [board, setBoard] = useState<string[][]>(
    Array.from({ length: 6 }, () => Array.from({ length: 7 }, () => "")),
  );
  const [currentPlayer, setCurrentPlayer] = useState<"red" | "yellow">("red");
  const [winner, setWinner] = useState<"red" | "yellow" | null>(null);

  const handleClick = (column: number) => {
    if (winner) return;
    for (let row = 5; row >= 0; row--) {
      if (board[row][column] === "") {
        const newBoard = board.map((r) => [...r]);
        newBoard[row][column] = currentPlayer;
        setBoard(newBoard);
        setWinner(checkWin(newBoard, currentPlayer, row, column));
        setCurrentPlayer(currentPlayer === "red" ? "yellow" : "red");
        break;
      }
    }
  };

  const handlePlayAgain = () => {
    setBoard(
      Array.from({ length: 6 }, () => Array.from({ length: 7 }, () => "")),
    );
    setWinner(null);
    setCurrentPlayer("red");
  };

  const handleTimeOut = () => {
    const validPosition = getValidPosition(board);
    handleClick(validPosition[0]);
  };

  return (
    <>
      <div className="mx-auto grid w-fit grid-cols-7 rounded-lg bg-white p-4 pb-10">
        {board.map((row, indexY) =>
          row.map((_, indexX) => (
            <Cell
              key={`${indexY}-${indexX}`}
              row={indexY}
              column={indexX}
              handleClick={handleClick}
            />
          )),
        )}
        {board.map((row, indexY) =>
          row.map((cell, indexX) =>
            cell ? (
              <Piece
                key={`piece-${indexY}-${indexX}`}
                color={cell as "red" | "yellow"}
                row={indexY}
                column={indexX}
              />
            ) : null,
          ),
        )}
      </div>
      {winner ? (
        <GameOverModal winner={winner} onPlayAgain={handlePlayAgain} />
      ) : (
        <GameTurnModal player={currentPlayer} onTimeOut={handleTimeOut} />
      )}
    </>
  );
};

export default GameBoard;
