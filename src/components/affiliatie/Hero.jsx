import React from "react";
import img1 from "../../assets/AffHeroImg.png";
import img2 from "../../assets/AffBgleft.png";
import img3 from "../../assets/AffBgRight.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="w-full pt-[65px] sm:pt-[75px]">
      <div
        className={`relative flex flex-col sm:flex-row justify-center items-center gap-4 lg:gap-18 px-4 lg:px-[70px] xl:px-[100px] py-7 sm:py-[85px] sm:bg-cover`}
        style={{
          backgroundImage: `url(${img2}),url(${img3})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-col gap-4 sm:gap-[10px]">
          <h1
            className={`flex flex-colt text-[28px] md:text-[35px]/[45px] xl:text-[64px]/[77px] text-white font-semibold`}
          >
            Proxies Affiliate Program By AccuSolva
          </h1>
          <p className="w-[300px] lg:w-[480px] text-[18px] xl:text-[25.29px]/[43.11px] text-white">
            Refer AccuSolva to Others and Earn 5% on Their Purchases!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-[30px] sm:mt-6 text-[18px] font-semibold lg:text-[20px]">
            <Link to='/signup'>
            <button className="border-[1px] rounded-xl w-full  sm:w-[192px] h-[50px] bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-white hover:scale-105">
              Start Earning now
            </button>
            </Link>
          </div>
        </div>
        <div>
          <img className="lg:max-w-[544px]" src={img1} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
