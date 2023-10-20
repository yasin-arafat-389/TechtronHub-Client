import { Button } from "@material-tailwind/react";
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
        fetch(`https://techtron-hub-server.vercel.app/delete/${id}`, {
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
      {orderData?.length === 0 ? (
        <div className="bg-gray-100 flex flex-col py-20 justify-center">
          <img
            className="mx-auto  my-50"
            src="https://i.ibb.co/v3XtdVh/empty-cart.png"
            alt=""
          />
          <Link to="/" className="mx-auto mt-10">
            <Button color="amber">Go Home</Button>
          </Link>
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
