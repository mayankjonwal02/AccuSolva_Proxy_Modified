import React from "react";
import MoreLocationCarousel from "./MoreLocationCarousel";
import { Link } from "react-router-dom";

const MoreLocation = ({ heading1, heading2, desc, btn,bgcolor,bgImg }) => {
  return (
    <div
      className={`max-w-1/2 rounded-tl-[30px] rounded-br-[30px] py-12 sm:py-24 ${bgcolor} bg-cover bg-center px-2`}
      style={{
        backgroundImage: `url(${bgImg})`,
        zIndex: "-1",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col justify-center items-center gap-16 mx-auto ">
        <h1 className="text-[28px] text-center sm:text-[40px]/[48px] font-medium text-[#0103EC]">
          {heading1}{" "}
          <span className="font-bold bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-transparent bg-clip-text">
            {heading2}{" "}
          </span>
        </h1>
        <p className="text-[20px]/[31.6px] text-center text-[#073141B2] max-w-[793px]">
          {desc}
        </p>
        <MoreLocationCarousel />
        <Link to="/location">
          <button
            className={`${btn} max-w-[257px] h-[51px] rounded-[4px] border border-[#0103EC] text-[17.3px]/[27px] text-[#0103EC] px-7 bg-white hover:scale-105`}
          >
            {btn}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MoreLocation;
