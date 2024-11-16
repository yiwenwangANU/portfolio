function Button({ variation = "primary", size = "medium", children }) {
  const variations = {
    primary: "bg-opacity-0",
    secondary: "group-hover:bg-opacity-0",
  };
  const sizes = {
    small: "px-3.5 py-1.5",
    medium: "px-5 py-2.5",
  };
  return (
    <button className="inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-950 to-indigo-700 group-hover:from-purple-950 group-hover:to-indigo-700 text-white focus:ring-4 focus:outline-none focus:ring-purple-800">
      <span
        className={`relative transition-all ease-in duration-75 bg-gray-900 rounded-md ${variations[variation]} ${sizes[size]}`}
      >
        {children}
      </span>
    </button>
  );
}

export default Button;
