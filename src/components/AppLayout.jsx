import "../styles.css";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { motion, useScroll } from "framer-motion";
function AppLayout() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="bg-black">
        <Navigation />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default AppLayout;
