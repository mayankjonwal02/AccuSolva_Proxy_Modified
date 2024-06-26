import React from "react";
import advantageImg1 from "../../assets/advantageImg1.png";
import advantageImg2 from "../../assets/advantageImg2.png";
import advantageImg3 from "../../assets/advantageImg3.png";
import advantageImg4 from "../../assets/advantageImg4.png";
import advantageImg5 from "../../assets/advantageImg5.png";

const AdvantageMobileProxy = () => {
  return (
    <div className="w-full flex flex-col sm:py-[18px] px-2 sm:px-[50px] my-12 sm:my-24 gap-10">
      <h1 className="text-center text-[28px] sm:text-[40px] font-medium text-[#0103EC]">
        Advantages Of{" "}
        <span className="font-semibold bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-transparent bg-clip-text text-nowrap">
          Mobile Proxy
        </span>
      </h1>
      <div className="grid grid-rows-2 sm:grid-flow-col gap-4 sm:gap-2 lg:gap-6 mx-auto">
        <div className="row-span-2">
          <img
            className="rounded-[6px]"
            src={advantageImg1}
            alt="logo"
          />
        </div>
        <div className="rounded-[6px]">
          <img src={advantageImg2} alt="logo" />
        </div>
        <div className="rounded-[6px]">
          <img src={advantageImg3} alt="logo" />
        </div>
        <div className="rounded-[6px]">
          <img src={advantageImg4} alt="logo" />
        </div>
        <div className="rounded-[6px]">
          <img src={advantageImg5} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default AdvantageMobileProxy;
