import { Input } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url("https://i.ibb.co/cvZxCpt/pngtree-gray-gear-technology-poster-background-material-picture-image-1006228.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="py-20">
        <div className=" w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-md dark:bg-gray-800 bg-white">
          <div className="px-6 py-4">
            <div className="flex justify-center mx-auto">
              <img
                className="w-[35%]"
                src="https://i.ibb.co/N6ZMf1t/Tech-Tron-removebg-preview.png"
                alt=""
              />
            </div>

            <h3 className="mt-3 text-2xl font-medium text-center text-[#000]">
              Sign Up
            </h3>

            <p className="mt-1 text-center text-[#000] ">
              Sign Up to join our community
            </p>

            <form>
              <div className="w-full mt-4">
                <Input
                  color="blue"
                  label="Enter your Name"
                  name="name"
                  required
                />
              </div>
              <div className="w-full mt-4">
                <Input
                  color="blue"
                  label="Enter your Photo URL"
                  name="photo"
                  required
                />
              </div>
              <div className="w-full mt-4">
                <Input
                  color="blue"
                  label="Enter your email"
                  name="email"
                  type="email"
                  required
                />
              </div>
              <div className="w-full mt-4">
                <Input
                  color="blue"
                  label="Enter a password"
                  name="password"
                  type="password"
                  required
                />
              </div>

              <div className="flex items-center justify-between mt-4">
                <button className="w-full px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                  Sign Up
                </button>
              </div>
            </form>
            <div className="flex items-center justify-center text-center py-4">
              <span className="text-sm text-gray-900 dark:text-gray-200">
                Already have an account?
              </span>

              <Link
                to="/login"
                className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
