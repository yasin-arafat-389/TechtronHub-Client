import { Rating } from "@material-tailwind/react";
import { useState } from "react";
import { toast } from "react-toastify";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    image: "",
    name: "",
    brand: "",
    type: "",
    price: "",
    shortDesc: "",
    rating: 0,
  });

  let handleAddProduct = (e) => {
    e.preventDefault();

    fetch("https://techtron-hub-server.vercel.app/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then(() => {
        toast.success("Product Added Successfully!", {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    setFormData({
      image: "",
      name: "",
      brand: "",
      type: "",
      price: "",
      shortDesc: "",
      rating: 0,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRatingChange = (value) => {
    setFormData((prevData) => ({
      ...prevData,
      rating: value,
    }));
  };

  return (
    <div>
      <div className="bg-gray-100 py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              Add a product
            </h2>

            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              Fill up the form with and click add to add a product.
            </p>
          </div>

          <form
            onSubmit={handleAddProduct}
            className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2"
          >
            <div>
              <label
                htmlFor="first-name"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Image
              </label>
              <input
                required
                type="text"
                name="image"
                value={formData.image}
                onChange={handleInputChange}
                className="w-full rounded border bg-white px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>

            <div>
              <label
                htmlFor="last-name"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Product Name
              </label>
              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full rounded border bg-white px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>

            <div className="sm:col-span-2">
              <select
                required
                name="brand"
                value={formData.brand}
                onChange={handleSelectChange}
                className="select select-secondary !border-2 border-grey-200 p-5 w-full max-w-xs"
              >
                <option disabled value="">
                  Brand
                </option>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="Sony">Sony</option>
                <option value="Google">Google</option>
                <option value="Intel">Intel</option>
                <option value="Amazon">Amazon</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Product Type
              </label>
              <input
                required
                value={formData.type}
                onChange={handleInputChange}
                name="type"
                className="w-full rounded border bg-white px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="subject"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Price
              </label>
              <input
                required
                value={formData.price}
                onChange={handleInputChange}
                name="price"
                className="w-full rounded border bg-white  px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
              >
                Short description
              </label>
              <textarea
                required
                value={formData.shortDesc}
                onChange={handleInputChange}
                name="shortDesc"
                className="h-64 w-full rounded border bg-white px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              ></textarea>
            </div>

            <div className="sm:col-span-2 flex items-center">
              <label
                htmlFor="subject"
                className="mr-6 inline-block text-sm text-gray-800 sm:text-base"
              >
                Rating
              </label>

              <Rating
                unratedColor="amber"
                ratedColor="amber"
                value={formData.rating}
                onChange={handleRatingChange}
              />
            </div>

            <div className="flex items-center justify-between sm:col-span-2">
              <button className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
