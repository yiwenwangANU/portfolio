import { motion } from "framer-motion";
import { HiChevronDoubleRight } from "react-icons/hi";

function MachineLearning() {
  return (
    <div className="text-white xl:px-72 lg:px-44 md:px-16 sm:px-10 px-5 overflow-hidden">
      <div className="">
        <motion.div
          className="text-3xl font-bold max-w-4xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
          viewport={{ once: true }}
        >
          Aside from being a full stack developer, I am also a machine learning
          Engineer.
        </motion.div>
      </div>
      <div className="pt-1 pb-3 text-gray-500 text-lg">
        I have experience in building the models including
      </div>
      <div className="flex flex-col gap-5 justify-center items-center mx-auto">
        <div className="">
          <div className="text-xl font-bold pb-3">Computer Vision</div>
          <img src="object detection.jpg" className="rounded-lg" />
        </div>
        <div>
          <div className="text-xl font-bold pb-3">
            Natural Language Processing
          </div>
          <div className="flex flex-row gap-5 items-center">
            <img src="tobeornottext.jpg" className="w-3/5 rounded-lg" />
            <HiChevronDoubleRight />
            <div className="w-2/5">
              [1385, 413, 11, 503, 625, 316, 413, 25, 484, 382, 290, 4928, 734,
              31539, 461, 109773, 18460, 1639, 306, 290, 4246, 316, 17170, 198,
              976, 1925, 963, 326, 76213, 328, 116325, 46505, 412, 2251, 316,
              2304, 21157, 4372, 261, 9624, 328, 31378, 412, 3436, 656, 71442,
              1268, 1373]
            </div>
          </div>
        </div>
        <div>
          <div className="text-xl font-bold pb-3">Generative Model</div>
          <div className="flex flex-row gap-9 items-center">
            <img src="cat0.jpg" className="w-1/4 rounded-lg" />
            <HiChevronDoubleRight />
            <img src="cat1.jpg" className="w-1/4 rounded-lg" />
            <HiChevronDoubleRight />
            <img src="cat2.jpg" className="w-1/4 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MachineLearning;
