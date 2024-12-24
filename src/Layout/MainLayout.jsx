import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const MainLayout = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="mb-[90px]">
        <Navbar />
      </div>
      {/* Outlet */}
      <div className="min-h-[calc(100vh-306px)] ">
        <Outlet />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
