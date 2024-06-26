import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import customer images
import cus1 from "../../assets/cus1.png";
import cus2 from "../../assets/cus2.png";
import cus3 from "../../assets/cus3.png";
import cus4 from "../../assets/cus4.png";
import cus5 from "../../assets/cus5.png";
import cus6 from "../../assets/cus6.png";
import cus7 from "../../assets/cus7.png";
import cus8 from "../../assets/cus8.png";
import cus9 from "../../assets/cus9.png";
import cus10 from "../../assets/cus10.png";
import cus11 from "../../assets/cus11.png";
import cus12 from "../../assets/cus12.png";
import cus13 from "../../assets/cus13.png";
import cus14 from "../../assets/cus14.png";

const Customers = () => {
  // Slider settings
  const settings = {
    infinite: true,
    dots: false,
    slidesToShow: 6,
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

  const customerImages = [
    cus1,
    cus2,
    cus3,
    cus4,
    cus5,
    cus6,
    cus7,
    cus8,
    cus9,
    cus10,
    cus11,
    cus12,
    cus13,
    cus14,
  ];

  return (
    <div className="w-full py-10">
      <h1 className="text-center text-[28px] sm:text-4xl font-semibold text-blue-700 py-12 sm:py-24">
        Trusted By <span className="font-bold">25,000+ Customers</span>{" "}
        Worldwide
      </h1>
      <div>
        <div>
          <Slider {...settings}>
            {customerImages.map((image, index) => (
              <div key={index} className="py-8">
                <img
                  className="w-[140.31px] sm:w-[162.31px] h-[40px] sm:h-[48px]"
                  src={image}
                  alt={`Customer ${index + 1}`}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Customers;
