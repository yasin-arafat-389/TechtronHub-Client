import { Link, useLoaderData } from "react-router-dom";
import { Slider } from "../../Components/Carousel/Carousel";
import { useEffect, useState } from "react";
import { Rating } from "@material-tailwind/react";

const BrandPage = () => {
  let data = useLoaderData();

  let [prod, setProd] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProd(data));
  }, []);

  let products = prod.filter((br) => br.brand === data.name);

  return (
    <div className="">
      <div className="h-[500px] mx-auto">
        <Slider data={data} />
      </div>

      {products.length === 0 ? (
        <div>
          <section className="flex items-center h-full sm:p-16 dark:bg-gray-900 dark:text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-40 h-40 dark:text-gray-600"
              >
                <path
                  fill="currentColor"
                  d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
                ></path>
                <rect
                  width="176"
                  height="32"
                  x="168"
                  y="320"
                  fill="currentColor"
                ></rect>
                <polygon
                  fill="currentColor"
                  points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"
                ></polygon>
                <polygon
                  fill="currentColor"
                  points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"
                ></polygon>
              </svg>
              <p className="text-3xl">
                Looks like no product is available from {data.name} right now!
              </p>
              <Link
                rel="noopener noreferrer"
                to="/"
                className="px-8 py-3 font-semibold rounded dark:bg-green-400 dark:text-gray-900"
              >
                Back to homepage
              </Link>
            </div>
          </section>
        </div>
      ) : (
        <>
          <div className="max-w-2xl mx-auto text-center my-10">
            <h2
              className={`text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl`}
            >
              Featured <span className="text-blue-600">{data.name}</span>{" "}
              Products
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto justify-items-center mt-20 mb-20 gap-10">
            {products.map((item, index) => (
              <div
                className="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md"
                key={index}
              >
                <a
                  className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
                  href="#"
                >
                  <img className="object-cover w-full" src={item.image} />
                </a>
                <div className="mt-4 px-5 pb-5">
                  <h5 className="text-xl tracking-tight text-slate-900">
                    {item.name}
                  </h5>

                  <div className="mt-2 mb-3 flex items-center justify-between">
                    <p>
                      <span className="text-3xl font-bold text-slate-900">
                        ${item.price}
                      </span>
                    </p>
                    <div className="flex items-center">
                      <Rating value={item.rating} readonly />
                      <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
                        {item.rating}.0
                      </span>
                    </div>
                  </div>

                  <h1 className="text-md font-medium tracking-tight text-slate-900">
                    Brand: {item.brand}
                  </h1>
                  <h1 className="text-md font-medium tracking-tight text-slate-900">
                    Type: {item.type}
                  </h1>

                  <Link
                    to={`/brands/details/${item._id}`}
                    className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white bg-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-300 mt-3"
                  >
                    Details
                  </Link>
                  <Link
                    to={`/brands/update/${item._id}`}
                    className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white bg-amber-900 hover:bg-amber-800 focus:outline-none focus:ring-4 focus:ring-blue-300 mt-3"
                  >
                    Update
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BrandPage;
