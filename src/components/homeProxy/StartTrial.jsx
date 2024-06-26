import React from "react";
import comp1 from "../../assets/trialCompanyLogo1.png";
import comp2 from "../../assets/trialCompanyLogo2.png";
import comp3 from "../../assets/trialCompanyLogo3.png";
import comp4 from "../../assets/trialCompanyLogo4.png";
import comp5 from "../../assets/trialCompanyLogo5.png";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const StartTrial = () => {
  const settings = {
    infinite: true,
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 770,
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

  const companyLogo = [comp1, comp2, comp3, comp4, comp5];
  return (
    <main className="w-full py-12">
      <section className="text-center px-2">
        <h1 className="text-[28px] sm:text-[40px]/[48.41px] font-semibold text-[#0103EC] capitalize">
          Start your{" "}
          <span className="font-bold bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-transparent bg-clip-text">
            7-day free trial
          </span>
        </h1>
        <p className="text-[18px] sm:text-[20px]/[31.6px] font-medium font-['Inter'] text-[#667085] my-5">
          Join over 4,000+ startups already growing with AccuSolva
        </p>
        <Link to="/signup">
          <button className="w-full sm:w-[130px] h-[44px] bg-[#1300D2] rounded-lg border border-[#1300D2] text-[16px] text-[#FFFFFF] font-['Inter'] font-semibold hover:scale-105 shadow-btn">
            Get Started
          </button>
        </Link>
      </section>

      <section className=" my-12">
        <Slider {...settings}>
          {companyLogo.map((image, index) => (
            <div key={index} className="py-8">
              <img
                className="w-[140.31px] sm:w-[162.31px] h-[40px] sm:h-[48px]"
                src={image}
                alt={`Customer ${index + 1}`}
              />
            </div>
          ))}
        </Slider>
      </section>
    </main>
  );
};

export default StartTrial;
