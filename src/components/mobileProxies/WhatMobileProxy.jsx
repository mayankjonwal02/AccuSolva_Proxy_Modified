import React from "react";
import { Link } from "react-router-dom";

const WhatMobileProxy = ({
  bgcolor,
  title,
  tcolor,
  content1,
  contcolor,
  content2,
  btn,
  link1,
  btn2,
  link2,
  img,
  rowReverse,
  bgImg,
  rotateImg,
}) => {
  return (
    <div
      className={`w-full flex flex-col ${rowReverse} ${bgcolor} justify-center items-center gap-10 px-2 lg:px-[50px] xl:px-[118px] py-24 bg-cover`}
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div className="sm:w-[40%]">
        <img className={`${rotateImg}`} src={img} alt="hero" />
      </div>
      <div className="sm:w-[60%] flex flex-col gap-2 sm:gap-[10px] z-10">
        <h1
          className={`flex flex-col text-[28px] md:text-[40px] ${tcolor} font-semibold `}
        >
          {title}
        </h1>
        <p
          className={`text-[14px] lg:text-[20px]/[31.6px] ${contcolor} font-['IBM Plex Sans']`}
        >
          {content1}
        </p>
        <p
          className={`text-[14px] lg:text-[20px]/[31.6px] ${contcolor} font-['IBM Plex Sans'] `}
        >
          {content2}
        </p>
        <div className="flex flex-wrap justify-center sm:justify-normal sm:flex-nowrap gap-6">
          <Link to={link1} >
            <button
              className={`${btn}  w-[195px] h-[50px] text-[14px]/[18.2px] font-bold text-white rounded-xl bg-gradient-to-t from-[#1300D2] to-[#7B10A0] sm:mt-6 hover:scale-105`}
            >
              {btn}
            </button>
          </Link>
          <Link to={link2}>
            <button
              className={`${btn2} w-[195px] h-[50px] text-[14px]/[18.2px] text-[#373DA0] font-bold rounded-xl bg-[#F6FDFF] border-[2px] border-[#4970FF] sm:mt-6 hover:scale-105`}
            >
              {btn2}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhatMobileProxy;
