import React from "react";
import client from "../../assets/client.png";
import location from "../../assets/location.png";
import proxy from "../../assets/proxy.png";

const About = () => {
  return (
    <div className="w-full flex flex-col text-center py-[50px] px-2">
      <div className="flex flex-col gap-8 py-[50px]">
        <h1 className="text-[28px] sm:text-[40px]/[48.41px] tracking-[2.3px] font-bold bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-transparent bg-clip-text">
          About AccuSolva Proxy
        </h1>
        <p className="text-[16px] lg:max-w-4xl mx-auto sm:text-[20px]/[31.6px] font-medium text-[#073141B2] sm:leading-[27px]">
          AccuSolva Proxy is a one-stop solution for companies that need to get
          data all over the web from any source. No need to check and look up
          for proxies. No need to launch multiple scraping instances. No need to
          handle and support the overwhelming infrastructure. Get exactly what
          you need - DATA. With the most effortless way. And all this with the
          pay-as-you-go market leading pricing model.
        </p>
      </div>
      <div className="flex flex-wrap sm:flex-row gap-[10px] justify-evenly">
        <span className="py-6 px-8 rounded-lg w-[299px] h-[288px] flex flex-col justify-center items-center gap-2">
          <img className="w-16 h-14" src={client} alt="client" />
          <h1 className="text-[24px] sm:text-[28px]/[36px] font-bold text-[#4D4D4D]">
            45 000+ Satisfied Clients
          </h1>
          <p className="text-[16px] sm:text-sm/[18px] text-[#717171]">
            Manage all your proxies from a single, user-friendly interface,
            eliminating the hassle of manual configuration and copy-pasting
            proxy details
          </p>
        </span>
        <span className="py-6 px-8 rounded-lg w-[299px] h-[288px] flex flex-col justify-center items-center gap-2">
          <img className="w-16 h-14" src={location} alt="client" />
          <h1 className="text-[24px] sm:text-[28px]/[36px] font-bold text-[#4D4D4D]">
            125+ Proxy Locations
          </h1>
          <p className="text-[16px] sm:text-sm/[18px] text-[#717171]">
            Seamlessly switch between proxies at lightning speed to bypass
            geo-restrictions and access content from anywhere in the world
          </p>
        </span>
        <span className="py-6 px-8 rounded-lg w-[299px] h-[288px] flex flex-col justify-center items-center gap-2">
          <img className="w-16 h-14" src={proxy} alt="client" />
          <h1 className="text-[24px] sm:text-[28px]/[36px] font-bold text-[#4D4D4D]">
            99.9% Uptime Proxy
          </h1>
          <p className="text-[16px] sm:text-sm/[18px] text-[#717171]">
            Import proxies from various sources, including AccuSolva proxy's
            vast network of residential, mobile, and datacenter proxies, with
            ease
          </p>
        </span>
      </div>
    </div>
  );
};

export default About;
