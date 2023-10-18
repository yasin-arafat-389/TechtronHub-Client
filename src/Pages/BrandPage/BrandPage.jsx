import { useLoaderData } from "react-router-dom";
import { Slider } from "../../Components/Carousel/Carousel";

const BrandPage = () => {
  let data = useLoaderData();

  return (
    <div className="">
      <div className="h-[500px] mx-auto">
        <Slider data={data} />
      </div>
    </div>
  );
};

export default BrandPage;
