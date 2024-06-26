import React from "react";
import { resource } from "../../data/Resources";
import icon1 from "../../assets/resourceIcon1.png";
import icon2 from "../../assets/resourceIcon2.png";
import icon3 from "../../assets/resourceIcon3.png";
import icon4 from "../../assets/resourceIcon4.png";

const iconArray = [icon1, icon2, icon3, icon4];

const Resources = () => {
  return (
    <div className="w-full flex flex-col text-center bg-[#F8FBFB] px-2">
      <div className="flex flex-col gap-[20px] py-12">
        <h1 className="text-[28px] text-center sm:text-[40px]/[48.41px] tracking-[2.3px] font-bold bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-transparent bg-clip-text">
          You Can Do It All With AccuSolva Proxy
        </h1>
        <p className="text-lg/8 font-['IBM Plex Sans'] text-[#073141B2] lg:max-w-4xl mx-auto">
          Now you don’t need to select from the tons of different providers
          combining different integration's to the one overwhelming system.
          AccuSolva-proxy has millions of residential IPs in all countries over
          the Globe that allows it to make requests with the jewelry precision.
          All the residential pools are ethical IPs that are used from the
          consent of the end user. While we handle everything from our end and
          don’t buy pools from 3rd parties, we could provide one of the lowest
          prices on the market.
        </p>
      </div>
      <div className="flex flex-wrap gap-5 py-[100px] px-[50px]">
        {resource.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-around text-left w-[277px] h-[420px] cursor-pointer border-t-[1px] hover:border-t-[3px] border-[#0103EC] py-8 px-2 mx-auto"
          >
            <img
              className="w-[55.25px] h-[55.25px]"
              src={iconArray[item.id -1]}
              alt="logo"
            />
            <div>
              <p className="text-semibold text-[24px]/[29.68px] sm:text-[31px]/[39.68px] mb-3">
                {item.title}
              </p>
              <p className="text-[16px] font-['Inter'] sm:text-[20px]/[31.6px] text-[#51564E]">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
