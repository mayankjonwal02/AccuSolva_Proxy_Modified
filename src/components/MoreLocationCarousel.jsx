import React from "react";
import { moreLocation } from "../data/MoreLocation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const MoreLocationCarousel = () => {
  const settings = {
    infinite: true,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full mx-auto">
      <div className="py-8">
        <Slider {...settings}>
          {moreLocation.map((item) => (
            <div key={item.id} className="py-6">
              <Link to={item.link}>
                <div className="w-[130px] sm:w-[205px] h-[140px] border-[1px] rounded-[10px] flex flex-col sm:flex-row justify-center items-center gap-2 py-12 shadow-flag bg-white hover:border-[#25BBC5] cursor-pointer">
                  <img
                    className="w-[56.25px] h-[45px] rounded-[10px]"
                    src={item.url}
                    alt="logo"
                  />
                  <span className="font-[IBM Plex Sans Hebrew] text-center sm:text-left tracking-[-3%]">
                    <p className="text-[16px] sm:text-[22px] font-semibold">
                      {item.name}
                    </p>
                    <p className="text-[18px] sm:text-[24px] text-[#69CBFD] font-bold">
                      {item.ips}
                    </p>
                  </span>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default MoreLocationCarousel;
