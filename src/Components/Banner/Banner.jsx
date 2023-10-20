import { useContext } from "react";
import { ThemeContext } from "../../Contexts/ToggleProvider";

const Banner = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div>
      <div
        className={`${isDarkMode ? "bg-[#000]" : ""} pb-6 sm:pb-8 lg:pb-5 pt-5`}
      >
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <section className="min-h-96 relative flex flex-1 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gray-100 py-16 shadow-lg md:py-20 xl:py-48">
            <img
              src="https://i.ibb.co/xfj4tdT/technology-background-1632715.jpg"
              loading="lazy"
              alt="Photo by Fakurian Design"
              className="absolute inset-0 h-full w-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-indigo-500 mix-blend-multiply"></div>

            <div className="relative flex flex-col items-center p-4 sm:max-w-2xl">
              <p className="mb-4 text-center text-lg text-amber-200 sm:text-xl md:mb-8">
                Proudly Unveiling Tomorrow
              </p>
              <h1 className="mb-8 text-center text-2xl font-bold text-white sm:text-5xl md:mb-12 md:text-5xl">
                Discover the Latest Innovations and Gadgets!
              </h1>

              <div className="flex w-full flex-col gap-2.5 sm:flex-row sm:justify-center">
                <a
                  href="#"
                  className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
                >
                  Start now
                </a>

                <a
                  href="#"
                  className="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base"
                >
                  Take tour
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Banner;
