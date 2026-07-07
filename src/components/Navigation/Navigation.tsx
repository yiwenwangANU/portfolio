import { NavLink } from "react-router-dom";
import Button from "@/components/Button";
import "@/styles.css";
import { AiFillHome } from "react-icons/ai";
const Navigation = () => {
  return (
    <div className="dot-pattern sticky top-0 z-10 flex flex-row justify-between rounded-xl bg-neutral-900/50 px-2 py-2 font-semibold text-gray-300 backdrop-blur-sm md:px-16 lg:px-44 xl:px-72">
      <NavLink to="/" className="rounded-xl px-3 py-2 hover:text-slate-50">
        <AiFillHome className="h-6 w-6" />
      </NavLink>

      <NavLink to="/about" className="rounded-xl px-3 py-2 hover:text-slate-50">
        About
      </NavLink>
      <NavLink
        to="/projects"
        className="rounded-xl px-3 py-2 hover:text-slate-50"
      >
        Projects
      </NavLink>

      <NavLink to="/contact" className="hover:text-slate-50">
        <Button size="small">Contact</Button>
      </NavLink>
    </div>
  );
};

export default Navigation;
