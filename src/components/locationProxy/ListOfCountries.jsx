import React from "react";
import { Link } from "react-router-dom";

const ListOfCountries = ({
  img,
  hideImg,
  listOfAsia,
  listOfAfrica,
  Oceania,
}) => {
  return (
    <main className="max-w-full px-2">
      <img className={`mx-auto ${hideImg}`} src={img} alt="search logo" width={"50%"} />
      <h1 className="text-[28px] text-center sm:text-[40px]/[48px] font-medium text-[#0103EC] mt-4">
        AccuSolva Proxy List Of{" "}
        <span className="font-bold bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-transparent bg-clip-text">
          Countries
        </span>
      </h1>
      <section className="max-w-full py-[70px] px-2 xl:px-[43px] rounded-[44px] sm:mx-[35px] lg:mx-[50px]">
        <section className="mb-16">
          <h1 className="text-[28px] sm:text-4xl text-[#0103EC] font-semibold border-b border-[#000000] pb-3 mb-6">
            Asia
          </h1>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-[10px] gap-x-24 sm:gap-x-36 lg:gap-x-[190px] xl:gap-x-[300px]">
            {listOfAsia.map((item) => (
              <Link key={item.id} to={item.link}>
                <li className="texxt-[16px]/[20px] lg:text-[22px]/[50px] font-['IBM Plex Sans'] capitalize text-nowrap hover:text-[#EF6825] cursor-pointer">
                  {item.country}
                </li>
              </Link>
            ))}
          </ul>
        </section>

        <section className="mb-16">
          <h1 className="text-[28px] sm:text-4xl text-[#0103EC] font-semibold border-b border-[#000000] pb-3 mb-6">
            Africa
          </h1>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-[10px] gap-x-24 sm:gap-x-36 lg:gap-x-[190px] xl:gap-x-[300px]">
            {listOfAfrica.map((item) => (
              <Link key={item.id} to={item.link}>
                <li className="text-[16px]/[20px] lg:text-[22px]/[50px] font-['IBM Plex Sans'] capitalize text-nowrap hover:text-[#EF6825] cursor-pointer">
                  {item.country}
                </li>
              </Link>
            ))}
          </ul>
        </section>
        <section>
          <h1 className="text-[28px] sm:text-4xl text-[#0103EC] font-semibold border-b border-[#000000] pb-3 mb-6">
            Oceania
          </h1>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-[10px] gap-x-20 sm:gap-x-36 lg:gap-x-[190px] xl:gap-x-[300px]">
            {Oceania.map((item) => (
              <Link key={item.id} to={item.link}>
                <li className="text-[16px]/[20px] lg:text-[22px]/[50px] font-['IBM Plex Sans'] capitalize text-nowrap hover:text-[#EF6825] cursor-pointer">
                  {item.country}
                </li>
              </Link>
            ))}
          </ul>
        </section>
        <div className="border-b border-[#B0B0B0D6] mt-16 mb-12"></div>
        <div className="flex flex-wrap justify-between items-center">
          <p className="text-[16px] sm:text-[20px]/[48px] font-light mb-4 lg:mb-0">
            Can’t find a desired location? Request one and we might add it
          </p>
          <button className="text-[14px] w-[164px] h-[40px] rounded-[4px] border border-[#25BBC5] bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-transparent bg-clip-text">
            Request Location
          </button>
        </div>
      </section>
    </main>
  );
};

export default ListOfCountries;
