import React from "react";
import img1 from "../../assets/blogImg3.jpg";
import img2 from "../../assets/blogImg4.jpg";
import img3 from "../../assets/blogImg5.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import '../blogProxy/blogcss.css'

const BlogCoreFunctionality = () => {
  return (
    <main className="w-full py-24 sm:px-8">
      <h1 className="sm:max-w-[796px] text-[28px] sm:text-[48px]/[64px] text-[#0103EC] font-medium tracking-tight text-center mx-auto">
        Explore the core functionality of the AccuSolva
      </h1>

      <section className="flex flex-wrap xl:flex-nowrap justify-center gap-4 mx-auto mt-24">
        <div className="relative sm:w-[448px] custom-gradient-1">
          <div class="relative w-[448px] h-[488px] custom-gradient">
            <div class="absolute top-0 left-0 right-0 h-[70%] overflow-hidden">
              <img
                src={img1}
                alt="Description of image"
                class="w-full h-full object-fit"
              />
            </div>

            <div class="absolute bottom-0 left-0 right-0 h-[30%] bg-black"></div>
          </div>
          <div className="max-w-[448px] absolute inset-0 text-white pt-56 px-3 sm:px-3  flex flex-col items-center justify-center sm:items-start lg:justify-start lg:items-start gap-8 ">
            <h1 className="max-w-[448px] text-lg md:text-2xl tracking-tight capitalize font-medium">
              Fixing Invalid Syntax in Python language
            </h1>
            <p className="max-w-[400px] text-sm md:text-lg tracking-tight capitalize  text-center lg:text-left">
              Make it easy, fast, and intuitive for teams to get the insights
              they need to make better decisions.
            </p>
            <button className="flex justify-center items-center gap-1 text-[14px] sm:text-[16px]/[24px] w-[173px] h-[48px] text-[#000000D9] border border-white bg-white rounded-sm uppercase">
              Coming Soon{" "}
              <FaArrowRightLong className="text-[#000000D9] mt-[2px]" />
            </button>
          </div>
        </div>

        <div className="relative sm:w-[448px] mt-12 lg:mt-0 xl:mt-12">
          <div class="relative w-[448px] h-[488px] custom-gradient">
            <div class="absolute top-0 left-0 right-0 h-[70%] overflow-hidden">
              <img
                src={img2}
                alt="Description of image"
                class="w-full h-full object-cover"
              />
            </div>

            <div class="absolute bottom-0 left-0 right-0 h-[30%] bg-black"></div>
          </div>
          <div className="max-w-[448px] absolute inset-0 text-white pt-56 px-3 sm:px-3  flex flex-col items-center justify-center sm:items-start lg:justify-start lg:items-start gap-8 ">
            <h1 className="max-w-[448px] text-lg md:text-2xl tracking-tight capitalize font-medium">
              Data at your fingertips
            </h1>
            <p className="max-w-[390px] text-sm md:text-lg tracking-tight capitalize  text-center lg:text-left">
              With every click, swipe, and scroll, we help you understand and
              visualize what your customers are doing and why.
            </p>
            <button className="flex justify-center items-center gap-1 text-[14px] sm:text-[16px]/[24px] w-[173px] h-[48px] text-[#000000D9] border border-white bg-white rounded-sm uppercase">
              Coming Soon{" "}
              <FaArrowRightLong className="text-[#000000D9] mt-[2px]" />
            </button>
          </div>
        </div>

        <div className="relative sm:w-[448px] mt-12 xl:mt-0">
          <div class="relative w-[448px] h-[488px] custom-gradient">
            <div class="absolute top-0 left-0 right-0 h-[70%] overflow-hidden">
              <img
                src={img3}
                alt="Description of image"
                class="w-full h-full object-cover"
              />
            </div>

            <div class="absolute bottom-0 left-0 right-0 h-[30%] bg-black"></div>
          </div>
          <div className="max-w-[448px] absolute inset-0 text-white pt-56 px-3 sm:px-3  flex flex-col items-center justify-center sm:items-start lg:justify-start lg:items-start gap-8">
            <h1 className="max-w-[448px] text-lg md:text-2xl tracking-tight capitalize font-medium">
              How to scrape images from website
            </h1>
            <p className="max-w-[400px] text-sm md:text-lg tracking-tight capitalize  text-center lg:text-left">
              Activate personalized experiences in the same place you get
              insights, so you can rapidly respond to customer needs.
            </p>
            <button className="flex justify-center items-center gap-1 text-[14px] sm:text-[16px]/[24px] w-[173px] h-[48px] text-[#000000D9] border border-white bg-white rounded-sm uppercase">
              Coming Soon{" "}
              <FaArrowRightLong className="text-[#000000D9] mt-[2px]" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogCoreFunctionality;
