/* eslint-disable react/prop-types */
import { useContext } from "react";
import { authContext } from "../Contexts/AuthContext";
import { Navigate, useLocation } from "react-router-dom";
import { CirclesWithBar } from "react-loader-spinner";
import { toast } from "react-toastify";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  let location = useLocation();

  if (loading)
    return (
      <div className="flex h-screen justify-center items-center">
        <CirclesWithBar
          height="150"
          width="150"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          outerCircleColor=""
          innerCircleColor=""
          barColor=""
          ariaLabel="circles-with-bar-loading"
        />
      </div>
    );

  if (!user) {
    toast.error("You must login first!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    return <Navigate state={location.pathname} to="/login" />;
  }

  return <div>{children}</div>;
};

export default PrivateRoute;
