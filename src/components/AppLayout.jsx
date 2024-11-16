import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
function AppLayout() {
  return (
    <div className="bg-black">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default AppLayout;
