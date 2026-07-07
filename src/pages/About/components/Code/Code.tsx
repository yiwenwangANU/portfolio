import type { ReactNode } from "react";

const Code = ({ children }: { children: ReactNode }) => {
  return (
    <span className="rounded-lg bg-gray-600 px-1 py-0.5 text-base">
      {children}
    </span>
  );
};

export default Code;
