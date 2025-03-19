import { motion } from "framer-motion";
import { HiChevronDoubleDown, HiChevronDoubleRight } from "react-icons/hi";

function MachineLearning() {
  return (
    <div className="text-white xl:px-72 lg:px-44 md:px-16 sm:px-10 px-5 overflow-hidden">
      <motion.div
        className="text-3xl font-bold max-w-4xl"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Aside from being a full stack developer, I am also a machine learning
        Engineer.
      </motion.div>

      <motion.div
        className="pt-1 pb-3 text-gray-500 text-lg"
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        I have experience in building the models including
      </motion.div>
      <div className="flex flex-col gap-10 justify-center items-center mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-xl font-bold pb-3">Computer Vision</div>
          <img src="object detection.jpg" className="rounded-lg" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-xl font-bold pb-3">
            Natural Language Processing
          </div>
          <div className="flex sm:flex-row gap-5 items-center flex-col">
            <img src="tobeornottext.jpg" className="sm:w-3/5 rounded-lg" />
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
          <div className="text-xl font-bold pb-3">Generative Model</div>
          <div className="flex sm:flex-row gap-9 items-center flex-col">
            <img src="cat0.jpg" className="sm:w-1/4 rounded-lg" />
            <HiChevronDoubleRight className="hidden sm:block" />
            <HiChevronDoubleDown className="block sm:hidden" />
            <img src="cat1.jpg" className="sm:w-1/4 rounded-lg" />
            <HiChevronDoubleRight className="hidden sm:block" />
            <HiChevronDoubleDown className="block sm:hidden" />
            <img src="cat2.jpg" className="sm:w-1/4 rounded-lg" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default MachineLearning;
