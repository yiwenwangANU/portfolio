import TimerIcon from "@/pages/Portfolio/assets/TimerIcon";

interface Props {
  player: string;
  timer: number;
}

const GameTurnModal = ({ player, timer }: Props) => (
  <div className="relative mx-auto w-fit -translate-y-10">
    <TimerIcon className="text-[#fd6687]" />
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white">
      <p className="text-sm font-bold">{player}&apos;S TURN</p>
      <p className="text-6xl font-black leading-none">{timer}s</p>
    </div>
  </div>
);

export default GameTurnModal;
