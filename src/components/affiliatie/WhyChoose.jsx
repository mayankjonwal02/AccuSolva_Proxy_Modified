import React from "react";
import img1 from "../../assets/AffIcon1.png";
import img2 from "../../assets/AffIcon2.png";
import img3 from "../../assets/AffIcon3.png";
import img4 from "../../assets/AffIcon4.png";

const WhyChoose = () => {
  return (
    <main className="w-full py-24 px-6 lg:px-14 xl:px-24">
      <h1 className="text-[28px] sm:text-[36px]/[48px] text-[#0103EC] font-semibold text-center">
        Why Choose AccuSolva?
      </h1>
      <section className="flex flex-wrap flex-col gap-12 max-w-[1094px] mx-auto mt-12 lg:mt-24">
        <section className="flex flex-wrap justify-between gap-12">
          <div className="max-w-[320px] lg:max-w-[430px]">
            <img src={img1} alt="icon" />
            <h1 className="text-[18px] sm:text-[24px]/[26.4px] font-bold text-[#1B1B1BD6] py-4">
              Unlimited Earnings Potential
            </h1>
            <p className="text-[14px] sm:text-[18px]/[28.8px] text-[#475569] font-['IBM Plex Sans']">
              There are no income limits!
            </p>
          </div>
          <div className="max-w-[320px] lg:max-w-[430px]">
            <img src={img2} alt="icon" />
            <h1 className="text-[18px] sm:text-[24px]/[26.4px] font-bold text-[#1B1B1BD6] py-4">
              Custom Solutions
            </h1>
            <p className="text-[14px] sm:text-[18px]/[28.8px] text-[#475569] font-['IBM Plex Sans']">
              We are always open to hearing your thoughts and implementing new
              features that you need.
            </p>
          </div>
        </section>
        <section className="flex flex-wrap justify-between gap-12">
          <div className="max-w-[320px] lg:max-w-[430px]">
            <img src={img3} alt="icon" />
            <h1 className="text-[18px] sm:text-[24px]/[26.4px] font-bold text-[#1B1B1BD6] py-4">
              5% Lifetime Commissions
            </h1>
            <p className="text-[14px] sm:text-[18px]/[28.8px] text-[#475569] font-['IBM Plex Sans']">
              AccuSolva offers unlimited, lifelong commissions of 5% for
              every referred client who continues using our services.
            </p>
          </div>
          <div className="max-w-[320px] lg:max-w-[430px]">
            <img src={img4} alt="icon" />
            <h1 className="text-[18px] sm:text-[24px]/[26.4px] font-bold text-[#1B1B1BD6] py-4">
              Top-Quality Service
            </h1>
            <p className="text-[14px] sm:text-[18px]/[28.8px] text-[#475569] font-['IBM Plex Sans']">
              We offer 24/7 support to help with any issues you may encounter.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
};

export default WhyChoose;
