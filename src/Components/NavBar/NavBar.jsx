import React, { useContext } from "react";
import {
  Typography,
  Button,
  IconButton,
  Collapse,
  Avatar,
} from "@material-tailwind/react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { HiHome } from "react-icons/hi2";
import { BiSolidMessageSquareAdd } from "react-icons/bi";
import { BsCartCheckFill } from "react-icons/bs";
import { IoLogIn } from "react-icons/io5";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./NavBar.css";
import { authContext } from "../../Contexts/AuthContext";
import { toast } from "react-toastify";
import { BiPowerOff } from "react-icons/bi";

export function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);
  let { user, logOut } = useContext(authContext);
  let navigate = useNavigate();

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

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

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <NavLink to="/" className="flex gap-2 items-center text-[18px]">
          <HiHome fontSize={"18px"} />
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <NavLink to="/add" className="flex gap-2 items-center text-[18px]">
          <BiSolidMessageSquareAdd fontSize={"18px"} />
          Add Product
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center gap-x-2 p-1 font-medium"
      >
        <NavLink to="/cart" className="flex gap-2 items-center text-[18px]">
          <BsCartCheckFill fontSize={"18px"} />
          My Cart
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <div className="mx-auto px-4 py-2 lg:px-8 lg:py-4 sticky z-10 top-0 bg-[#ffdb99] ">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <img
          src="https://i.ibb.co/N6ZMf1t/Tech-Tron-removebg-preview.png"
          className="w-[130px]"
        />
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden lg:flex items-center gap-x-2">
          {user ? (
            <>
              <h1>{user.displayName}</h1>
              <Avatar src={user.photoURL} alt="avatar" size="sm" />
              <Button
                onClick={handleLogOut}
                className="flex items-center gap-3 bg-[#9575cd]"
                size="sm"
              >
                <BiPowerOff fontSize={"20px"} />
                Logout
              </Button>
            </>
          ) : (
            <Link to="/login">
              <Button
                className="flex items-center gap-3 bg-[#1877f2]"
                size="sm"
              >
                <IoLogIn fontSize={"20px"} />
                Login
              </Button>
            </Link>
          )}

          <ThemeToggle />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">{navList}</div>
        <div className="flex items-center gap-x-1">
          {user ? (
            <>
              <h1>{user.displayName}</h1>
              <Avatar src={user.photoURL} alt="avatar" size="sm" />
              <Button
                onClick={handleLogOut}
                className="flex items-center gap-3 bg-[#9575cd]"
                size="sm"
              >
                <BiPowerOff fontSize={"20px"} />
                Logout
              </Button>
            </>
          ) : (
            <Link to="/login">
              <Button
                className="flex items-center gap-3 bg-[#1877f2]"
                size="sm"
              >
                <IoLogIn fontSize={"20px"} />
                Login
              </Button>
            </Link>
          )}
          <ThemeToggle />
        </div>
      </Collapse>
    </div>
  );
}
