import { motion } from "framer-motion";
import { HiChevronDoubleDown, HiChevronDoubleRight } from "react-icons/hi";

const MachineLearning = () => {
  return (
    <div className="overflow-hidden px-5 pt-10 sm:px-10 md:px-16 lg:px-44 xl:px-72">
      <motion.div
        className="max-w-4xl text-3xl font-bold"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Aside from being a full stack developer, I am also a machine learning
        Engineer.
      </motion.div>

      <motion.div
        className="pb-3 pt-1 text-lg text-gray-500"
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        I have experience in building the models including
      </motion.div>
      <div className="mx-auto flex flex-col justify-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="pb-3 text-xl font-bold">Computer Vision</div>
          <img src="object detection.jpg" className="rounded-lg" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="pb-3 text-xl font-bold">
            Natural Language Processing
          </div>
          <div className="flex flex-col items-center gap-5 sm:flex-row">
            <img src="tobeornottext.jpg" className="rounded-lg sm:w-3/5" />
            <HiChevronDoubleRight className="hidden sm:block" />
            <HiChevronDoubleDown className="block sm:hidden" />
            <div className="sm:w-2/5">
              [1385, 413, 11, 503, 625, 316, 413, 25, 484, 382, 290, 4928, 734,
              31539, 461, 109773, 18460, 1639, 306, 290, 4246, 316, 17170, 198,
              976, 1925, 963, 326, 76213, 328, 116325, 46505, 412, 2251, 316,
              2304, 21157, 4372, 261, 9624, 328, 31378, 412, 3436, 656, 71442,
              1268, 1373]
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="pb-3 text-xl font-bold">Generative Model</div>
          <div className="flex flex-col items-center gap-9 sm:flex-row">
            <img src="cat0.jpg" className="rounded-lg sm:w-1/3" />
            <HiChevronDoubleRight className="hidden sm:block" />
            <HiChevronDoubleDown className="block sm:hidden" />
            <img src="cat1.jpg" className="rounded-lg sm:w-1/3" />
            <HiChevronDoubleRight className="hidden sm:block" />
            <HiChevronDoubleDown className="block sm:hidden" />
            <img src="cat2.jpg" className="rounded-lg sm:w-1/3" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MachineLearning;
