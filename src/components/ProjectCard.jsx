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
        <div className="px-3 py-2">
          <div>{title}</div>
          <div className="text-gray-50">{description}</div>
          <div className="flex flex-row gap-2">
            {tabs.map((item, index) => (
              <div key={index} className="border border-purple-700 rounded-md">
                {item}
              </div>
            ))}
          </div>
          <NavLink to={url}>web</NavLink>
          <NavLink to={gitUrl}>git</NavLink>
        </div>
      </div>
    </NavLink>
  );
}

export default ProjectCard;
