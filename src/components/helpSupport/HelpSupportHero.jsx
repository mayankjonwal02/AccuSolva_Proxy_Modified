import React, { useState } from "react";
import bgImg from "../../assets/helpSupportbgImg.jpg";
import heroImg from "../../assets/helpSupportHeroImg.png";
import { FiSearch } from "react-icons/fi";

const HelpSupportHero = () => {
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
        <div className="max-w-[990px] flex flex-col gap-4 xl:gap-[50px]">
          <h1 className="text-[30px] sm:text-[40px]/[46px] font-bold text-[#0103EC]">
            Advice and answers from the{" "}
            <span className="font-bold bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-transparent bg-clip-text">
              AccuSolva Team
            </span>
          </h1>
          <p className="text-[28px]/[34px] font-bold text-white">
            How can we help today?
          </p>
          <form className="flex items-center text-white px-4 w-full h-[63px] rounded-[15px] border border-[#00000014] bg-[#0000000D] drop-shadow-md">
            <FiSearch className="w-[20.55px] h-[20.55px] ml-2" />
            <input
              className="bg-transparent text-[17.86px] leading-[20.93px] font-['Roboto'] w-full h-full pl-2 focus:outline-none placeholder:text-white"
              type="text"
              placeholder="Search for articles..."
            />
          </form>
        </div>
      </div>
    </main>
  );
};

export default HelpSupportHero;
