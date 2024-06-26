import React from "react";
import { location } from "../data/Location";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LocationCarousel = () => {
  const settings = {
    infinite: true,
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    rows: 2,
    slidesPerRow: 1,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          rows: 2,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          rows: 2,
          slidesPerRow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 2,
          slidesPerRow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {location.map((item) => (
          <div key={item.id} className="py-6">
            <div className="w-[130px] sm:w-[200px] h-[136px] border rounded-lg flex flex-col sm:flex-row justify-center items-center gap-2 p-4 shadow-flag">
              <img className="w-[56.25px] h-[45px] rounded-[10px]" src={item.url} alt="logo" />
              <span className="font-[IBM Plex Sans Hebrew] text-center sm:text-left tracking-tight">
                <p className="text-[16px] sm:text-xl font-semibold">{item.name}</p>
                <p className="text-[18px] sm:text-2xl text-blue-500 font-bold">
                  {item.ips}IPs
                </p>
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default LocationCarousel;
