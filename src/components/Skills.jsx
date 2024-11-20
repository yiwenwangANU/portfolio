import { motion } from "framer-motion";

function Skills() {
  const skills = [
    "NextJS",
    "Javascript",
    "HTML5",
    "CSS3",
    "TailwindCSS",
    "NodeJS",
    "MongoDB",
    "Express",
    "Restful API",
    "React",
    "Git",
    "PostgreSQL",
    "Redux",
    "Linux",
    "kubernetes",
    "AWS",
    "MySQL",
    "Python",
    "TensorFlow",
    "Scikit-learn",
    "NumPy",
    "Pandas",
  ];
  const colors = ["red-500", "purple-500", "white", "indigo-500", "yellow-500"];
  /* Tailwind need class names from the comment and include them in the final CSS bundle
  border-red-500
  border-purple-500
  border-white
  border-indigo-500
  border-yellow-500
*/
  return (
    <div className="text-white xl:px-72 lg:px-44 md:px-16 px-10 py-20 overflow-hidden">
      <motion.div
        className="text-5xl font-bold"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Skills
      </motion.div>
      <motion.div
        className="flex flex-row flex-wrap gap-4 py-8"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {skills.map((item, index) => {
          const color = colors[index % colors.length];
          return (
            <span
              key={item}
              className={`px-3 py-1 border-2 border-${color} rounded-3xl text-lg`}
            >
              {item}
            </span>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Skills;
