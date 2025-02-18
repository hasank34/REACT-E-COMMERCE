import React from "react";
import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    // autoplaySpeed: 2000,
    cssEase: "ease",
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6">
          <div className="">
            <div className="text-5xl font-bold max-md:text-3xl">
              Popüler Ayakkabılar
            </div>
            <div className="text-lg my-4 max-sm:text-sm">
              En popüler ve en yeni ayakkabıları kontrol et.
            </div>
            <div className=" border rounded-full cursor-pointer text-2xl max-sm:text-xl max-sm:h-10 max-sm:w-[100px] w-[200px]  h-16 flex items-center justify-center bg-gray-200 ">
              İncele
            </div>
          </div>
          <img
            className="max-sm:w-[150px]"
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/72c30bcb-c38d-4629-92c9-7107f1d951e0/air-force-1-07-ayakkab%C4%B1s%C4%B1-M5J6C8.png"
            alt="bag1"
          />
        </div>
        <div className="!flex items-center bg-gray-100 px-6">
          <div className="">
            <div className="text-5xl font-bold max-md:text-3xl">
              Popüler Ayakkabılar
            </div>
            <div className="text-lg my-4 max-sm:text-sm">
              En popüler ve en yeni ayakkabıları kontrol et.
            </div>
            <div className="border rounded-full cursor-pointer text-2xl max-sm:text-xl max-sm:h-10 max-sm:w-[100px] w-[200px]  h-16 flex items-center justify-center bg-gray-200">
              İncele
            </div>
          </div>
          <img
            className="max-sm:w-[150px]"
            src="https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.0/w_593,c_limit/2f9e087d-1f0f-4b72-8576-b7b7b64e73ae/air-force-1-07-ayakkab%C4%B1.png"
            alt="bag2"
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
