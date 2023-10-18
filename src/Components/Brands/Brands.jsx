import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../Contexts/ToggleProvider";

const Brands = () => {
  let [brand, setBrand] = useState();
  const { isDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    fetch("http://localhost:5000/brands")
      .then((res) => res.json())
      .then((data) => setBrand(data));
  }, []);

  return (
    <div className={isDarkMode ? "bg-[#000]" : ""}>
      <section
        id="features"
        className="container mx-auto px-4 space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-15"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2
            className={`font-bold ${
              isDarkMode ? "text-[#fff]" : ""
            } text-3xl leading-[1.1] sm:text-3xl md:text-6xl`}
            data-aos="fade-up"
          >
            Top Brands
          </h2>

          <p
            className={`max-w-[85%] ${
              isDarkMode ? "text-[#fff]" : ""
            } leading-normal text-muted-foreground sm:text-lg sm:leading-7"
            data-aos="fade-down`}
          >
            Immerse yourself in the forefront of technological advancement with
            our meticulously curated collection of top brands from industry
            giants such as Google, Sony, and Samsung
          </p>
        </div>

        <div className="mx-auto grid justify-center gap-6 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2 lg:md:grid-cols-3">
          {brand?.map((item, index) => (
            <Link key={index} to="">
              <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                <img
                  className="w-full h-[250px] rounded-t-xl"
                  src={item.image}
                />
                <div className="p-4 md:p-5">
                  <h3 className="text-[30px] text-center font-bold text-gray-800 dark:text-white">
                    {item.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Brands;
