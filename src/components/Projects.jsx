import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";
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
    <div className="2xl:px-64 xl:px-40 md:px-16 px-10 pt-20 text-white">
      <motion.div
        className="text-white text-4xl font-bold"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Recent Projects
      </motion.div>
      <motion.div
        className="text-gray-300 text-lg py-3"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Here are some of the projects I&apos;ve worked on. Check out my{" "}
        <a
          href="https://github.com/yiwenwangANU/"
          className="underline text-purple-500 hover:text-purple-400"
        >
          {" "}
          GitHub
        </a>{" "}
        for more.
      </motion.div>
      <motion.div
        className="py-6 flex flex-row 2xl:gap-x-32 xl:gap-x-16 gap-x-14 gap-y-20 flex-wrap"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
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
      </motion.div>
    </div>
  );
}

export default Projects;
