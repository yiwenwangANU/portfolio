interface Props {
  color: "red" | "yellow";
  row: number;
  column: number;
}

const Piece = ({ color, row, column }: Props) => {
  const colorClasses = color === "red" ? "bg-rose-500" : "bg-amber-300";
  return (
    <div
      className={`w-12 h-12 mx-2 my-1 border-2 border-black rounded-full ${colorClasses}`}
      style={{ gridRow: row + 1, gridColumn: column + 1 }}
    ></div>
  );
};

export default Piece;
