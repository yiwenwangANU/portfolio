import { NavLink } from "react-router-dom";
import Button from "./Button";
import "../styles.css";
import { AiFillHome } from "react-icons/ai";
function Navigation() {
  return (
    <div className="xl:px-72 lg:px-44 md:px-16 px-10 py-2 font-semibold flex flex-row justify-between sticky top-0 rounded-xl text-gray-300 bg-neutral-900/50 z-10 backdrop-blur-sm dot-pattern">
      <NavLink to="/" className="hover:text-slate-50 px-3 py-2 rounded-xl">
        <AiFillHome className="w-6 h-6 " />
      </NavLink>
      <div className="flex flex-row gap-16">
        <NavLink
          to="/about"
          className="hover:text-slate-50 px-3 py-2 rounded-xl"
        >
          About me
        </NavLink>
        <NavLink
          to="/projects"
          className="hover:text-slate-50 px-3 py-2 rounded-xl"
        >
          Projects
        </NavLink>
      </div>
      <NavLink to="/contact" className=" hover:text-slate-50">
        <Button size="small">Contact</Button>
      </NavLink>
    </div>
  );
}

export default Navigation;
