import React from "react";
import { Link } from "react-router-dom";

const Joinus = ({ title, description1, description2, btn1, btn2,link1,link2 }) => {
  return (
    <div
      className="w-full bg-[#1B1A55] my-12 rounded-tl-[30px] rounded-br-[30px]"
    >
      <div className="flex flex-col text-center gap-[32px] py-[135px] px-2 sm:px-[159px] lg:px-[219px]">
        <h1 className="font-medium text-[28px] sm:text-[40px]/[48px] text-[#01E9FE]">
          {title}
        </h1>
        <p className="text-[16px] sm:text-[17.3px]/[27px] text-white">
          {description1}
        </p>
        <p className="text-[16px] sm:text-[17.3px]/[27px] text-white">
          {description2}
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-8 mt-6">
          <Link to={link1}>
            <button
              className={`${btn1} w-[189.9px] h-[51px] rounded-[12px] bg-[#FFFFFF] text-[16px] sm:text-[17.3px] text-[#0103ECD1] hover:scale-105`}
            >
              {btn1}
            </button>
          </Link>
          <Link to={link2}>
            <button
              className={`${btn2} w-[189.9px] h-[51px] rounded-[12px] border text-[16px] sm:text-[17.3px] text-[#FFFFFF] hover:scale-105`}
            >
              {btn2}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Joinus;
