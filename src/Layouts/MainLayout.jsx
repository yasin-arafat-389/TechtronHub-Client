import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import NavBar from "../Components/NavBar/NavBar";

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
