import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function ProjectCard({ image, title, description, tabs, url, gitUrl }) {
  return (
    <NavLink
      to={url || gitUrl}
      className="sm:w-5/12 sm:h-[550px] w-full h-fit relative"
    >
      <motion.div
        className="rounded-xl border-white border-2 h-full"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img
          src={image}
          alt="Preview image not available"
          className="w-full h-2/5 rounded-xl"
        />
        <div className="px-7 py-4 flex flex-col">
          <div className="font-bold text-xl py-2">{title}</div>
          <div className="text-gray-500 leading-5 py-1 min-h-20">
            {description}
          </div>
          <div className="flex flex-row flex-wrap gap-2 pt-4">
            {tabs.map((item, index) => (
              <div
                key={index}
                className="border border-purple-500 rounded-md px-2 py-0.5"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="flex flex-row gap-4 justify-end items-center py-4 bottom-0 right-3 absolute">
            {url && (
              <NavLink to={url}>
                <button className="bg-slate-800 rounded-md px-3 py-2 hover:bg-slate-700">
                  <TbWorld className="w-5 h-5" />
                </button>
              </NavLink>
            )}
            <NavLink to={gitUrl}>
              <button className="bg-white text-slate-900 rounded-md px-3 py-2 hover:bg-slate-200">
                <FaGithub className="w-5 h-5" />
              </button>
            </NavLink>
          </div>
        </div>
      </motion.div>
    </NavLink>
  );
}

export default ProjectCard;
