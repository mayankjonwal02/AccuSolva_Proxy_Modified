import React from "react";
import img from "../../assets/locationHerobgImg.jpg";
import { Link } from "react-router-dom";

const Hero = ({
  heading,
  desc,
  desc2,
  formComp,
  bgImg,
  py,
  btn,
  gap,
  hideImg,
}) => {
  return (
    <main
      className="relative w-full bg-gray-950 bg-cover bg-no-repeat overflow-hidden pt-24"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <section
        className={`flex flex-col lg:flex-row px-2 sm:px-[104px] ${py} ${gap}`}
      >
        <div className="max-w-[523px] flex flex-col gap-10 text-[#FFFFFF] font-['Inter'] z-10">
          <h1 className="text-[30px]/[36px] font-semibold tracking-tight uppercase">
            {heading}
          </h1>
          <div>
            <p className="text-[16px] sm:text-[18px]/[26px] font-['IBM Plex Sans'] mb-4">
              {desc}
            </p>
            <p className="text-[16px] sm:text-[18px]/[26px] font-['IBM Plex Sans']">
              {desc2}
            </p>
          </div>
          <Link to="/contact-sale">
            <button
              className={`w-full sm:w-[205px] h-[53.62px] border-[1px] rounded-xl text-[17.3px] sm:text-[19.3px] font-semibold bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-white ${btn}`}
            >
              {btn}
            </button>
          </Link>
        </div>

        <img
          className={`absolute bg-cover bottom-0 lg:top-24 right-0 ${hideImg}`}
          src={bgImg}
          alt="img"
        />
        <div>{formComp}</div>
      </section>
    </main>
  );
};

export default Hero;
