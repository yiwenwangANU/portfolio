import { useState } from "react";
import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";
import TopBar from "./TopBar";
import GameOverModal from "./components/GameOverModal";
import GameTurnModal from "./components/GameTurnModal";
import checkWin from "./components/GameBoard/utils/checkWin";
import getValidPosition from "./components/GameBoard/utils/getValidPosition";

const INITIAL_SCORE = {
  red: 0,
  yellow: 0,
};

const ConnectFour = () => {
  const [score, setScore] = useState(INITIAL_SCORE);
  const [winner, setWinner] = useState<"red" | "yellow" | null>(null);
  const [currentPlayer, setCurrentPlayer] = useState<"red" | "yellow">("red");

  const [board, setBoard] = useState<string[][]>(
    Array.from({ length: 6 }, () => Array.from({ length: 7 }, () => "")),
  );

  const handleClick = (column: number) => {
    if (winner) return;
    for (let row = 5; row >= 0; row--) {
      if (board[row][column] === "") {
        const newBoard = board.map((r) => [...r]);
        newBoard[row][column] = currentPlayer;
        setBoard(newBoard);
        const winner = checkWin(newBoard, currentPlayer, row, column);
        if (winner) {
          handleWin(winner);
          setWinner(winner);
        }
        setCurrentPlayer(currentPlayer === "red" ? "yellow" : "red");
        break;
      }
    }
  };

  const handleWin = (winner: "red" | "yellow") => {
    setScore((prev) => ({ ...prev, [winner]: prev[winner] + 1 }));
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
    <div className="mx-auto w-fit">
      <TopBar />
      <div className="flex items-center gap-5">
        <ScoreBoard player="red" score={score.red} />
        <GameBoard handleClick={handleClick} board={board} />
        <ScoreBoard player="yellow" score={score.yellow} />
      </div>
      {winner ? (
        <GameOverModal winner={winner} onPlayAgain={handlePlayAgain} />
      ) : (
        <GameTurnModal player={currentPlayer} onTimeOut={handleTimeOut} />
      )}
    </div>
  );
};

export default ConnectFour;
