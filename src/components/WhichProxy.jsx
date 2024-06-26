import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const WhichProxy = ({ bg, img1, img2, img3, title, desc, btn, btnColor }) => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);
  return (
    <main
      className={`w-full flex flex-col py-24 px-2 sm:px-20 lg:px-10 xl:px-20 gap-12 sm:gap-5 xl:gap-20 bg-no-repeat ${bg}`}
      style={{
        backgroundImage: `url(${img3})`,
      }}
      id="quiz"
    >
      <section className="flex-1">
        <img className="" src={img1} alt="logo" />
      </section>
      <section className="relative flex-1 flex flex-col justify-center gap-8">
        <img
          className="w-[57px] sm:w-[87px] absolute -top-10 sm:-top-14 lg:-top-6 xl:top-6 right-16 sm:right-32 xl:right-14"
          src={img2}
          alt="icon"
        />
        <h1 className="text-[24px] sm:text-[48px]/[52px] font-bold text-[#0F172A]">
          {title}
        </h1>
        <p className="sm:text-[22px] text-[#0F172A]">{desc}</p>
        <Link to="/quiz" className="w-full">
          <button
            className={`${btn} w-full sm:w-[274px] h-[56px] rounded-[14px] ${btnColor}  sm:text-[20px] font-medium hover:scale-105`}
          >
            {btn}
          </button>
        </Link>
      </section>
    </main>
  );
};

export default WhichProxy;
