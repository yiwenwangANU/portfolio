import Code from "./Code";
import { motion } from "framer-motion";

function About() {
  return (
    <div className="2xl:px-80 xl:px-40 md:px-16 px-10 pt-20 text-white">
      <motion.div
        className="text-white text-4xl font-bold flex justify-center lg:justify-start pb-6"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.div>
      <div className="flex lg:flex-row flex-col justify-between items-center lg:gap-2 gap-6">
        <div className="text-gray-400 text-xl leading-8 py-3 flex flex-col gap-14 lg:w-2/3">
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Hello! I am{" "}
            <span className="text-white font-semibold">Yiwen Wang</span>.
            I&apos;m a developer passionate about continuous self-learning. My
            journey started with a foundation in <Code>HTML</Code>,{" "}
            <Code>CSS</Code>,<Code>JavaScript</Code>, <Code>SQL</Code>, and{" "}
            <Code>PHP</Code>
            at university. After graduating, I expanded into <Code>
              AWS
            </Code>, <Code>Kubernetes</Code>,<Code>MongoDB</Code>,{" "}
            <Code>Node.js</Code>, <Code>Express</Code>, <Code>React</Code>, and{" "}
            <Code>Next.js</Code> to build{" "}
            <span className="text-white font-semibold">
              dynamic web applications
            </span>
            .
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            I&apos;m also keen on{" "}
            <span className="text-white font-semibold">machine learning</span>.
            I studied its theories and algorithms during my university years.
            Post-graduation, I applied this knowledge using models from{" "}
            <Code>scikit-learn</Code>, participated in Kaggle challenges, and
            learned <Code>TensorFlow</Code>, earning a certification.
          </motion.p>
        </div>
        <div>
          <motion.img
            src="photo.jpg"
            alt="photo.jpg"
            className="rounded-full h-[420px] 2xl:-translate-x-10 xl:-translate-x-5 -translate-x-2"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
      <div className="text-gray-400 text-xl leading-8 py-3">
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Through this continuous journey of learning and application, I strive
          to{" "}
          <span className="text-white font-semibold">
            blend my expertise in web development and machine learning
          </span>{" "}
          to contribute innovative solutions to complex problems. I&apos;m
          excited about the future of technology and look forward to the
          opportunities that lie ahead.
        </motion.p>
      </div>
    </div>
  );
}

export default About;
