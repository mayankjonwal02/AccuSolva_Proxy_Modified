import React from "react";
import img from "../../assets/networkIcon.png";
import {reasons} from "../../data/Reasons";

const WhyCustomerChoose = ({desc}) => {
  return (
    <main className="w-full p-2 sm:p-12">
      <section className="text-center py-12">
        <h1 className="text-[28px] text-center sm:text-[40px]/[48.41px] font-semibold text-[#0103EC] mb-10">
          Why{" "}
          <span className="font-bold bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-transparent bg-clip-text">
            Customers{" "}
          </span>
          Choose AccuSolva Proxy
        </h1>
        <p className="text-[18px] sm:text-[20px]/34px text-center max-w-[914px] mx-auto">
          {desc}
        </p>
      </section>

      <section className=" flex flex-wrap justify-center gap-6 bg-[#010D44] rounded-[35px] border-t py-12 sm:py-[100px]">
        {reasons.map((item) => (
          <div key={item.id} className="w-[200px] sm:w-[265px] sm:h-[255px] rounded-2xl border-[2px] border-[#1B1B1B75] bg-[#498AC624] p-6 sm:px-4 sm:py-12 ">
            <img className="w-[15px] sm:w-[30px]" src={img} alt="icon" />
            <h1 className="text-sm sm:text-[15px]/[23.7px] font-semibold text-white py-1 sm:py-4">
              {item.title}
            </h1>
            <p className="text-xs sm:text-[14px]/[22.12px] text-white">
              {item.description}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default WhyCustomerChoose;
