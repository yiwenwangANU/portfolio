import { NavLink } from "react-router-dom";
import Button from "./Button";
import { motion } from "framer-motion";

function FrontPage() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Yiwen Wang_CV.pdf";
    link.download = "Yiwen Wang_CV.pdf";
    link.click();
  };
  return (
    <div className="overflow-hidden bg-[url('/code-background-3.jpg')] bg-cover bg-center h-screen w-full box-border text-white xl:px-72 lg:px-44 md:px-16 px-10 py-40">
      <motion.h1
        className="xl:text-8xl lg:text-7xl md:text-6xl text-6xl font-bold"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        Hi !
        <br /> I am Yiwen Wang
      </motion.h1>

      <motion.p
        className="text-gray-300 py-6 text-xl"
        initial={{ opacity: 0, x: 0 }}
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
        <NavLink to="/contact">
          <Button variation="secondary">Hire me</Button>
        </NavLink>
        <Button variation="secondary" onClick={handleDownload}>
          Download resume
        </Button>
      </motion.div>
    </div>
  );
}

export default FrontPage;
