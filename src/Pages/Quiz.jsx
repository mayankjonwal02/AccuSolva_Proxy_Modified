import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { ques } from "../data/Quiz";

const Quiz = () => {
  const [index, setIndex] = useState(0);
  const [que, setQue] = useState(ques[index]);
  const [selections, setSelections] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleIncrement = () => {
    if (index >= 2) {
      navigate("/signup");
    } else {
      const newIndex = index + 1;
      setIsChecked(false);
      setIndex(newIndex);
      setQue(ques[newIndex]);
      setSelections({});
    }
  };

  const handleDecrement = () => {
    if (index <= 0) {
      navigate("/#quiz");
    } else {
      const newIndex = index - 1;
      setIsChecked(false);
      setIndex(newIndex);
      setQue(ques[newIndex]);
      setSelections({});
    }
  };

  const handleCheckboxChange = (optionId, open) => {
    setSelections((prev) => ({
      ...prev,
      [optionId]: !prev[optionId],
    }));
    if (open === "Yes") {
      setIsChecked((prev) => !prev);
    } else {
      setIsChecked(false);
    }
  };

  return (
    <main className="w-full">
      <section className="flex justify-between items-center py-4 px-2 lg:px-6">
        <Link to="/">
          {" "}
          <h1 className="font-semibold text-[28px] tracking-tight bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-transparent bg-clip-text">
            AccuSolva Proxy
          </h1>
        </Link>
        <Link to="/">
          <IoClose className="text-3xl text-[#1300D2]" />
        </Link>
      </section>

      {
        <section className="max-w-[471px] flex flex-col gap-10 py-24 px-2 sm:mx-auto">
          <h1 className="text-[20px]/[24.2px] font-semibold text-[#232323] text-center mb-10">
            {que.questitle}
          </h1>

          {que.Options.map((item) => (
            <section
              key={item.id}
              className="flex flex-col border-b border-[#B3B3B380]"
            >
              <div className="flex items-center gap-4  pb-4">
                <div className="w-[23px] h-[23px] bg-gradient-to-t from-[#1300D2] to-[#7B10A0] relative p-[0.8px] rounded-sm">
                  <input
                    className="w-[22px] h-[22px] border-transparent"
                    type="checkbox"
                    checked={selections[item.id] || false}
                    onChange={() => handleCheckboxChange(item.id, item.h)}
                  />
                </div>
                <span>
                  <p className="text-[14px]/[16.94px] font-semibold text-[#232323]">
                    {item.h}
                  </p>
                  <p className="text-[14px]/[16.94px] text-[#232323]">
                    {item.p}
                  </p>
                </span>
              </div>
              {isChecked && item.id === "0" && que.id === "1" && (
                <div className="w-full bg-gradient-to-t from-[#1300D2] to-[#7B10A0] relative p-[0.8px] rounded-lg mb-6">
                  <select
                    value="country"
                    className="w-full py-3 px-6 rounded-lg text-[11px] text-[#718EBF]"
                  >
                    <option className="" name="sc">
                      Select Country
                    </option>
                    <option name="ind">India</option>
                    <option name="cnd">Canada</option>
                    <option name="grm">Germany</option>
                    <option name="ity">Italy</option>
                    <option name="fr">France</option>
                  </select>
                </div>
              )}
              {isChecked && item.id === "0" && que.id === "2" && (
                <div className="w-full bg-gradient-to-t from-[#1300D2] to-[#7B10A0] relative p-[0.8px] rounded-lg mb-6">
                  <div className="rounded-lg flex flex-col px-4 py-2 bg-[#F5F5F5]">
                    <input
                      className="text-[11px] text-[#718EBF] focus:outline-none p-1 bg-transparent"
                      type="text"
                      placeholder="e.g. google.com"
                    />
                  </div>
                </div>
              )}
            </section>
          ))}

          <section className="w-full mt-5">
            <div className="bg-gradient-to-t from-[#1300D2] to-[#7B10A0] rounded-[10px] p-[1px] relative">
              <div className="rounded-[10px] flex justify-between p-6 mt-[0.26px] bg-[#F5F5F5]">
                <button
                  className="w-[110px] h-[35px] text-[12px]/[15.6px] text-[#4880FF] bg-[#FFFFFF] rounded-xl"
                  onClick={() => handleDecrement(index)}
                >
                  BACK
                </button>
                <button
                  className="w-[110px] h-[35px] text-[12px]/[15.6px] text-[#FFFFFF] bg-[#0103EC] rounded-xl"
                  onClick={() => handleIncrement(index)}
                >
                  Next
                </button>
              </div>
            </div>
          </section>
        </section>
      }
    </main>
  );
};

export default Quiz;
