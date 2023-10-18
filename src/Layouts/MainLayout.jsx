import { Outlet } from "react-router-dom";
import { NavBar } from "../Components/NavBar/NavBar";
import Footer from "../Components/Footer/Footer";
import { ToastContainer } from "react-toastify";

const MainLayout = () => {
  return (
    <div>
      <ToastContainer />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
