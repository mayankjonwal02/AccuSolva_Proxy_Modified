import React from "react";
import { Link } from "react-router-dom";

const Hero = ({
  bg,
  title1,
  tcolor,
  content,
  content2,
  btn1,
  btn2,
  btn3,
  img,
  img2,
  bgImg,
  bgStyle,
  rounded,
  link,
}) => {
  return (
    <div className={`w-full ${bg} ${rounded} overflow-hidden pt-16 pb-10`}>
      <div
        className={`relative flex flex-col sm:flex-row justify-center items-center gap-4 lg:gap-18 px-2 lg:px-[50px] xl:px-[118px] py-16 sm:py-[40px] ${bgStyle} z-10`}
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundRepeat: "no-repeat",
        
        }}
      >
        <img
          className={`${img2} absolute hidden sm:block sm:-top-[200px] lg:-top-[230px] xl:-top-[390px] sm:-right-[330px] xl:-right-[430px] -z-10 object-cover`}
          src={img2}
          alt="bgflower"
        />
        <div className="flex flex-col gap-3 sm:gap-[10px]">
          <h1
            className={`flex flex-colt text-[28px] md:text-[35px]/[45px] xl:text-[64px]/[77px] ${tcolor} font-semibold`}
          >
            {title1}
          </h1>
          <p className="text-[18px] xl:text-[25.29px]/[43.11px] text-[#073141] max-w-[643px]">
            {content}
          </p>
          <p className="text-[18px] xl:text-[25.29px]/[43.11px] text-[#073141] max-w-[643px]">
            {content2}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-[20px] sm:mt-6 text-[18px] font-semibold lg:text-[20px]">
            <Link to={link}>
              <button
                className={`${btn1} border-[1px] rounded-xl w-full md:w-[172px] xl:w-[218px] h-[56px] bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-white hover:scale-105 shadow-first-btn`}
              >
                {btn1}
              </button>
            </Link>
            <Link to={link}>
              <button
                className={`${btn3} rounded-xl w-full  md:w-[172px] xl:w-[218px] h-[56px] border-[#4970FF] text-[#373DA0] hover:scale-105 shadow-second-btn`}
              >
                {btn3}
              </button>
            </Link>
            <a href="#pricing">
              <button
                className={`${btn2} rounded-xl w-full  md:w-[172px] xl:w-[218px] h-[56px]  text-[#373DA0] hover:scale-105 shadow-second-btn`}
              >
                {btn2}
              </button>
            </a>
          </div>
        </div>
        <div>
          <img className="lg:max-w-[544px]" src={img} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
