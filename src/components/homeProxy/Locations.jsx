import React from "react";
import LocationCarousel from "../LocationCarousel";

const Locations = () => {
  return (
    <div className="w-full flex flex-col gap-[91px] py-[72px]">
      <h1 className="text-[28px] text-center sm:text-[40px]/[48.41px] -tracking-[1px] font-bold bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-transparent bg-clip-text">
        Top AccuSolva Proxy Locations
      </h1>
       <LocationCarousel />
    </div>
  );
};

export default Locations;
