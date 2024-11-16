import { motion } from "framer-motion";
import FrontPage from "./FrontPage";

const variants = {
  hiddenLeft: { opacity: 0, x: -50 },
  hiddenRight: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

function Portfolio() {
  return (
    <div>
      <FrontPage />
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
