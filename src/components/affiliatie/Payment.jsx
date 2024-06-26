import React from "react";
import img4 from "../../assets/cardImg1.png";
import img5 from "../../assets/cardImg2.png";
import img6 from "../../assets/cardImg3.png";
import img7 from "../../assets/cardImg4.png";
import img8 from "../../assets/cardImg5.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Payment = () => {
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
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1196,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <main className="w-full py-24">
      <section className="flex flex-col gap-4 mb-12  px-2 sm:px-12 lg:px-24">
        <h1 className="text-[28px] sm:text-[36px]/[48px] text-[#0103EC] font-semibold text-center">
          Payment Options
        </h1>
        <p className="text-[18px] sm:text-[24px]/[48px] text-[#0103EC]  text-center">
          Choose your preferred payout method:
        </p>
      </section>

      <Slider {...settings}>
        <section>
          <div className="w-[189px] h-[90px] flex items-center rounded-xl bg-[#FFFFFF] shadow-custom-inset">
            <img
              className="w-[142.75px] h-[29.28px] mx-auto"
              src={img4}
              alt="card"
            />
          </div>
        </section>
        <section>
          <div className="w-[189px] h-[90px] flex items-center rounded-xl bg-[#FFFFFF] shadow-custom-inset">
            <img
              className="w-[128.1px] h-[32.28px]  mx-auto"
              src={img5}
              alt="card"
            />
          </div>
        </section>

        <section>
          <div className="w-[189px] h-[90px] flex items-center rounded-xl bg-[#FFFFFF] shadow-custom-inset">
            <img
              className="w-[94px] h-[32.12px] mx-auto"
              src={img6}
              alt="card"
            />
          </div>
        </section>

        <section>
          <div className="w-[189px] h-[90px] flex items-center rounded-xl bg-[#FFFFFF] shadow-custom-inset">
            <img
              className="w-[100px] h-[32.3px] mx-auto"
              src={img7}
              alt="card"
            />
          </div>
        </section>

        <section>
          <div className=" w-[189px] h-[90px] flex items-center rounded-xl bg-[#FFFFFF] shadow-custom-inset">
            <img
              className="w-[56.71] h-[44.12px] mx-auto"
              src={img8}
              alt="card"
            />
          </div>
        </section>
      </Slider>
    </main>
  );
};

export default Payment;
