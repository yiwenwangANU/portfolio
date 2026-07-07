import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type ButtonProps = Omit<HTMLMotionProps<"button">, "children"> & {
  variation?: "primary" | "secondary";
  size?: "small" | "medium";
  children?: ReactNode;
};

const Button = ({
  variation = "primary",
  size = "medium",
  children,
  ...rest
}: ButtonProps) => {
  const variations = {
    primary: "bg-opacity-0",
    secondary: "group-hover:bg-opacity-0",
  };
  const sizes = {
    small: "px-3.5 py-1.5",
    medium: "px-5 py-2.5",
  };
  return (
    <motion.button
      {...rest}
      className="group me-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-purple-950 to-indigo-700 p-0.5 font-medium focus:outline-none focus:ring-1 focus:ring-purple-950 group-hover:from-purple-950 group-hover:to-indigo-700"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <span
        className={`relative rounded-md bg-gray-900 transition-all duration-75 ease-in ${variations[variation]} ${sizes[size]}`}
      >
        {children}
      </span>
    </motion.button>
  );
};

export default Button;
