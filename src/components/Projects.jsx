import ProjectCard from "./ProjectCard";

const projectsInfo = [
  {
    image: "wild-oasis-admin.jpg",
    title: "Wild Oasis - Admin Backend",
    description:
      "The Wild Oasis is one hotel management web app, which enables employees to manage cabins, bookings, and guest information efficiently.",
    tabs: ["React", "Redux", "Supabase"],
    url: "https://wild-oasis-v2-hr4ywrovh-yiwens-projects-7b8f585a.vercel.app",
    gitUrl: "https://github.com/yiwenwangANU/wild-oasis-v2",
  },
  {
    image: "wild-oasis-website.jpg",
    title: "The Wild Oasis",
    description:
      "The Wild Oasis is a hotel booking app, that allows users to search and reserve accommodations with a user-friendly interface.",
    tabs: ["Nextjs", "React", "TailwindCSS", "Supabase"],
    url: "https://wild-oasis-website-taupe.vercel.app/",
    gitUrl: "https://github.com/yiwenwangANU/wild-oasis-website",
  },
  {
    image: "fast-pizza-co.jpg",
    title: "Fast React Pizza Co.",
    description:
      "Welcome to Fast React Pizza Co.! Our intuitive app is crafted to make your pizza ordering process effortless and enjoyable.",
    tabs: ["React", "JavaScript", "TailwindCSS", "Redux"],
    url: null,
    gitUrl: "https://github.com/yiwenwangANU/Fast_React_Pizza_Co",
  },
];
function Projects() {
  return (
    <div className="px-96 pt-20 text-white">
      <div className="text-white text-4xl font-bold">Recent Projects</div>
      <div className="text-gray-300 text-lg py-3">
        Here are some of the projects I&apos;ve worked on. Check out my{" "}
        <a
          href="https://github.com/yiwenwangANU/"
          className="underline text-purple-500 hover:text-purple-400"
        >
          {" "}
          GitHub
        </a>{" "}
        for more.
      </div>
      <div className="py-6 flex flex-row gap-x-32 gap-y-20 flex-wrap">
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
