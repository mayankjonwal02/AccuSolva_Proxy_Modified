import React from "react";
import avator from "../../assets/faqAvator.png";
import { Link } from "react-router-dom";

const HaveQues = ({ bgImg, style }) => {
  return (
    
    <main
      className={`w-full ${style} relative bg-no-repeat bg-contain`}
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <section className="max-w-[1216px] p-6 rounded-2xl mx-2 sm:mx-[40px] xl:mx-auto bg-[#E1EAFCBF] flex flex-col justify-center items-center gap-8">
        <img src={avator} alt="avator" />
        <div className="text-center">
          <h1 className="text-[18px] sm:text-[20px]/[30px] text-[#101828] font-medium font-sans">
            Still have questions?
          </h1>
          <p className="text-[16px] sm:text-[18px]/[28px] text-[#475467] font-sans">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
        </div>
        <Link to="/signup">
          <button className="w-[130px] h-[44px] bg-[#1814F3] rounded-lg border border-[#1814F3] text-[16px] text-[#FFFFFF] font-['Inter'] font-semibold hover:scale-105 shadow-btn">
            Get in touch
          </button>
        </Link>
      </section>
    </main>
  );
};

export default HaveQues;
