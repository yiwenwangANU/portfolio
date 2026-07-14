import Marker from "./assets/Marker";

interface Props {
  color: "red" | "yellow";
  column: number;
  visible: boolean;
}

const colorClasses: Record<"red" | "yellow", string> = {
  red: "text-rose-400",
  yellow: "text-amber-400",
};

const ColumnIndicator = ({ color, column, visible }: Props) => {
  return (
    <div
      className="pointer-events-none mx-2 flex h-12 w-12 -translate-y-full items-center justify-center"
      style={{ gridRow: 1, gridColumn: column + 1 }}
    >
      <Marker
        className={`${colorClasses[color]} ${visible ? "opacity-100" : "opacity-0"}`}
      />
    </div>
  );
};

export default ColumnIndicator;
