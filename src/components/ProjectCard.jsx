import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { NavLink } from "react-router-dom";

function ProjectCard({ image, title, description, tabs, url, gitUrl }) {
  return (
    <NavLink to={url}>
      <div className="w-2/5 h-[455px] rounded-xl border border-white">
        <img
          src={image}
          alt="Preview image not available"
          className="w-full h-1/2 rounded-xl"
        />
        <div className="px-7 py-4">
          <div className="font-bold text-xl py-2">{title}</div>
          <div className="text-gray-500 leading-5 py-1">{description}</div>
          <div className="flex flex-row gap-2 pt-4">
            {tabs.map((item, index) => (
              <div
                key={index}
                className="border border-purple-500 rounded-md px-2 py-0.5"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="flex flex-row gap-4 justify-end items-center py-2">
            <NavLink to={url}>
              <button className="bg-slate-800 rounded-md px-3 py-2 hover:bg-slate-700">
                <TbWorld className="w-5 h-5" />
              </button>
            </NavLink>
            <NavLink to={gitUrl}>
              <button className="bg-white text-slate-900 rounded-md px-3 py-2 hover:bg-slate-200">
                <FaGithub className="w-5 h-5" />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </NavLink>
  );
}

export default ProjectCard;
