import React from "react";
import bgImg from "../../assets/helpSupportbgImg.jpg";
import heroImg from "../../assets/helpSupportHeroImg.png";
import { Link } from "react-router-dom";

const AffiliateJourney = () => {
  return (
    <main className="w-full">
      <div
        className="relative w-full flex flex-col sm:flex-row sm:justify-center items-center gap-4  px-4 sm:px-[70px] lg:px-[118px] py-7 sm:py-[85px] rounded-br-[50px] bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        <div>
          <img src={heroImg} alt="hero" />
        </div>
        <div className="max-w-[990px] flex flex-col gap-10 xl:gap-[50px]">
          <h1 className="text-[30px] sm:text-[40px]/[46px] font-bold text-[#0103EC]">
            Start your affiliate journey with us today, don't wait any longer!
          </h1>
          <Link to='/signup'>
            <button className="border-[1px] rounded-xl text-[14px] font-bold w-full sm:w-[192px] h-[50px] bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-white hover:scale-105">
              Start Earning now
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default AffiliateJourney;
