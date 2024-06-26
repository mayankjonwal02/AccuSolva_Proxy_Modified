import React, { useState } from "react";
import { ques } from "./AffiliateFaqData";
import {
  MdAddCircleOutline,
  MdOutlineRemoveCircleOutline,
} from "react-icons/md";

const AffiliateFaq = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredId(id);
  };

  const handleMouseLeave = (id) => {
    if (hoveredId === id) {
      setHoveredId(null);
    }
  };

  return (
    <main className="w-full py-24 px-2 sm:px-12 lg:px-24">
      <h1 className="text-[28px] sm:text-[36px]/[48px] text-[#0103EC] font-semibold text-center">
        FAQ
      </h1>

      <section className="flex flex-col mt-24">
        {ques.map((item) => (
          <div
            key={item.id}
            className="border-t border-[#b7b9bd] cursor-pointer mt-4"
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={() => handleMouseLeave(item.id)}
          >
            <div className="flex justify-between py-[16px]">
              <h1 className="text-[18px] sm:text-[24px] font-semibold text-[#0F172A] font-['Inter] mt-4">
                {item.ques}
              </h1>
              <div>
                {hoveredId === item.id ? (
                  <MdOutlineRemoveCircleOutline className="w-[24px] h-[24px] mt-7 text-[#0F172A] cursor-pointer" />
                ) : (
                  <MdAddCircleOutline className="w-[24px] h-[24px] mt-7 text-[#0F172A]" />
                )}
              </div>
            </div>
            {hoveredId === item.id && (
              <div
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={() => handleMouseLeave(item.id)}
                className="transition-all duration-300 ease-in-out"
              >
                <p className="text-[14px] sm:text-[18px] mb-4 font-medium text-[#21272A] font-['Roboto']">
                  {item.ans}
                </p>
              </div>
            )}
          </div>
        ))}
      </section>
    </main>
  );
};

export default AffiliateFaq;
