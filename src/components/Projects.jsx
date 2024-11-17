import ProjectCard from "./ProjectCard";

const projectsInfo = [
  {
    image: "wild-oasis-admin.jpg",
    title: "Wild Oasis - Admin Backend",
    description: "Some description",
    tabs: [0, 1],
    url: "https://wild-oasis-v2-hr4ywrovh-yiwens-projects-7b8f585a.vercel.app",
    gitUrl: "https://github.com/yiwenwangANU/wild-oasis-v2",
  },
];
function Projects() {
  return (
    <div className="px-96 pt-20 text-white">
      <div className="text-white text-3xl font-bold">Recent Projects</div>
      <div className="text-gray-300 text-lg py-3">
        Here are some of the projects I&apos;ve worked on. Check out{" "}
        <a
          href="https://github.com/yiwenwangANU/"
          className="underline text-purple-500 hover:text-purple-400"
        >
          {" "}
          GitHub
        </a>{" "}
        for more.
      </div>
      <div className="py-6">
        {projectsInfo.map((item) => (
          <ProjectCard
            image={item.image}
            title={item.title}
            description={item.description}
            tabs={item.tabs}
            url={item.url}
            gitUrl={item.gitUrl}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
