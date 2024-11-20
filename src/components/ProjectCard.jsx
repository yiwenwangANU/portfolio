import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function ProjectCard({ image, title, description, tabs, url, gitUrl }) {
  return (
    <NavLink to={url || gitUrl}>
      <motion.div
        className="sm:w-[450px] sm:h-[500px] w-full h-fit rounded-xl border-white border-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img
          src={image}
          alt="Preview image not available"
          className="w-fit h-1/2 rounded-xl"
        />
        <div className="px-7 py-4">
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
          <div className="flex flex-row gap-4 justify-end items-center py-4">
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
