interface Props {
  row: number;
  column: number;
  handleClick: (column: number) => void;
}

const Cell = ({ row, column, handleClick }: Props) => {
  return (
    <div
      className={`w-12 h-12 mx-2 my-1 border-2 border-black rounded-full bg-[#7a45ff] shadow-[inset_0_8px_0_0_black] hover:cursor-pointer`}
      style={{ gridRow: row + 1, gridColumn: column + 1 }}
      onClick={() => handleClick(column)}
    ></div>
  );
};

export default Cell;
