import PlayerYellow from "./assets/PlayerYellow";
import PlayerRed from "./assets/PlayRed";

interface Props {
  player: "red" | "yellow";
  score: number;
}
const ScoreBoard = ({ player, score }: Props) => {
  return (
    <div className="flex h-40 w-32 flex-col items-center rounded-xl bg-white font-space-grotesk font-bold uppercase text-black">
      {player === "red" ? (
        <PlayerRed className="-translate-y-8" />
      ) : (
        <PlayerYellow className="-translate-y-8" />
      )}
      <div className="-translate-y-4 text-xl">{player}</div>
      <div className="text-5xl">{score}</div>
    </div>
  );
};

export default ScoreBoard;
