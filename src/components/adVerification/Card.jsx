import React from "react";

const Card = ({ title, cont }) => {
  return (
    <main className="w-[390px] bg-[#F5F7FA] rounded-[8px] py-[61px] px-[37.5px] shadow-add-box z-10">
      <section className="flex flex-col gap-[18px]">
        <h1 className="text-[24px] sm:text-[26px]/[28px] font-semibold text-[#1B1B1B]">
          {title}
        </h1>
        <p className="text-[16px] sm:text-[20px]/[31.6px] font-['IBM Plex Sans] text-[#073141B2]">
          {cont}
        </p>
      </section>
    </main>
  );
};

export default Card;
