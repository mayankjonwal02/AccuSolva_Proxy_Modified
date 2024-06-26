import React from "react";
import img1 from "../../assets/payImg.png";
import img2 from "../../assets/payIcon1.png";
import img3 from "../../assets/payIcon2.png";
import img4 from "../../assets/cardImg1.png";
import img5 from "../../assets/cardImg2.png";
import img6 from "../../assets/cardImg3.png";
import img7 from "../../assets/cardImg4.png";
import img8 from "../../assets/cardImg5.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Pay = () => {
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
          slidesToShow: 2,
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
    <main className="w-full py-12 sm:py-12">
      <section className="mx-auto">
        <h1 className="text-[28px] text-center sm:text-[36px]/[34px] font-medium text-[#0103EC] pb-10 sm:pb-24">
          <span className="bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-transparent bg-clip-text">
            Pay
          </span>{" "}
          with these simple methods
        </h1>

        <section className="flex flex-col lg:flex-row justify-between px-2 sm:px-24 gap-10 lg:gap-4 pb-10">
          <div className="flex flex-col justify-between gap-6 py-4">
            <section>
              <h1 className="text-2xl text-[#0A2540] font-medium border-l-[2px] border-[#635BFF] pl-4 mb-2">
                SSL Secure Payment
              </h1>
              <p className="text-sm text-[#425466] font-medium pl-4">
                Your information is protected by 256-bit SSL
              </p>
            </section>

            <section>
              <h1 className="text-2xl text-[#0A2540] font-medium border-l-[2px] border-[#635BFF] pl-4 mb-2">
                50 +{" "}
              </h1>
              <p className="text-sm text-[#425466] font-medium pl-4">
                Payment methods available on AccuSolva
              </p>
            </section>

            <section className="flex flex-col gap-4">
              <h1 className="text-2xl text-[#0A2540] font-medium border-l-[2px] border-[#635BFF] pl-4">
                Payment Methods
              </h1>
              <p className="flex gap-4 text-sm text-[#425466] font-medium pl-4">
                <img src={img2} alt="icon" />
                <span className="text-[15px] text-[#425466] font-medium">
                  Payments
                </span>
              </p>
              <p className="flex gap-4 text-sm text-[#425466] font-medium pl-4">
                <img src={img3} alt="icon" />
                <span className="text-[15px] text-[#425466] font-medium">
                  Any Method{" "}
                </span>
              </p>
            </section>
          </div>
          <div>
            <img className="w-[610px] lg:w-[810px] lg:h-[397px]" src={img1} alt="logo" />
          </div>
        </section>

        <Slider {...settings} >
          <section className="m-4">
            <div className="w-[189px] h-[90px] flex items-center rounded-xl bg-[#FFFFFF] shadow-custom-inset">
              <img
                className="w-[142.75px] h-[29.28px] mx-auto"
                src={img4}
                alt="card"
              />
            </div>
          </section>
          <section className="m-4">
            <div className="w-[189px] h-[90px] flex items-center rounded-xl bg-[#FFFFFF] shadow-custom-inset">
              <img
                className="w-[128.1px] h-[32.28px]  mx-auto"
                src={img5}
                alt="card"
              />
            </div>
          </section>

          <section className="m-4">
            <div className="w-[189px] h-[90px] flex items-center rounded-xl bg-[#FFFFFF] shadow-custom-inset">
              <img
                className="w-[94px] h-[32.12px] mx-auto"
                src={img6}
                alt="card"
              />
            </div>
          </section>

          <section className="m-4">
            <div className="w-[189px] h-[90px] flex items-center rounded-xl bg-[#FFFFFF] shadow-custom-inset">
              <img
                className="w-[100px] h-[32.3px] mx-auto"
                src={img7}
                alt="card"
              />
            </div>
          </section>

          <section className="m-4">
            <div className=" w-[189px] h-[90px] flex items-center rounded-xl bg-[#FFFFFF] shadow-custom-inset">
              <img
                className="w-[56.71] h-[44.12px] mx-auto"
                src={img8}
                alt="card"
              />
            </div>
          </section>
        </Slider>
      </section>
    </main>
  );
};

export default Pay;
