import React from "react";
import line1 from "../../assets/horizontalLine.png";
import line2 from "../../assets/verticleLine.png";
import { GoDotFill } from "react-icons/go";


const plan = () => {
  return (
    <main className="w-full p-12 sm:p-24">
      <h1 className="text-[28px] sm:text-[36px]/[34px] font-medium text-[#0103EC] text-center pb-10 sm:pb-24">
        Included{" "}
        <span className="bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-transparent bg-clip-text">
          free
        </span>{" "}
        with every plan
      </h1>

      <section className="xl:flex flex-col gap-10">
        <section className="xl:flex gap-16">
          <div className="flex flex-col justify-center items-center">
            <p className="flex justify-center items-center w-[299px]  h-[100px] text-xl font-bold text-[#1A202C] rounded-tr-[30px] rounded-bl-[30px] border hover:border-[3px] hover:text-[21px] sm:hover:translate-x-[-30px] xl:hover:translate-x-[0px] xl:hover:translate-y-[-5px] border-[#0103EC] cursor-pointer bg-white">
              Unlimited target websites
            </p>
            <img className="w-1 xl:-mb-10" src={line2} alt="" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="flex justify-center items-center w-[299px] h-[100px] text-xl font-bold text-[#1A202C] rounded-tr-[30px] rounded-bl-[30px] border hover:border-[3px] xl:hover:translate-y-[-5px] xl:hover:translate-x-[0px]  sm:hover:translate-x-[30px] hover:text-[21px] border-[#0103EC] cursor-pointer bg-white">
              Automatic IP rotation
            </p>
            <img className="w-1 xl:-mb-10" src={line2} alt="" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className="flex justify-center items-center w-[299px] h-[100px] text-xl font-bold text-[#1A202C] rounded-tr-[30px] rounded-bl-[30px] border hover:border-[3px] xl:hover:translate-y-[-5px] xl:hover:translate-x-[0px] sm:hover:translate-x-[-30px] hover:text-[21px] border-[#0103EC] cursor-pointer bg-white">
              Up to 5 sub-users
            </p>
            <img className="hidden xl:block w-1 sm:-mb-10" src={line2} alt="" />
          </div>
        </section>
        <div className="relative">
         <GoDotFill className="hidden xl:block text-[20px] text-[#7B10A0]  absolute -top-[8px] -left-[6px]" />
        <img className="hidden xl:block" src={line1} alt="" />
        <GoDotFill className="hidden xl:block text-[20px] text-[#7B10A0]  absolute -right-[6px] -top-[8px] " />
        </div>

        <section className="xl:flex gap-16 xl:pl-28">
          <div className="flex flex-col justify-center items-center">
            <img className="w-1 xl:-mt-10" src={line2} alt="" />
            <p className="flex justify-center items-center w-[299px] h-[100px] text-xl font-bold text-[#1A202C] rounded-tr-[30px] rounded-bl-[30px] border hover:border-[3px] sm:hover:translate-x-[30px] xl:hover:translate-x-[0px] xl:hover:translate-y-[5px] hover:text-[21px] border-[#0103EC] cursor-pointer bg-white">
              Sprint planning
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="w-1 xl:-mt-10" src={line2} alt="" />
            <p className="flex justify-center items-center w-[299px] h-[100px] text-xl font-bold text-[#1A202C] rounded-tr-[30px] rounded-bl-[30px] border hover:border-[3px] sm:hover:translate-x-[-30px] xl:hover:translate-x-[0px] xl:hover:translate-y-[5px] hover:text-[21px] border-[#0103EC] cursor-pointer bg-white">
              Sticky sessions
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img className="w-1 xl:-mt-10" src={line2} alt="" />
            <p className="flex justify-center items-center w-[299px] h-[100px] text-xl font-bold text-[#1A202C] rounded-tr-[30px] rounded-bl-[30px] border hover:border-[3px] sm:hover:translate-x-[30px] xl:hover:translate-x-[0px] xl:hover:translate-y-[5px] hover:text-[21px] border-[#0103EC] cursor-pointer bg-white">
              Multiple Locations
            </p>
          </div>
        </section>
      </section>
    </main>
  );
};

export default plan;
