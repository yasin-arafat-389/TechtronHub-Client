import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import { NavBar } from "../Components/NavBar/NavBar";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";

const MainLayout = () => {
  return (
    <div>
      <ToastContainer />
      <ScrollToTop />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
