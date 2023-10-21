import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import { NavBar } from "../Components/NavBar/NavBar";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";
import TopLoadingBar from "../Components/TopLoadingBar/TopLoadingBar";

const MainLayout = () => {
  return (
    <div>
      <ToastContainer />
      <TopLoadingBar />
      <ScrollToTop />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
