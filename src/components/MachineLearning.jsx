import { motion } from "framer-motion";

function MachineLearning() {
  return (
    <div className="overflow-hidden">
      <div className="text-white xl:px-72 lg:px-44 md:px-16 px-10 py-10 flex justify-center items-center">
        <motion.div
          className="text-5xl font-bold max-w-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          Aside from being a full stack developer, I am also a machine learning
          Engineer.
        </motion.div>
      </div>
      <div className="flex justify-center items-center"></div>
    </div>
  );
}

export default MachineLearning;
