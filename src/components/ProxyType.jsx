import React from "react";
import { Link } from "react-router-dom";

const ProxyType = ({
  bgcolor,
  heading1,
  heading2,
  heading3,
  boxHeading1,
  desc1,
  desc2,
  img,
  boxHeading2,
  desc3,
  desc4,
  boxHeading3,
  desc5,
  desc6,
  btn1,
  btn2,
  boxbgcolor,
  textcolor,
  MobileProxyLink,
  ResidentialProxyLinnk,
  DataCenterProxyLink,
  link1,
  link2
}) => {
  return (
    <div
      className={`w-full flex flex-col px-2 lg:px-[50px] py-24 gap-20 ${bgcolor}`}
    >
      <h1 className="text-[28px] text-center sm:text-[40px]/[48px] font-semibold text-[#0103EC] z-10">
        {heading1}{" "}
        <span className="font-bold bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-transparent bg-clip-text">
          {heading2}{" "}
        </span>
        {heading3}
      </h1>
      <div className="flex flex-wrap sm:flex-nowrap gap-6  justify-center">
        <Link to={MobileProxyLink} className="w-full sm:w-1/2 flex">
          <div className="border rounded-3xl py-[72px] px-6 lg:px-[48px] flex flex-col gap-4 bg-white text-[#1B1B1BD6] shadow-proxy-type h-full  hover:shadow-2xl">
            <h1 className="text-[24px] sm:text-[24px]/[48px] -tracking-[0.6px] font-bold">
              {boxHeading1}
            </h1>
            <p className="text-[16px] sm:text-[20px]/[31.6px] -tracking-[0.6px]">{desc1}</p>
            <p className="text-[16px] sm:text-[20px]/[31.6px] -tracking-[0.6px]">{desc2}</p>
            <img className="rounded-[28px] mt-4" src={img} alt="logo" />
          </div>
        </Link>
        <div className="w-full sm:w-1/2 flex flex-col gap-6">
          <Link to={ResidentialProxyLinnk} className="flex-grow">
            <div
              className={`border rounded-3xl py-[48px] px-6 lg:px-[48px] flex flex-col gap-4 ${boxbgcolor} ${textcolor} shadow-proxy-type h-full hover:shadow-2xl`}
            >
              <h1 className="text-[24px] sm:text-[24px]/[48px] font-bold -tracking-[0.6px]">
                {boxHeading2}
              </h1>
              <p className="text-[16px] sm:text-[20px]/[31.6px] -tracking-[0.6px]">{desc3}</p>
              <p className="text-[16px] sm:text-[20px]/[31.6px] -tracking-[0.6px]">{desc4}</p>
            </div>
          </Link>
          <Link to={DataCenterProxyLink} className="flex-grow">
            <div className="border rounded-3xl py-[48px] px-6 lg:px-[48px] flex flex-col gap-4 bg-white text-[#1B1B1BD6] shadow-proxy-type h-full hover:shadow-2xl">
              <h1 className="text-[24px] sm:text-[24px]/[48px] font-bold -tracking-[0.6px]">
                {boxHeading3}
              </h1>
              <p className="text-[16px] sm:text-[20px]/[31.6px] -tracking-[0.6px]">{desc5}</p>
              <p className="text-[16px] sm:text-[20px]/[31.6px] -tracking-[0.6px]">{desc6}</p>
            </div>
          </Link>
        </div>
      </div>

      <div className="flex flex-col justify-center sm:flex-row gap-4 sm:gap-[30px] text-[16px] sm:text-[18px] font-semibold">
        <Link to={link1} className="w-full sm:w-auto">
          <button
            className={`w-full sm:w-[192px] h-[50px] border-[1px] rounded-xl bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-white ${btn1} hover:scale-105`}
          >
            {btn1}
          </button>
        </Link>
        <Link to={link2}>
        <button
          className={`w-full sm:w-[192px] h-[50px] border-[4px] rounded-xl border-[#4970FF] text-[#373DA0] ${btn2} hover:scale-105`}
        >
          {btn2}
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ProxyType;
