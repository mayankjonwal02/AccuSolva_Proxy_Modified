import React from "react";

const AdvantagesResidentialProxy = ({
  bg,
  heading1,
  heading2,
  heading3,
  img1,
  title1,
  desc1,
  img2,
  title2,
  desc2,
  img3,
  title3,
  desc3,
  img4,
  title4,
  desc4,
  boxbgcolor,
  boxtitlecolor,
  boxdesccolor
}) => {
  return (
    <div className={`w-full flex flex-col px-2 py-12 sm:px-[50px] sm:py-24 gap-10 ${bg}`}>
      <h1 className="text-[28px] text-center sm:text-[40px]/[48px] font-medium text-[#0103EC] sm:mb-10 z-10">
        {heading1}{" "} 
        <span className="font-semibold bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-transparent bg-clip-text">
          {heading2}{" "}
        </span>
        {heading3}
      </h1>
      <div className="grid grid-rows-2 lg:grid-flow-col gap-12 xl:gap-[52px] mx-auto">
        <div className={`flex flex-col items-center sm:flex-row lg:flex-col xl:flex-row sm:max-w-[570px] px-10 py-6 lg:py-12 xl:py-6 gap-10 rounded-tr-[30px] rounded-bl-[30px] ${boxbgcolor}`}>
          <img
            className="w-[200px] h-[200px] rounded-tr-[30px] rounded-bl-[30px] object-cover"
            src={img1}
            alt="logo"
          />
          <div className="max-w-[250px]">
            <h1 className={`text-lg sm:text-2xl font-semibold text-[#19186E] ${boxtitlecolor} mb-3`}>
              {title1}
            </h1>
            <p className={`text-sm sm:text-lg/[23.4px] text-[#073141B2] ${boxdesccolor}`}>
              {desc1}
            </p>
          </div>
        </div>

        <div className={`flex flex-col items-center sm:flex-row lg:flex-col xl:flex-row sm:max-w-[570px] px-10 py-6 lg:py-12 xl:py-6 gap-10 rounded-tr-[30px] rounded-bl-[30px] ${boxbgcolor}`}>
          <img
            className="w-[200px] h-[200px] rounded-tr-[30px] rounded-bl-[30px] object-cover"
            src={img3}
            alt="logo"
          />
          <div className="max-w-[250px]">
            <h1 className={`text-lg sm:text-2xl font-semibold text-[#19186E] ${boxtitlecolor} mb-3`}>
              {title3}
            </h1>
            <p className={`text-sm sm:text-lg/[23.4px] text-[#073141B2] ${boxdesccolor}`}>
              {desc3}
            </p>
          </div>
        </div>

        <div className={`flex flex-col items-center sm:flex-row lg:flex-col xl:flex-row sm:max-w-[570px] px-10 py-6 lg:py-12 xl:py-6 gap-10 rounded-tr-[30px] rounded-bl-[30px] ${boxbgcolor}`}>
          <img
            className="w-[200px] h-[200px] rounded-tr-[30px] rounded-bl-[30px] object-cover"
            src={img2}
            alt="logo"
          />
          <div className="max-w-[250px]">
            <h1 className={`text-lg sm:text-2xl font-semibold text-[#19186E] ${boxtitlecolor} mb-3`}>
              {title2}
            </h1>
            <p className={`text-sm sm:text-lg/[23.4px] text-[#073141B2] ${boxdesccolor}`}>
              {desc2}
            </p>
          </div>
        </div>

        <div className={`flex flex-col items-center sm:flex-row lg:flex-col xl:flex-row sm:max-w-[570px] px-10 py-6 lg:py-12 xl:py-6 gap-10 rounded-tr-[30px] rounded-bl-[30px] ${boxbgcolor}`}>
          <img
            className="w-[200px] h-[200px] rounded-tr-[30px] rounded-bl-[30px] object-cover"
            src={img4}
            alt="logo"
          />
          <div className="max-w-[250px]">
            <h1 className={`text-lg sm:text-2xl font-semibold text-[#19186E] ${boxtitlecolor} mb-3`}>
              {title4}
            </h1>
            <p className={`text-sm sm:text-lg/[23.4px] text-[#073141B2] ${boxdesccolor}`}>
              {desc4}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvantagesResidentialProxy;
