import { NavLink } from "react-router-dom";
import Button from "@/components/Button";
import { motion } from "framer-motion";

const FrontPage = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/StevenWangResume.pdf";
    link.download = "StevenWangResume.pdf";
    link.click();
  };
  return (
    <div className="box-border h-screen w-full overflow-hidden bg-[url('/code-background-3.jpg')] bg-cover bg-center px-5 py-40 sm:px-10 md:px-16 lg:px-44 xl:px-72">
      <motion.h1
        className="text-6xl font-bold md:text-6xl lg:text-7xl xl:text-8xl"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Hi !
        <br /> I am Steven Wang
      </motion.h1>

      <motion.p
        className="py-6 text-xl text-gray-300"
        initial={{ opacity: 0, x: 0 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Need a talented full-stack developer? Let me turn your ideas into
        reality.
      </motion.p>

      <motion.div
        className="flex flex-row gap-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <NavLink to="/contact">
          <Button variation="secondary">Hire me</Button>
        </NavLink>
        <Button variation="secondary" onClick={handleDownload}>
          Download resume
        </Button>
      </motion.div>
    </div>
  );
};

export default FrontPage;
