import React, { useState } from "react";
import { qna } from "../../data/Faq";
import {
  MdAddCircleOutline,
  MdOutlineRemoveCircleOutline,
} from "react-icons/md";

const FaqQues = () => {
  const [showAnswer, setShowAnswer] = useState(null);

  const handleMouseEnter = (id) => {
    setShowAnswer(id);
  };

  const handleMouseLeave = (id) => {
    if (showAnswer === id) {
      setShowAnswer(null);
    }
  };

  return (
    <main className="w-full pb-12 pt-24 sm:pt-32">
      <section className="max-w-[1204px] mx-auto px-2 sm:px-6 xl:p-0">
        <div className="flex flex-col gap-4">
          <p className="text-sm text-[#0103EC] font-medium">FAQs</p>
          <h1 className="text-5xl font-bold bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-transparent bg-clip-text">
            Frequently asked questions
          </h1>
        </div>

        <section className="flex flex-col justify-center gap-4 mt-6">
          {qna.map((item) => (
            <div
              key={item.id}
              className="border-b border-[#bfc2c6] cursor-pointer"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={() => handleMouseLeave(item.id)}
            >
              <div className="flex justify-between py-[16px]">
                <h1 className="text-[18px] sm:text-[22px] font-semibold text-[#101828] font-['IBM Plex Sans'] mb-4">
                  {item.ques}
                </h1>
                <div>
                  {showAnswer === item.id ? (
                    <MdOutlineRemoveCircleOutline className="w-[24px] h-[24px] mt-1 text-[#0F172A] cursor-pointer" />
                  ) : (
                    <MdAddCircleOutline className="w-[24px] h-[24px] mt-1 text-[#0F172A]" />
                  )}
                </div>
              </div>
              {showAnswer === item.id && (
                <div className="transition-all duration-1000 ease-in-out">
                  <p className="text-[14px] sm:text-[18px] font-medium mb-5 text-[#475467] font-['IBM Plex Sans']">
                    {item.ans}
                  </p>
                </div>
              )}
            </div>
          ))}
        </section>
      </section>
    </main>
  );
};

export default FaqQues;
