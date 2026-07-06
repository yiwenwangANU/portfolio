import type { ReactNode } from "react";

const Code = ({ children }: { children: ReactNode }) => {
  return (
    <span className="text-white text-base px-1 py-0.5 bg-gray-600 rounded-lg">
      {children}
    </span>
  );
};

export default Code;
