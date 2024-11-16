import { motion } from "framer-motion";
import Button from "./Button";

const variants = {
  hiddenLeft: { opacity: 0, x: -50 },
  hiddenRight: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

function Portfolio() {
  return (
    <div>
      <div className="bg-[url('code-background-2.JPG')] bg-cover bg-center h-screen w-full text-white px-32 py-32">
        <h1 className=" text-7xl font-bold">
          Hi !
          <br /> I am Yiwen Wang
        </h1>
        <p className="text-gray-300 pt-4">
          Need a talented full-stack developer? Let me turn your ideas into
          reality.
        </p>
        <div className="pt-5 flex flex-row gap-4">
          <Button variation="secondary">Hire me</Button>
          <Button variation="secondary">Download resume</Button>
        </div>
      </div>
      <div>
        <motion.div
          variants={variants}
          initial="hiddenLeft"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          123
        </motion.div>

        <motion.div
          variants={variants}
          initial="hiddenRight"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          456
        </motion.div>
      </div>
    </div>
  );
}

export default Portfolio;
