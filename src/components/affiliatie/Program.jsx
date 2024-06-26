import React from "react";
import img1 from "../../assets/AffProgramIcon.png";
import img2 from "../../assets/AffProgramImg.png";

const Program = () => {
  return (
    <main className="w-full bg-[#FEF0D880] py-24 px-2 sm:px-12 lg:px-24">
      <h1 className="text-[28px] sm:text-[36px]/[48px] text-[#0103EC] font-semibold text-center">
        How The Program Works:
      </h1>
      <section className="flex flex-col lg:flex-row justify-between items-center gap-6 mt-12 pl-4">
        <section className="flex flex-col gap-6">
          <section className="flex flex-col gap-4">
            <div>
              <span className="bg-[#B1D8FC] rounded-full py-1 px-[10px] text-[16.3px]">
                1
              </span>
              <span className="text-[18px] sm:text-[21.6px]/[27.6px] text-[#1B1B1B] font-medium ml-3">
                Register
              </span>
            </div>
            <p className="text-[14px] sm:text-[17.1px]/[27.2px] text-[#1B1B1BD9] pl-10 ml-3 border-l border-[#C6BAB3] h-[54px]">
              Register or log in to our platform.
            </p>
          </section>
          <section className="flex flex-col gap-4">
            <div>
              <span className="bg-[#B1D8FC] rounded-full py-1 px-[10px] text-[16.3px]">
                2
              </span>
              <span className="text-[18px] sm:text-[21.6px]/[27.6px] text-[#1B1B1B] font-medium ml-3">
                Affiliate link
              </span>
            </div>
            <p className="text-[14px] sm:text-[17.1px]/[27.2px] text-[#1B1B1BD9] pl-10 ml-3 border-l border-[#C6BAB3] h-[54px]">
              Generate your unique affiliate link.
            </p>
          </section>
          <section className="flex flex-col gap-4">
            <div>
              <span className="bg-[#B1D8FC] rounded-full py-1 px-[10px] text-[16.3px]">
                3
              </span>
              <span className="text-[18px] sm:text-[21.6px]/[27.6px] text-[#1B1B1B] font-medium ml-3">
                Register
              </span>
            </div>
            <p className="text-[14px] sm:text-[17.1px]/[27.2px]  text-[#1B1B1BD9] pl-10 ml-3 border-l border-[#C6BAB3] h-[54px]">
              Share it with your audience.
            </p>
          </section>
          <section className="flex flex-col gap-4">
            <div>
              <span className="bg-[#B1D8FC] rounded-full py-1 px-[10px] text-[16.3px]">
                4
              </span>
              <span className="text-[18px] sm:text-[21.6px]/[27.6px] text-[#1B1B1B] font-medium ml-3">
                Commission
              </span>
            </div>
            <p className="text-[14px] sm:text-[17.1px]/[27.2px] text-[#1B1B1BD9] pl-10 ml-3 border-l border-[#C6BAB3] h-[54px]">
              Earn commissions after the first successful referral.
            </p>
          </section>
          <img className="w-[70px] -ml-5" src={img1} alt="" />
        </section>

        <section >
          <img src={img2} alt="hero" />
        </section>
      </section>
    </main>
  );
};

export default Program;
