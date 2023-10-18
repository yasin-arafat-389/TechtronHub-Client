/* eslint-disable react/prop-types */
import { Carousel } from "@material-tailwind/react";

export function Slider({ data }) {
  return (
    <Carousel className="hero-overlay bg-opacity-60">
      <div
        className="h-full bg-black"
        style={{
          backgroundImage: `url(${data.ad1})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          objectFit: "cover",
        }}
      ></div>
      <div
        className="h-full bg-black"
        style={{
          backgroundImage: `url(${data.ad2})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <div
        className="h-full bg-black"
        style={{
          backgroundImage: `url(${data.ad3})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
    </Carousel>
  );
}
