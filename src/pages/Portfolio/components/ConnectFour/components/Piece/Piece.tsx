interface Props {
  color: "red" | "yellow";
  row: number;
  column: number;
}

const Piece = ({ color, row, column }: Props) => {
  const colorClasses = color === "red" ? "bg-rose-500" : "bg-amber-300";
  const style = {
    gridRow: row + 1,
    gridColumn: column + 1,
    "--row": row,
    "--drop-duration": `${250 + row * 60}ms`,
  };

  return (
    <div
      className={`piece-drop w-12 h-12 mx-2 my-1 border-2 border-black rounded-full ${colorClasses}`}
      style={style}
    ></div>
  );
};

export default Piece;
