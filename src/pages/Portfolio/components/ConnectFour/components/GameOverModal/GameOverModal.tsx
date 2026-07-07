interface Props {
  winner: string;
  handlePlayAgain: () => void;
}
const GameOverModal = ({ winner, handlePlayAgain }: Props) => {
  return (
    <div className="mx-auto flex w-fit -translate-y-10 flex-col items-center gap-0.5 rounded-xl border-2 border-black bg-white px-12 py-2 font-space-grotesk font-bold text-black">
      <div className="leading-tight">{winner}</div>
      <div className="text-4xl">WINS</div>
      <button
        className="cursor-pointer rounded-3xl bg-[#7a45ff] px-5 py-2 text-sm uppercase text-white transition duration-300 hover:bg-amber-500"
        onClick={handlePlayAgain}
      >
        Play Again
      </button>
    </div>
  );
};

export default GameOverModal;
