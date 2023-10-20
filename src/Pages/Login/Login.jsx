import { Button, Input } from "@material-tailwind/react";
import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../../Contexts/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
  let { login, googleLogin } = useContext(authContext);
  let navigate = useNavigate();
  let location = useLocation();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  let handleLogin = (e) => {
    e.preventDefault();

    login(formData.email, formData.password)
      .then(() => {
        navigate(location?.state ? location.state : "/");
        toast.success("Successfully Logged In!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((error) => {
        if (error) {
          toast.error("Invalid Email or Password!!", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      });
  };

  let handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        navigate(location?.state ? location.state : "/");
        toast.success("Successfully Logged In!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className="bg-gray-200"
      style={{
        background:
          "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
      }}
    >
      <div className="py-10">
        <div className="flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl">
          <div
            className="hidden bg-cover lg:block lg:w-1/2"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80')",
            }}
          ></div>

          <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
            <div className="flex justify-center mx-auto">
              <img
                className="w-[30%]"
                src="https://i.ibb.co/N6ZMf1t/Tech-Tron-removebg-preview.png"
                alt=""
              />
            </div>

            <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
              Welcome back!
            </p>

            <Button
              onClick={handleGoogleLogin}
              size="lg"
              variant="outlined"
              color="blue-gray"
              className="flex items-center gap-3 mx-auto mt-3"
            >
              <FcGoogle fontSize={"25px"} />
              Continue with Google
            </Button>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

              <a
                href="#"
                className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline"
              >
                or login with email
              </a>

              <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
            </div>

            <form onSubmit={handleLogin}>
              <div className="mt-4">
                <Input
                  value={formData.email}
                  onChange={handleInputChange}
                  color="blue"
                  name="email"
                  label="Enter your email"
                  type="email"
                  required
                />
              </div>
              <div className="mt-4">
                <Input
                  value={formData.password}
                  onChange={handleInputChange}
                  color="blue"
                  name="password"
                  label="Enter password"
                  type="password"
                  required
                />
              </div>

              <div className="mt-6">
                <button
                  className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </form>

            <div className="flex items-center justify-center text-center py-4">
              <span className="text-sm text-gray-900 dark:text-gray-200">
                {`Don't`} have an account?
              </span>

              <Link
                to="/register"
                className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
