import { motion } from "framer-motion";

function MachineLearning() {
  return (
    <>
      <div className="text-white px-72 py-10 flex justify-center items-center">
        <motion.div
          className="text-5xl font-bold max-w-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 3 }}
          viewport={{ once: true }}
        >
          Aside from being a full stack developer, I am also a machine learning
          Engineer.
        </motion.div>
      </div>
      <div className="flex justify-center items-center"></div>
    </>
  );
}

export default MachineLearning;
