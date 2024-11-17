import Button from "./Button";
import { motion } from "framer-motion";

function FrontPage() {
  return (
    <div className="bg-[url('code-background-3.jpg')] bg-cover bg-center h-screen w-full text-white px-72 py-40">
      <motion.h1
        className=" text-9xl font-bold"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Hi !
        <br /> I am Yiwen Wang
      </motion.h1>
      <motion.p
        className="text-gray-300 py-6 text-xl"
        initial={{ opacity: 0, x: 150 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Need a talented full-stack developer? Let me turn your ideas into
        reality.
      </motion.p>
      <motion.div
        className="flex flex-row gap-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <Button variation="secondary">Hire me</Button>
        <Button variation="secondary">Download resume</Button>
      </motion.div>
    </div>
  );
}

export default FrontPage;
