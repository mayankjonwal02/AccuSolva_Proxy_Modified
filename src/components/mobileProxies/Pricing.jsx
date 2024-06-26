import React from "react";
import bestSeller from "../../assets/bestSeller.png";
import bgImg from "../../assets/dollar.png";
import { Link } from "react-router-dom";

const Pricing = ({ started, premium, custom, data }) => {
  return (
    <main
      className="w-full flex flex-col gap-11 py-24 bg-top bg-cover"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
        // backgroundSize:"300px"
      }}
      id="pricing"
    >
      <section className="text-center px-4">
        <h1 className="text-[28px] sm:text-[40px] font-bold bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-transparent bg-clip-text mb-4">
          Pricing
        </h1>
        <p className="text-lg sm:text-xl text-[#121D2F] font-['Plus Jakarta Sans']">
          Choose a plan that suits your business best!
        </p>
      </section>

      <div className="flex flex-wrap justify-center gap-8 px-4 sm:px-[32px]">
        <div className="w-full max-w-[352px] mx-auto  h-[529px]  rounded-3xl p-5 sm:p-10 flex flex-col justify-between shadow-pricing cursor-pointer hover:border-[4px] hover:border-[#2878FF]">
          <section className="flex flex-col gap-5">
            <h1 className="text-lg text-[#121D2F] font-medium">STARTED</h1>
            <span className="text-[48px] font-medium">
              <span className="text-[#727C8F]">$</span>
              {started}
              <span className="text-[14px] text-[#727C8F] font-medium">
                /month
              </span>
            </span>
            <ul className="text-[14px] text-[#364050] flex flex-col gap-3 list-disc list-inside font-['Plus Jakarta Sans']">
              {data.standard.map((item) => (
                <li key={item.id}>{item.content}</li>
              ))}
            </ul>
          </section>
          <Link to='/signup'>
          <button className="w-full h-[48px] rounded-lg bg-[#F1F6FF]  text-[14px] font-semibold font-[Plus Jakarta Sans] bg-gradient-to-t from-[#2878FF] to-[#2C65C8] text-transparent bg-clip-text shadow-md hover:scale-105">
            Choose this plan
          </button>
          </Link>
        </div>

        <div className="w-full max-w-[352px] mx-auto  h-[529px] rounded-3xl p-5 sm:p-10 flex flex-col justify-between shadow-pricing border-[4px] border-[#2878FF] hover:border-[#0203EC] cursor-pointer">
          <section className="flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <h1 className="text-[18px] font-semibold bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-transparent bg-clip-text">
                ADVANCED
              </h1>
              <img
                className="w-[114px] h-[34px]"
                src={bestSeller}
                alt="Best Seller"
              />
            </div>
            <span className="text-[48px] font-medium">
              <span className="text-[#727C8F]">$</span>
              {premium}
              <span className="text-[14px] text-[#727C8F] font-medium">
                /month
              </span>
            </span>
            <ul className="text-[14px] text-[#364050] flex flex-col gap-3 list-disc list-inside font-['Plus Jakarta Sans']">
              {data.premium.map((item) => (
                <li key={item.id}>{item.content}</li>
              ))}
            </ul>
          </section>
          <Link to='/signup'>
          <button className="w-full h-[48px] rounded-lg bg-gradient-to-l from-[#2878FF] to-[#2C65C8] text-white text-[14px] font-semibold font-[Plus Jakarta Sans] shadow-md hover:scale-105">
            Choose this plan
          </button>
          </Link>
        </div>

        <div className="w-full max-w-[352px] mx-auto  h-[529px]  rounded-3xl p-5 sm:p-10 flex flex-col justify-between shadow-pricing cursor-pointer hover:border-[4px] hover:border-[#2878FF]">
          <section className="flex flex-col gap-5">
            <h1 className="text-lg text-[#121D2F] font-medium">PREMIUM</h1>
            <span className="text-[48px] font-medium">
              <span className="text-[#727C8F]">$</span>
              {custom}
              <span className="text-[14px] text-[#727C8F] font-medium">
                /month
              </span>
            </span>
            <ul className="text-[14px] text-[#364050] flex flex-col gap-3 list-disc list-inside font-['Plus Jakarta Sans']">
              {data.custom.map((item) => (
                <li key={item.id}>{item.content}</li>
              ))}
            </ul>
          </section>
          <Link to='/signup'>
          <button className="w-full h-[48px] rounded-lg bg-[#F1F6FF]  text-[14px] font-semibold font-[Plus Jakarta Sans] bg-gradient-to-t from-[#2878FF] to-[#2C65C8] text-transparent bg-clip-text shadow-md hover:scale-105">
            Choose this plan
          </button>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Pricing;
