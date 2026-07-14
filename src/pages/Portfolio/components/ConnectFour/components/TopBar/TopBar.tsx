import GameLogo from "./components/GameLogo";

interface Props {
  handlePlayAgain: () => void;
}
const TopBar = ({ handlePlayAgain }: Props) => {
  return (
    <div className="flex items-center justify-between px-1 py-5">
      <button className="w-24 rounded-xl bg-violet-700 py-2 text-sm font-bold uppercase leading-none hover:bg-rose-400">
        menu
      </button>
      <GameLogo />
      <button
        className="w-24 rounded-xl bg-violet-700 py-2 text-sm font-bold uppercase leading-none hover:bg-rose-400"
        onClick={handlePlayAgain}
      >
        restart
      </button>
    </div>
  );
};

export default TopBar;
