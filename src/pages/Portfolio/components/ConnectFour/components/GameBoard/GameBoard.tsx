import Cell from "../Cell";
import Piece from "../Piece";

interface Props {
  board: string[][];
  handleClick: (col: number) => void;
}
const GameBoard = ({ board, handleClick }: Props) => {
  return (
    <div>
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
    </div>
  );
};

export default GameBoard;
