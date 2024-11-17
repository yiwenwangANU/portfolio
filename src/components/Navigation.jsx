import { HomeIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
import Button from "./Button";

function Navigation() {
  return (
    <div className="px-32 py-2 font-semibold flex flex-row justify-between sticky top-0 rounded-xl text-gray-300 bg-neutral-900/50 z-10 backdrop-blur-md">
      <NavLink to="/" className="w-6">
        <HomeIcon className=" hover:text-slate-50 px-3 py-2 rounded-xl" />
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
