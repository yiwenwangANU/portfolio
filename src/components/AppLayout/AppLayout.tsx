import "@/styles.css";
import { Outlet } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { motion, useScroll } from "framer-motion";
const AppLayout = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="min-h-screen bg-black">
        <Navigation />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default AppLayout;
