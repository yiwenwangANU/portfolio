import Column from "./components/Column";

interface Props {
  board: string[][];
  currentPlayer: "red" | "yellow";
  hoveredColumn: number | null;
  handleClick: (col: number) => void;
  onHover: (col: number | null) => void;
}
const GameBoard = ({
  board,
  currentPlayer,
  hoveredColumn,
  handleClick,
  onHover,
}: Props) => {
  const columns = board[0].length;

  return (
    <div
      className="mx-auto grid w-fit grid-cols-7 rounded-lg bg-white p-4 pb-10"
      onMouseLeave={() => onHover(null)}
    >
      {Array.from({ length: columns }, (_, col) => (
        <Column
          key={col}
          column={col}
          cells={board.map((row) => row[col])}
          currentPlayer={currentPlayer}
          hoveredColumn={hoveredColumn}
          handleClick={handleClick}
          onHover={onHover}
        />
      ))}
    </div>
  );
};

export default GameBoard;
