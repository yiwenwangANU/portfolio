interface Props {
  filled: "red" | "yellow" | "";
  column: number;
  handleClick: (column: number) => void;
}

const fillClasses: Record<"red" | "yellow", string> = {
  red: "bg-rose-500",
  yellow: "bg-amber-300",
};

const Cell = ({ filled, column, handleClick }: Props) => {
  const colorClasses = filled
    ? fillClasses[filled]
    : "bg-[#7a45ff] shadow-[inset_0_8px_0_0_black]";

  return (
    <div
      className={`w-12 h-12 mx-2 my-1 border-2 border-black rounded-full ${colorClasses}`}
      onClick={() => handleClick(column)}
    ></div>
  );
};

export default Cell;
