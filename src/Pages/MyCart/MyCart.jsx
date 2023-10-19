import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const MyCart = () => {
  const [orderData, setOrderData] = useState(useLoaderData());

  let handleDelete = (id, name) => {
    swal({
      title: `Are you sure you want to delete ${name}?`,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:5000/delete/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then(() => {
            const updatedData = orderData.filter((item) => item._id !== id);
            setOrderData(updatedData);
          });

        swal(`${name} has been deleted!`, {
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      {orderData.length === 0 ? (
        <div className="bg-gray-100 h-screen justify-center">
          <center className="pt-24 m-auto">
            <svg
              className="emoji-404 "
              enableBackground="new 0 0 226 249.135"
              height="249.135"
              id="Layer_1"
              overflow="visible"
              version="1.1"
              viewBox="0 0 226 249.135"
              width="226"
              xmlSpace="preserve"
            >
              <circle cx="113" cy="113" fill="#FFE585" r="109" />
              <line
                enableBackground="new    "
                fill="none"
                opacity="0.29"
                stroke="#6E6E96"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="8"
                x1="88.866"
                x2="136.866"
                y1="245.135"
                y2="245.135"
              />
              <line
                enableBackground="new    "
                fill="none"
                opacity="0.17"
                stroke="#6E6E96"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="8"
                x1="154.732"
                x2="168.732"
                y1="245.135"
                y2="245.135"
              />
              <line
                enableBackground="new    "
                fill="none"
                opacity="0.17"
                stroke="#6E6E96"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="8"
                x1="69.732"
                x2="58.732"
                y1="245.135"
                y2="245.135"
              />
              <circle cx="68.732" cy="93" fill="#6E6E96" r="9" />
              <path
                d="M115.568,5.947c-1.026,0-2.049,0.017-3.069,0.045  c54.425,1.551,98.069,46.155,98.069,100.955c0,55.781-45.219,101-101,101c-55.781,0-101-45.219-101-101  c0-8.786,1.124-17.309,3.232-25.436c-3.393,10.536-5.232,21.771-5.232,33.436c0,60.199,48.801,109,109,109s109-48.801,109-109  S175.768,5.947,115.568,5.947z"
                enableBackground="new    "
                fill="#FF9900"
                opacity="0.24"
              />
              <circle cx="156.398" cy="93" fill="#6E6E96" r="9" />
              <ellipse
                cx="67.732"
                cy="140.894"
                enableBackground="new    "
                fill="#FF0000"
                opacity="0.18"
                rx="17.372"
                ry="8.106"
              />
              <ellipse
                cx="154.88"
                cy="140.894"
                enableBackground="new    "
                fill="#FF0000"
                opacity="0.18"
                rx="17.371"
                ry="8.106"
              />
              <path
                d="M13,118.5C13,61.338,59.338,15,116.5,15c55.922,0,101.477,44.353,103.427,99.797  c0.044-1.261,0.073-2.525,0.073-3.797C220,50.802,171.199,2,111,2S2,50.802,2,111c0,50.111,33.818,92.318,79.876,105.06  C41.743,201.814,13,163.518,13,118.5z"
                fill="#FFEFB5"
              />
              <circle
                cx="113"
                cy="113"
                fill="none"
                r="109"
                stroke="#6E6E96"
                strokeWidth="8"
              />
            </svg>
            <div className=" tracking-widest mt-4">
              <span className="text-gray-500 text-6xl block">
                <span>OOPS!!</span>
              </span>
              <span className="text-gray-500 text-xl">
                You have not added any products to your cart yet
              </span>
            </div>
          </center>
          <center className="mt-6">
            <Link
              to="/"
              className="text-gray-500 font-mono text-xl bg-gray-200 p-3 rounded-md hover:shadow-md"
            >
              Go Home
            </Link>
          </center>
        </div>
      ) : (
        <section className=" bg-gray-100 py-12 sm:py-16 lg:py-20">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center">
              <h1 className="text-2xl font-semibold text-gray-900">
                Order Summary
              </h1>
            </div>

            <div className="mx-auto mt-8 max-w-md md:mt-12">
              <div className="rounded-3xl bg-white shadow-lg">
                <div className="px-4 py-6 sm:px-8 sm:py-10">
                  <div className="flow-root">
                    <ul className="-my-8">
                      {orderData.map((item, index) => (
                        <li
                          className="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0"
                          key={index}
                        >
                          <div className="shrink-0 relative">
                            <img
                              className="h-24 w-24 max-w-full rounded-lg object-cover"
                              src={item.image}
                            />
                          </div>

                          <div className="relative flex flex-1 flex-col justify-between">
                            <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                              <div className="pr-8 sm:pr-5">
                                <p className="text-base font-semibold text-gray-900">
                                  {item.name}
                                </p>
                                <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">
                                  {item.brand}
                                </p>
                              </div>

                              <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                                <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">
                                  ${item.price}
                                </p>
                              </div>
                            </div>

                            <div className="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                              <button
                                onClick={() =>
                                  handleDelete(item._id, item.name)
                                }
                                type="button"
                                className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900"
                              >
                                <svg
                                  className="h-5 w-5"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                    className=""
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default MyCart;
