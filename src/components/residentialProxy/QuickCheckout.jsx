import React from "react";
import img1 from "../../assets/RPImg.png";
import img2 from "../../assets/RPImg2.png";
import img3 from "../../assets/RPImg3.png";
import { Link } from "react-router-dom";

const QuickCheckout = () => {
  return (
    <main>
      <section
        className={`relative w-full flex flex-col lg:flex-row items-center py-24 px-2 sm:px-20 lg:px-10 xl:px-20 gap-12 sm:gap-5 xl:gap-20 bg-[#C2EEF0D6]`}
      >
        <section className="flex-1">
          <img className="" src={img1} alt="logo" />
        </section>
        <section className="relative flex-1 flex flex-col justify-center gap-8">
          <h1 className="text-[24px] sm:text-[48px]/[52px] font-bold text-[#0F172A]">
            Fast & Affordable Proxies In quick checkout
          </h1>
          <p className="sm:text-[22px] text-[#0F172A] z-10">
            Achievement-winning proxy networks, powerful web extractors, and
            datasets that are ready to add more value to your products.{" "}
            <span className="font-semibold bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-transparent bg-clip-text ">
              AccuSolva-Proxy
            </span>{" "}
            is the pay-as-you-go source for web data solutions.
          </p>
          <Link to='/login' className="z-10">
          <button
            className={`w-full sm:w-[274px] h-[56px] rounded-[14px] sm:text-[20px] text-[#0103EC] bg-white font-medium hover:scale-105`}
          >
            Buy Now
          </button>
          </Link>
        </section>
        <section className="absolute right-0 bottom-0">
          <img className="absolute bottom-0 right-0" src={img2} alt="bgimg" />
          <img className="relative" src={img3} alt="bgimg" />
        </section>
      </section>
    </main>
  );
};

export default QuickCheckout;
