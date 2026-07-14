import Cell from "../Cell";
import Piece from "../Piece";
import ColumnIndicator from "../ColumnIndicator";

interface Props {
  column: number;
  cells: string[];
  currentPlayer: "red" | "yellow";
  hoveredColumn: number | null;
  handleClick: (column: number) => void;
  handleHover: (column: number | null) => void;
}

const Column = ({
  column,
  cells,
  currentPlayer,
  hoveredColumn,
  handleClick,
  handleHover,
}: Props) => {
  return (
    <div className="contents">
      <ColumnIndicator
        column={column}
        color={currentPlayer}
        visible={column === hoveredColumn}
      />
      {cells.map((_, row) => (
        <Cell
          key={`${row}-${column}`}
          row={row}
          column={column}
          handleClick={handleClick}
          handleHover={handleHover}
        />
      ))}
      {cells.map((cell, row) =>
        cell ? (
          <Piece
            key={`piece-${row}-${column}`}
            color={cell as "red" | "yellow"}
            row={row}
            column={column}
          />
        ) : null,
      )}
    </div>
  );
};

export default Column;
