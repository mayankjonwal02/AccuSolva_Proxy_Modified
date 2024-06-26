import React from "react";
import img1 from "../../assets/MPImg.png";
import img2 from "../../assets/MPImg2.png";
import img3 from "../../assets/MPIcon.png";
import img4 from "../../assets/MPbgImg.png";

const AnyNeed = () => {
  return (
    <main
      className={`w-full flex flex-col lg:flex-row items-center py-24 px-2 sm:px-20 lg:px-10 xl:px-20 gap-12 sm:gap-5 xl:gap-20 bg-[#DFEAF2]`}
    >
      <section className="relative flex-1 flex flex-col justify-center gap-8">
        <h1 className="relative text-[24px] sm:text-[52px]/[57px] font-bold text-[#0F172A]">
          <img className="absolute top-8 sm:top-14 sm:left-20 w-[150px] sm:w-[246px]" src={img2} alt="ulderline" />
          Mobile proxies for any needs. Just $2.5 per Gb.
        </h1>
        <ul className="flex flex-col gap-4 xl:gap-8">
          <li className="flex items-center gap-4">
            <img className="w-6 h-6" src={img3} alt="icon" />{" "}
            <span className="sm:text-[22px] text-[#0F172A]">
              Access to 12M rotating residential IPs worldwide
            </span>
          </li>
          <li className="flex items-center gap-4">
            <img className="w-6 h-6" src={img3} alt="icon" />{" "}
            <span className="sm:text-[22px] text-[#0F172A]">
              High-speed rotating proxies
            </span>
          </li>
          <li className="flex items-center gap-4">
            <img className="w-6 h-6" src={img3} alt="icon" />{" "}
            <span className="sm:text-[22px] text-[#0F172A]">
              Zero risk of blocks, bans or headaches
            </span>
          </li>
          <li className="flex items-center gap-4">
            <img className="w-6 h-6" src={img3} alt="icon" />{" "}
            <span className="sm:text-[22px] text-[#0F172A]">
              10 min sticky sessions
            </span>
          </li>
        </ul>
      </section>
      <section className="flex-1 bg-no-repeat bg-[length:180px] sm:bg-[length:340px] lg:bg-[length:260px] xl:bg-[length:330px] bg-left" style={{backgroundImage:`url(${img4})`}}>
        <img src={img1} alt="logo" />
      </section>
    </main>
  );
};

export default AnyNeed;
