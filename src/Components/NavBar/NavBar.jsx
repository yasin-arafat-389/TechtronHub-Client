import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { Avatar, Button } from "@material-tailwind/react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { authContext } from "../../Contexts/AuthContext";
import { toast } from "react-toastify";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  let { user, logOut } = useContext(authContext);
  let navigate = useNavigate();

  let handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });

    toast.success("Successfully Logged out!", {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigate("/login");
  };

  let activeRoute = `middle none center  rounded-lg bg-blue-500 py-3 px-2 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`;

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="sticky top-0 z-10 bg-amber-100 shadow-lg">
      <nav className="flex items-center justify-between flex-wrap container mx-auto p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img
            src="https://i.ibb.co/N6ZMf1t/Tech-Tron-removebg-preview.png"
            alt="logo"
            className="w-[120px]"
          />
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleOpen}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 5h14a1 1 0 010 2H3a1 1 0 110-2zm14 4H3a1 1 0 100 2h14a1 1 0 100-2z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h12v2H4V6zm0 4h12v2H4v-2zm0 4h12v2H4v-2z"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={
            isOpen
              ? "w-full block flex-grow lg:flex lg:items-center lg:w-auto"
              : "w-full flex-grow hidden lg:flex lg:items-center lg:w-auto"
          }
        >
          <div className="text-sm lg:flex-grow">
            <NavLink
              to="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-[#000]  mr-4 text-[15px] font-semibold"
            >
              {({ isActive }) => (
                <span className={isActive ? activeRoute : ""}>Home</span>
              )}
            </NavLink>
            <NavLink
              to="/add"
              className="block mt-4 lg:inline-block lg:mt-0 text-[#000]  mr-4 text-[15px] font-semibold"
            >
              {({ isActive }) => (
                <span className={isActive ? activeRoute : ""}>Add Product</span>
              )}
            </NavLink>
            <NavLink
              to="/cart"
              className="block mt-4 lg:inline-block lg:mt-0 text-[#000]  mr-4 text-[15px] font-semibold"
            >
              {({ isActive }) => (
                <span className={isActive ? activeRoute : ""}>My Cart</span>
              )}
            </NavLink>
          </div>
          <div className="flex items-center gap-5">
            {user ? (
              <div className="flex gap-4 items-center">
                <h1>{user.displayName}</h1>
                <Avatar src={user.photoURL} alt="avatar" />
                <NavLink to="/login">
                  <Button onClick={handleLogOut}>Logout</Button>
                </NavLink>
              </div>
            ) : (
              <NavLink to="/login">
                <Button>Login</Button>
              </NavLink>
            )}

            <ThemeToggle />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
