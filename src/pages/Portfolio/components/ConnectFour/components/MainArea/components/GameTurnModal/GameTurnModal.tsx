import TimerIcon from "./assets/TimerIcon";
import { useEffect, useEffectEvent, useState } from "react";

const TIME = 30;

interface Props {
  player: string;
  onTimeOut: () => void;
}

const GameTurnModal = ({ player, onTimeOut }: Props) => {
  const modal_bg = player === "red" ? "text-[#fd6687]" : "text-amber-300";
  const [timer, setTimer] = useState<number>(TIME);
  const handleTimeOut = useEffectEvent(() => {
    onTimeOut();
  });

  useEffect(() => {
    setTimer(TIME);
    const timeoutId = setTimeout(
      () => {
        handleTimeOut();
      },
      (TIME + 1) * 1000,
    );
    const intervalId = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, [player]);

  return (
    <div className="relative mx-auto w-fit -translate-y-10 font-space-grotesk font-bold">
      <TimerIcon className={`${modal_bg}`} />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-white">
        <p className="text-sm uppercase">{player}&apos;S TURN</p>
        <p className="text-6xl leading-none">{timer}s</p>
      </div>
    </div>
  );
};

export default GameTurnModal;
