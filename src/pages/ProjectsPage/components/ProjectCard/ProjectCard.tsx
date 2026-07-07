import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ProjectCardProps = {
  image: string;
  title: ReactNode;
  description: ReactNode;
  tabs: string[];
  url?: string | null;
  gitUrl: string;
};

const ProjectCard = ({
  image,
  title,
  description,
  tabs,
  url,
  gitUrl,
}: ProjectCardProps) => {
  return (
    <NavLink
      to={url || gitUrl}
      className="relative h-fit w-full sm:h-[550px] sm:w-5/12"
    >
      <motion.div
        className="h-full rounded-xl border-2 border-white"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <img
          src={image}
          alt="Preview image not available"
          className="h-2/5 w-full rounded-xl"
        />
        <div className="flex flex-col px-7 py-4">
          <div className="py-2 text-xl font-bold">{title}</div>
          <div className="min-h-20 py-1 leading-5 text-gray-500">
            {description}
          </div>
          <div className="flex flex-row flex-wrap gap-2 pt-4">
            {tabs.map((item, index) => (
              <div
                key={index}
                className="rounded-md border border-purple-500 px-2 py-0.5"
              >
                {item}
              </div>
            ))}
          </div>
          <div className="absolute bottom-0 right-3 flex flex-row items-center justify-end gap-4 py-4">
            {url && (
              <NavLink to={url}>
                <button className="rounded-md bg-slate-800 px-3 py-2 hover:bg-slate-700">
                  <TbWorld className="h-5 w-5" />
                </button>
              </NavLink>
            )}
            <NavLink to={gitUrl}>
              <button className="rounded-md bg-white px-3 py-2 text-slate-900 hover:bg-slate-200">
                <FaGithub className="h-5 w-5" />
              </button>
            </NavLink>
          </div>
        </div>
      </motion.div>
    </NavLink>
  );
};

export default ProjectCard;
