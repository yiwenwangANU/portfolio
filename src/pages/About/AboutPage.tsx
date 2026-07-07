import Code from "./components/Code";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <div className="px-10 pt-20 md:px-16 xl:px-40 2xl:px-80">
      <motion.div
        className="flex justify-center pb-6 text-4xl font-bold lg:justify-start"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.div>
      <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:gap-2">
        <div className="flex flex-col gap-14 py-3 text-xl leading-8 text-gray-400 lg:w-2/3">
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            Hello! I am <span className="font-semibold">Steven Wang</span>.
            I&apos;m a developer passionate about continuous self-learning. My
            journey started with a foundation in <Code>HTML</Code>,{" "}
            <Code>CSS</Code>,<Code>JavaScript</Code>, <Code>SQL</Code>, and{" "}
            <Code>PHP</Code>
            at university. After graduating, I expanded into <Code>
              AWS
            </Code>, <Code>Kubernetes</Code>,<Code>MongoDB</Code>,{" "}
            <Code>Node.js</Code>, <Code>Express</Code>, <Code>React</Code>,
            <Code>TypeScript</Code>, and <Code>Next.js</Code> to build{" "}
            <span className="font-semibold">dynamic web applications</span>.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            I&apos;m also keen on{" "}
            <span className="font-semibold">machine learning</span>. I studied
            its theories and algorithms during my university years.
            Post-graduation, I applied this knowledge using models from{" "}
            <Code>scikit-learn</Code>, participated in Kaggle challenges, and
            learned <Code>TensorFlow</Code>, earning a certification.
          </motion.p>
        </div>
        <div>
          <motion.img
            src="photo.jpg"
            alt="photo.jpg"
            className="h-[420px] -translate-x-2 rounded-full xl:-translate-x-5 2xl:-translate-x-10"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>
      <div className="py-3 text-xl leading-8 text-gray-400">
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Through this continuous journey of learning and application, I strive
          to{" "}
          <span className="font-semibold">
            blend my expertise in web development and machine learning
          </span>{" "}
          to contribute innovative solutions to complex problems. I&apos;m
          excited about the future of technology and look forward to the
          opportunities that lie ahead.
        </motion.p>
      </div>
    </div>
  );
};

export default AboutPage;
