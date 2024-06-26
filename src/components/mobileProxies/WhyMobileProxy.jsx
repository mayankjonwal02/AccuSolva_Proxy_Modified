import React from "react";
import chart from "../../assets/chartIcon.png";
import menu from "../../assets/menuIcon.png";
import favoriteChart from "../../assets/favoriteChartIcon.png";
import element from "../../assets/elementIcon.png";

const WhyMobileProxy = ({
  heading,
  description,
  title1,
  title2,
  title3,
  title4,
}) => {
  return (
    <main className="w-full py-[50px] bg-[#F8FBFB] px-2">
      <div className="flex flex-col items-center text-center gap-5">
        <h1 className="flex flex-col text-[28px] md:text-[40px] text-[#0103EC] font-semibold">
          {heading}
        </h1>
        <p className="text-[14px] lg:text-[20px]/[31.6px] text-[#073141] max-w-[1000px]">
          {description}
        </p>
      </div>
      <section className="flex flex-wrap justify-start md:justify-center  gap-6 lg:gap-[90px] px-4 mt-12 ">
        <div className="flex items-center gap-2 w-[198px]">
          <img
            className="w-[54px] h-[54px] rounded-xl"
            src={chart}
            alt="chart"
          />
          <p className="text-[14px] text-[#121D2F] font-semibold">{title1}</p>
        </div>
        <div className="flex items-center gap-2 w-[198px]">
          <img
            className="w-[54px] h-[54px] rounded-xl"
            src={menu}
            alt="chart"
          />
          <p className="text-[14px]/[20px] text-[#121D2F] font-semibold">
            {title2}
          </p>
        </div>
        <div className="flex items-center gap-2 w-[210px]">
          <img
            className="w-[54px] h-[54px] rounded-xl"
            src={favoriteChart}
            alt="chart"
          />
          <p className="text-[14px]/[20px] text-[#121D2F] font-semibold">
            {title3}
          </p>
        </div>
        <div className="flex items-center gap-2 w-[210px]">
          <img
            className="w-[54px] h-[54px] rounded-xl"
            src={element}
            alt="chart"
          />
          <p className="text-[14px]/[20px] text-[#121D2F] font-semibold">
            {title4}
          </p>
        </div>
      </section>
    </main>
  );
};

export default WhyMobileProxy;
