import React from "react";
import img from "../../assets/serpIcon.png";
import img2 from "../../assets/serpImg.png";
import { Link } from "react-router-dom";

const BusinessGoals = () => {
  return (
    <main className="w-full py-[48px] sm:px-[60px]">
      <section>
        <h1 className="max-w-[924px] mx-auto text-[28px] sm:text-[40px]/[64px] font-semibold text-center text-[#0103EC]">
          Ready to{" "}
          <span className="bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-transparent bg-clip-text">
            start
          </span>{" "}
          collecting data and achieve your business goals? 
        </h1>

        <section className="w-full flex flex-col lg:flex-row justify-center items-center mt-12">
          <div className="flex flex-col justify-center gap-8 bg-[#B1D8FC] py-12 px-6 sm:px-12 w-full lg:w-1/2 rounded-t-[24px] lg:rounded-tr-none lg:rounded-l-[24px]">
            <img className="w-[68.14px]" src={img} alt="logo" />
            <h1 className="text-[24px] sm:text-[40px]/[46px] font-semibold text-[#0103EC]">
              More than 10,000 people choose AccuSolva Proxy for their business
            </h1>
            <p className="text-[16px] sm:text-[18px]/[24px] text-[#1B1A55]">
              All of our residential IPs are contributed from real people around
              the world providing a stable and reliable service.
            </p>
            <Link to="/contact-sale">
              <button className="text-[16px] sm:text-[18px] font-semibold border-[1px] rounded-xl w-[192px] h-[50px] bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-white hover:scale-105">
                Contact Sales
              </button>
            </Link>
          </div>
          <img
            className="w-full lg:w-1/2 lg:h-[568px] xl:h-[498px] rounded-b-[24px] lg:rounded-bl-none lg:rounded-r-[24px]"
            src={img2}
            alt="img"
          />
        </section>
      </section>
    </main>
  );
};

export default BusinessGoals;
