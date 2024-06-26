import React from "react";

const BlogHero = ({ title1, content, btn1, btn2, img, bgImg }) => {
  return (
    <div className="w-full rounded-br-[50px] pt-16 sm:pt-10 lg:pt-0">
      <div
        className="flex flex-col sm:flex-row justify-center items-center gap-4 lg:gap-18 px-4 sm:px-[70px] xl:px-[118px] py-12 sm:py-[85px] bg-[#F8FBFB] rounded-br-[50px]"
      >
        <div className="flex flex-col gap-2 sm:gap-[10px]">
          <h1 className="flex flex-col text-[28px] md:text-[35px]/[45px] xl:text-[64px]/[77px] font-semibold text-[#0103EC]">
            {title1}
          </h1>
          <p className="text-[18px] xl:text-[25.29px]/[43.11px] text-[#073141] max-w-[512px]">
            {content}
          </p>
        </div>
        <div>
          <img className="lg:max-w-[544px]" src={img} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default BlogHero;
