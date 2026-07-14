import { useState } from "react";
import ScoreBoard from "./components/ScoreBoard";
import MainArea from "./MainArea";

const INITIAL_SCORE = {
  red: 0,
  yellow: 0,
};

const ConnectFour = () => {
  const [score, setScore] = useState(INITIAL_SCORE);

  const handleWin = (winner: "red" | "yellow") => {
    setScore((prev) => ({ ...prev, [winner]: prev[winner] + 1 }));
  };

  return (
    <div className="mx-auto flex w-fit items-center gap-5">
      <ScoreBoard player="red" score={score.red} />
      <MainArea handleWin={handleWin} />
      <ScoreBoard player="yellow" score={score.yellow} />
    </div>
  );
};

export default ConnectFour;
