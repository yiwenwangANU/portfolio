interface Props {
  row: number;
  column: number;
  handleClick: (column: number) => void;
  handleHover: (column: number) => void;
}

const Cell = ({ row, column, handleClick, handleHover }: Props) => {
  return (
    <div
      className={`mx-2 my-1 h-12 w-12 rounded-full border-2 border-black bg-[#7a45ff] shadow-[inset_0_8px_0_0_black] hover:cursor-pointer`}
      style={{ gridRow: row + 1, gridColumn: column + 1 }}
      onClick={() => handleClick(column)}
      onMouseEnter={() => handleHover(column)}
    ></div>
  );
};

export default Cell;
