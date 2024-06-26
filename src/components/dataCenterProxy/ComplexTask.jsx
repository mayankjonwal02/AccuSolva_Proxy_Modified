import React from "react";
import img from "../../assets/DPImg.png";
import img1 from "../../assets/DPbg1.png";
import img2 from "../../assets/DPbg2.png";
import img3 from "../../assets/DPbg3.png";
import img4 from "../../assets/DPbg4.png";
import { Link } from "react-router-dom";

const ComplexTask = () => {
  return (
    <main
      className={`w-full flex flex-col lg:flex-row items-center py-24 px-2 sm:px-20 lg:px-10 xl:px-20 gap-12 sm:gap-5 xl:gap-12 bg-[#1B1A55]`}
    >
      <section className="relative flex-1 flex flex-col justify-center items-center lg:items-start gap-8 bg-[#B1D8FC14] rounded-[30px] px-4 py-6 sm:p-12">
        <h1 className="text-[24px] sm:text-[45px]/[50px] xl:text-[48px]/[52px] text-white">
          Complex tasks{" "}
          <span className="font-bold text-nowrap lg:text-wrap xl:text-nowrap">
            made simple with Us
          </span>
        </h1>
        <p className="sm:text-[22px] text-white text-opacity-55">
          Our mission is to empower businesses of all sizes to easily access
          valuable online data, enabling them to make informed decisions, gain
          insights, and create strategic advantages. We strive to provide
          intuitive and reliable solutions to help our customers save time,
          money, and resources. We are committed to delivering high quality data
          that meet the standards of accuracy, privacy, and consistency while
          keeping the simple and fair pay-as-you-go pricing model.
        </p>
        <Link to={"/signup"}>
          <button
            className={`w-[200px] h-[50px] sm:w-[274px] sm:h-[56px] rounded-[14px] sm:text-[20px] font-medium bg-white text-[#0103ECD1] hover:scale-105`}
          >
            Try Now
          </button>
        </Link>
      </section>
      <section className="flex-1">
        <img className="" src={img} alt="logo" />
      </section>
    </main>
  );
};

export default ComplexTask;
