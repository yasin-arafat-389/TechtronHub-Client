/* eslint-disable react/prop-types */
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Carousel({ data }) {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <div className="w-[90%] mx-auto pt-10 ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper rounded-2xl"
        >
          <SwiperSlide>
            {" "}
            <img src={data.ad1} alt="" />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={data.ad2} alt="" />{" "}
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={data.ad3} alt="" />{" "}
          </SwiperSlide>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </>
  );
}
