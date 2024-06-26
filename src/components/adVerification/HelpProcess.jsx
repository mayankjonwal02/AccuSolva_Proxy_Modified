import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const HelpProcess = ({ bg, title, desc, data, btn }) => {
  return (
    <main className={`w-full py-24 ${bg} z-50`}>
      <section className="max-w-[801px] mx-auto text-center z-10 relative">
        <h1 className="text-[28px] sm:text-[36px] font-medium text-[#0103EC] mb-6">
          {title}
        </h1>
        <p className="text-[18px] sm:text-[20px]/[31.6px] text-[#073141B2]">
          {desc}
        </p>
      </section>

      <section className="flex flex-wrap justify-center gap-[75px] xl:gap-[30px] mt-16 px-3">
        {data.map((item) => (
          <Card title={item.title} cont={item.cont} key={item.id} />
        ))}
      </section>

      <section className={`${btn} flex justify-center mt-24`}>
        <Link to="/contact-sale">
          <button
            className={`text-[16px] sm:text-[18px] font-semibold border-[1px] rounded-xl w-[192px] h-[50px] bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-white hover:scale-105`}
          >
            {btn}
          </button>
        </Link>
      </section>
    </main>
  );
};

export default HelpProcess;
