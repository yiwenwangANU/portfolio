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
    <div className="text-white px-32 py-20">
      <div className="text-2xl font-bold">Skills</div>
      <div className="flex flex-row flex-wrap gap-3 py-5">
        {skills.map((item, index) => {
          const color = colors[index % colors.length];
          return (
            <span
              key={item}
              className={`px-2 py-1 border-2 border-${color} rounded-2xl text-sm`}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
