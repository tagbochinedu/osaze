import { Link } from "react-router-dom";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation } from "swiper";

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={false}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider1 px-8 md:px-20 overflow-hidden">
            <div className="bg-white text-black w-max rounded-tl-md rounded-br-md rounded-tr-3xl rounded-bl-3xl pt-4 pb-10 px-6 relative top-72">
              <h4 className="text-4xl font-bold">Women</h4>
              <p className="mt-4 mb-6 text-xl">
                Shop trends across the world
              </p>{" "}
              <Link
                className="bg-black text-white p-3.5 text-xl font-semibold"
                to="/women"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider2 px-8 md:px-20 overflow-hidden">
            <div className="bg-white text-black lg:w-max rounded-tl-md rounded-br-md rounded-tr-3xl rounded-bl-3xl pt-4 pb-10 px-6 relative top-72">
              <h4 className="text-4xl font-bold">Men</h4>
              <p className="mt-4 mb-6 text-xl">
                Step out in game changing designs that make you look the best
              </p>{" "}
              <Link
                className="bg-black text-white p-3.5 text-xl font-semibold"
                to="/men"
              >
                Shop Men
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider3 px-8 md:px-20 overflow-hidden">
            <div className="bg-white text-black w-max rounded-tl-md rounded-br-md rounded-tr-3xl rounded-bl-3xl pt-4 pb-10 px-6 relative top-72">
              <h4 className="text-4xl font-bold">Women</h4>
              <p className="mt-4 mb-6 text-xl">
                Wear the best accessories
              </p>{" "}
              <Link
                className="bg-black text-white p-3.5 text-xl font-semibold"
                to="/accessories"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider4 px-8 md:px-20 overflow-hidden">
            {" "}
            <div className="bg-white text-black lg:w-max rounded-tl-md rounded-br-md rounded-tr-3xl rounded-bl-3xl pt-4 pb-10 px-6 relative top-72">
              <h4 className="text-4xl font-bold">Men</h4>
              <p className="mt-4 mb-6 text-xl">Don't just follow the trends, lead them</p>{" "}
              <Link
                className="bg-black text-white p-3.5 text-xl font-semibold"
                to="/Accessories"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
