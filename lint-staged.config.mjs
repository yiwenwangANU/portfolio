import path from "path";

const buildEslintCommand = (filenames) =>
  `eslint ${filenames.map((f) => path.relative(process.cwd(), f)).join(" ")}`;

const config = {
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
  "**/*.ts?(x)": () => "tsc -b tsconfig.json --noEmit",
  "*": ["prettier --write --ignore-unknown"],
};

export default config;
