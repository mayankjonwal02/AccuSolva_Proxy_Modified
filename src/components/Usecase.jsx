import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import icon from "../assets/useCaseImg.png";

const Usecase = ({ title1, title2, title3, desc, data, bg, bgImg }) => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  return (
    <div
      className={`w-full text-center flex flex-col sm:gap-24 py-16 px-2 lg:px-0 ${bg} bg-fit bg-center bg-no-repeat`}
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
      id="usecase"
    >
      <div className="max-w-[819px] mx-auto z-10">
        <h1 className="text-[28px] text-center sm:text-[40px]/[48.41px] font-semibold text-[#0103EC] capitalize">
          {title1}{" "}
          <span className="font-bold bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-transparent bg-clip-text">
            {title2}{" "}
          </span>
          {title3}
        </h1>
        <p className="text-[18px] sm:text-[20px]/[31.6px] text-[#073141B2] mt-5">
          {desc}
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-[53px] p-[28px]">
        {data.map((item) => (
          <Link key={item.id} to={item.link}>
            <div className="w-[300px] h-[290px] hover:h-[300px] border rounded-2xl shadow-usecase hover:shadow-2xl flex flex-col justify-evenly items-center p-[18px] sm:p-[28px cursor-pointer bg-white">
              <img className="h-[40px] w-[40px]" src={icon} alt="" />
              <h1 className="text-[24px] sm:text-[21px] font-semibold">
                {item.title}
              </h1>
              <p className="text-[16px] font-normal text-[#6F6B80]">
                {item.content}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Usecase;
