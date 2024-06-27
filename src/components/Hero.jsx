import React from "react";
import bgImg1 from "..//assets/bgImg1.png";
import bgImg2 from "..//assets/bgImg2.png";
import bgtopleft from "..//assets/bgtopleft.png";
import bgtopright from "..//assets/bgtopright.png";
import bgbottomright from "..//assets/bgbottomright.png";
import cardImg1 from "../assets/PHeroImg1.jpg";
import cardImg2 from "../assets/PheroImg2.jpg";
import cardImg3 from "../assets/PheroImg3.jpg";
import cardImg4 from "../assets/PheroImg4.jpg";
import cardImg5 from "../assets/PheroImg5.jpg";
import cardImg6 from "../assets/PheroImg6.jpg";
import cardImg7 from "../assets/PheroImg7.jpg";
import cardImg8 from "../assets/PheroImg8.png";
import cardbgImg from "../assets/PbgThumbnail.png";
import { Link } from "react-router-dom";

const Hero = ({ title1, title2, btn1, btn2, img }) => {
  return (
    <div
      className="relative w-full flex flex-col lg:flex-row lg:justify-center lg:items-center gap-12 xl:gap-24 px-2 sm:px-6 xl:px-[118px] py-28 sm:py-[180px] rounded-br-[50px] bg-cover"
      style={{
        backgroundImage: `url(${bgImg1}), url(${bgImg2})`,
      }}
    >
      <img
        className="absolute top-12 sm:top-6 lg:top-1 left-0"
        src={bgtopleft}
        alt="bg"
      />
      <img
        className="absolute bottom-12 right-0"
        src={bgbottomright}
        alt="bg"
      />
      <img className="absolute top-14 right-0" src={bgtopright} alt="bg" />
      <div className="flex flex-col gap-10 sm:gap-[50px]">
        <h1 className="flex flex-col text-[36px]/[42px] sm:text-[64px]/[77.45px] lg:text-left sm:justify-start font-semibold z-10">
          <span>{title1}</span> <span>{title2}</span>
        </h1>
        <div className=" flex flex-col sm:flex-row sm:items-start lg:items-center gap-4 sm:gap-[30px] text-[15px] sm:text-[18px] font-semibold ">
          <Link to="https://app.accusolvaproxy.com/" className="">
            <button className="border-[1px] rounded-xl w-full lg:w-[192px] h-[50px] bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-white hover:scale-105 shadow-first-btn">
              {btn1}
            </button>
          </Link>
          <Link to="/residential-proxy-price">
            <button className="rounded-xl w-full lg:w-[192px]  h-[50px] text-[#373DA0] hover:scale-105 bg-[#F6FDFF] shadow-inner shadow-second-btn">
              {btn2}
            </button>
          </Link>
        </div>
      </div>

      <div className="group lg:pl-12 px-2">
        <div className="flex gap-2 justify-end items-center">
          <div className="relative w-[95.56px] h-[95.56px] sm:w-[139.56px] sm:h-[139.56px]">
            <img
              className="absolute w-full h-full object-cover rounded-3xl transition-transform duration-300  group-hover:scale-x-50 group-hover:-translate-x-[24px] sm:group-hover:-translate-x-[40px]"
              src={cardImg2}
              alt="cardImg"
            />
          </div>
          <div className="relative w-[95.56px] h-[95.56px] sm:w-[139.56px] sm:h-[139.56px]">
            <img
              className="absolute w-full h-full object-cover rounded-3xl transition-transform duration-300 transform origin-right group-hover:scale-x-150 "
              src={cardImg1}
              alt="cardImg"
            />
          </div>
        </div>

        <div className="flex gap-2 my-2 justify-end items-center">
          <div className="group relative w-[100.56px] h-[100.56px] sm:w-[139.56px] sm:h-[139.56px] overflow-hidden">
            <img
              className="absolute w-[70.63px] h-[70.63px] sm:w-[100.63px] sm:h-[100.63px] top-5 left-3  group-hover:rotate-45"
              src={cardbgImg}
              alt="bg"
            />
            <img
              className="absolute top-3 right-2 sm:top-2 sm:right-4 w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] object-contain rounded-3xl transition-transform duration-300 group-hover:scale-150 group-hover:-translate-x-[26px] group-hover:translate-y-[28px] sm:group-hover:-translate-x-[38px] sm:group-hover:translate-y-[42px]  group-hover:rotate-45"
              src={cardImg8}
              alt="cardImg"
            />
          </div>
          <div className="relative w-[95.56px] h-[95.56px] sm:w-[139.56px] sm:h-[139.56px] overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-3xl"
              src={cardImg3}
              alt="cardImg"
            />
          </div>
          <div className="relative w-[95.56px] h-[95.56px] sm:w-[139.56px] sm:h-[139.56px] overflow-hidden">
            <img
              className="absolute w-full h-full object-cover rounded-3xl"
              src={cardImg4}
              alt="cardImg"
            />
          </div>
        </div>

        <div className="flex gap-2 justify-end items-center">
          <div className="relative w-[95.56px] h-[95.56px] sm:w-[139.56px] sm:h-[139.56px] overflow-hidden">
            <img
              className="w-full h-full rounded-3xl object-cover"
              src={cardImg5}
              alt="cardImg"
            />
          </div>
          <div className="relative w-[95.56px] h-[95.56px] sm:w-[139.56px] sm:h-[139.56px]">
            <img
              className="absolute w-full h-full object-cover rounded-3xl transition-transform duration-300 transform origin-left group-hover:scale-x-150 "
              src={cardImg6}
              alt="cardImg"
            />
          </div>
          <div className="relative w-[95.56px] h-[95.56px] sm:w-[139.56px] sm:h-[139.56px]">
            <img
              className="absolute w-full h-full object-cover rounded-3xl transition-transform duration-300  group-hover:scale-x-50 group-hover:translate-x-[24px] sm:group-hover:translate-x-[40px]"
              src={cardImg7}
              alt="cardImg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
