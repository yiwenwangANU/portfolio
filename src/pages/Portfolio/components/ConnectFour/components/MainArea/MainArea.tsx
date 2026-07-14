import { useState } from "react";
import GameBoard from "./components/GameBoard";
import GameOverModal from "./components/GameOverModal";
import GameTurnModal from "./components/GameTurnModal";
import TopBar from "./components/TopBar";
import checkWin from "../../utils/checkWin";
import getValidPosition from "../../utils/getValidPosition";
import GameStartModal from "./components/GameStartModal";

interface Props {
  handleWin: (winner: "red" | "yellow") => void;
}
const MainArea = ({ handleWin }: Props) => {
  const [started, setStarted] = useState<boolean>(false);
  const [winner, setWinner] = useState<"red" | "yellow" | null>(null);
  const [currentPlayer, setCurrentPlayer] = useState<"red" | "yellow">("red");

  const [board, setBoard] = useState<string[][]>(
    Array.from({ length: 6 }, () => Array.from({ length: 7 }, () => "")),
  );
  const [hoveredColumn, setHoveredColumn] = useState<number | null>(null);

  const handleGameStart = () => {
    setStarted(true);
  };
  const handleClick = (column: number) => {
    if (winner || !started) return;
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
  const handleHover = (column: number | null) => {
    if (!started) return;
    setHoveredColumn(column);
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
    <div>
      <TopBar onPlayAgain={handlePlayAgain} />
      <GameBoard
        handleClick={handleClick}
        onHover={handleHover}
        board={board}
        currentPlayer={currentPlayer}
        hoveredColumn={hoveredColumn}
      />
      {!started ? (
        <GameStartModal onGameStart={handleGameStart} />
      ) : winner ? (
        <GameOverModal winner={winner} onPlayAgain={handlePlayAgain} />
      ) : (
        <GameTurnModal player={currentPlayer} onTimeOut={handleTimeOut} />
      )}
    </div>
  );
};

export default MainArea;
