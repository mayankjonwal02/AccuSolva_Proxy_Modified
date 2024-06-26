import React from "react";
import teamIcon1 from "../../assets/teamIcon1.png";
import teamIcon2 from "../../assets/teamIcon2.png";
import teamIcon3 from "../../assets/teamIcon3.png";
import teamIcon4 from "../../assets/teamIcon4.png";
import teamIcon5 from "../../assets/teamIcon5.png";
import teamIcon6 from "../../assets/teamIcon6.png";
import { Link } from "react-router-dom";
import img1 from "../../assets/DCBgImg1.png";
import img2 from "../../assets/DCbgImg2.png";
import img3 from "../../assets/DCbgImg4.png";
import img4 from "../../assets/DCbgImg3.png";

const LeadingTeams = ({ heading}) => {
  return (
    <main className="relative w-full py-[50px] px-2 sm:px-[60px]">
      <img
        className="absolute -z-10 top-40 sm:-top-8 md:top-24  right-0 w-[630px]"
        src={img1}
        alt="bg"
      />
      <img
        className="absolute -z-10 -bottom-24 left-0 lg:left-12"
        src={img2}
        alt="bg"
      />
      <img
        className="absolute -z-10 -top-12 sm:left-56 xl:left-[420px]"
        src={img3}
        alt="bg"
      />
      <img
        className="absolute -z-10 top-0 left-0 w-[200px]"
        src={img4}
        alt="bg"
      />
      <section className="text-center mb-12  sm:mb-24">
        <h1 className="text-[28px] text-center sm:text-[40px]/[48.41px] font-semibold text-[#0103EC]">
          AccuSolva Proxies are trusted by{" "}
          <span className="font-bold bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-transparent bg-clip-text">
            leading teams
          </span>
        </h1>
      </section>

      <section className="max-w-[1024px] relative flex flex-col-reverse lg:flex-row justify-center lg:justify-between items-center gap-12 sm:gap-5 mx-auto">
        <div className="lg:max-w-[360px] flex flex-col justify-center items-center sm:items-start">
          <h1 className="text-[21px]/[23px] sm:text-[38px]/[43px] font-semibold text-[#073141] text-center sm:text-left">
            {heading}
          </h1>
          <p className="text-[16px] sm:text-[18px] lg:text-[24px] font-extralight text-[#554D56] my-4 sm:my-[30px]">
            We are available to help you anytime..
          </p>
          <Link to="/contact-sale">
            <button className="w-[152px] h-[44px] text-xs sm:text-[12px] lg:text-[18px] text-[#FFFFFF] font-medium rounded-[10px] bg-[#1300D2] border-[2px] border-[#419BF9] hover:scale-105 mt-4">
              Contact Sales
            </button>
          </Link>
        </div>

        <div className="lg:absolute lg:right-0">
          <div className="flex flex-row-reverse gap-2">
            <img className="w-[72px]" src={teamIcon1} alt="teamIcon" />
          </div>
          <div className="flex flex-row-reverse gap-2 my-2">
            <img className="w-[72px]" src={teamIcon3} alt="teamIcon" />
            <img className="w-[72px]" src={teamIcon2} alt="teamIcon" />
          </div>
          <div className="flex flex-row-reverse gap-2">
            <img className="w-[72px]" src={teamIcon6} alt="teamIcon" />
            <img className="w-[72px]" src={teamIcon5} alt="teamIcon" />
            <img className="w-[72px]" src={teamIcon4} alt="teamIcon" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default LeadingTeams;
