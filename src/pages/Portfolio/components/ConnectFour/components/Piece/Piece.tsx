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
      className={`piece-drop mx-2 my-1 h-12 w-12 rounded-full border-2 border-black ${colorClasses}`}
      style={style}
    ></div>
  );
};

export default Piece;
