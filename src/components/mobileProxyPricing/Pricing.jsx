import React from "react";
import img from "../../assets/checkImg.png";
import bgImg from "../../assets/dollar.png";
import { Link } from "react-router-dom";

import "../mobileProxyPricing/Pricing.css";


const Pricing = ({ standard, basic, premium, custom, pricing }) => {
  return (
    <main
      className="w-full flex flex-col gap-12 sm:gap-24 py-5 sm:py-20 bg-top px-2"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <section className="text-center">
        <h1 className="text-center text-[28px] sm:text-[36px]/[60px] font-semibold text-[#0103EC] mb-5">
          Pricing
        </h1>
        <div className="max-w-[910px] mx-auto">
          <p className="text-[16px] sm:text-[30px]/[42px] text-[#073141] font-medium">
            Start 2024 with{" "}
            <span className="font-medium text-[#0103EC]">big </span> savings,
            Access 10 million of IPs worldwide designed for flexible targeting
            by country, state and city
          </p>
        </div>
      </section>

     





      {/* <div className="overflow-x-auto bg-red-400"> */}
      <section className="flex flex-nowrap justify-center gap-10 lg:gap-10 mx-auto  mt-12 ">
        <section className="h-[707px] w-[272px] rounded-3xl py-10 px-5 flex flex-col justify-between hover:border-t-[30px] hover:border-[4px] border-[2px] border-[#0203EC] cursor-pointer">
          <section className="flex flex-col gap-12 ">
            <div className="h-[170px]">
              <h1 className="text-lg text-[#121D2F] font-bold uppercase ">Started</h1>
              <p className="text-[14px]/[20px] text-[#979197] mb-5">
                {standard}
              </p>
              <span className="text-[48px] font-medium">$5</span>
              <p className="text-xs text-[#979197]">No Monthly Limit</p>
            </div>
            <Link to="https://app.accusolvaproxy.com/">
              <button className="w-[230px] h-[40px] rounded-sm bg-[#00000040] text-[#0103EC] shadow-md hover:scale-105">
                Get started
              </button>
            </Link>
            <div className="border-[2px] border-[#F7F7F7] mt-11"></div>
            <ul className="text-[14px] text-[#364050] flex flex-col gap-3">
              {pricing.standard.map((item) => (
                <li key={item.id} className="flex items-center gap-2">
                  <img className="w-[14px] h-[11px]" src={img} alt="" />
                  {item.content}
                </li>
              ))}
            </ul>
          </section>
        </section>

        <section className="relative h-[707px] w-[272px] rounded-3xl py-10 px-5 flex flex-col justify-between hover:border-t-[30px] hover:border-[4px] border-[2px] border-[#0203EC] cursor-pointer">
          <section className="flex flex-col gap-12">
            <div className="h-[170px]">
              <h1 className="text-lg text-[#121D2F] font-bold uppercase">Basic</h1>
              <p className="text-[14px]/[20px] text-[#979197]">{basic}</p>
              <div className="mt-10">
                <span className="text-[48px] font-medium">$50</span>
                <p className="text-xs text-[#979197]">
                  <span className="border-b border-dotted">No</span>{" "}Monthly
                  Limit
                </p>
              </div>
            </div>

            <Link to="https://app.accusolvaproxy.com/">
              <button className="w-[230px] h-[40px] rounded-sm bg-[#00000040] text-[#0103EC] shadow-md hover:scale-105">
                Choose plan
              </button>
            </Link>

            <div className="text-sm text-center text-[#979197] -mt-10">
              <p>
                or{" "}
                <Link to='https://app.accusolvaproxy.com/'><span className="text-[#1B42FF]">start free trial -&gt;</span></Link>
              </p>
              <p className="text-xs">🫶 No credit card required!</p>
            </div>

            <div className="border-[2px] border-[#F7F7F7]"></div>
            <ul className="text-[14px] text-[#364050] flex flex-col gap-3">
              {pricing.basic.map((item) => (
                <li key={item.id} className="flex items-center gap-2">
                  <img className="w-[14px] h-[11px]" src={img} alt="" />
                  {item.content}
                </li>
              ))}
            </ul>
          </section>
        </section>

        <section className="relative  h-[750px] w-[272px] rounded-3xl py-5 px-5 flex flex-col border-t-[40px] justify-between hover:border-t-[50px] hover:border-[4px] border-[3px] border-[#0203EC] cursor-pointer -mt-[40px]">
          <section className="flex flex-col gap-12 mt-[1px]">
            <div className="h-[170px]">
              <h1 className="text-lg text-[#121D2F] font-bold uppercase mt-[20px]">Advanced</h1>
              <p className="text-[14px]/[20px] text-[#979197]">{premium}</p>
              <div className="mt-9">
                <span className="text-[48px] font-medium">$1000</span>
                <p className="text-xs text-[#979197]">
                  <span className="border-b border-dotted">No</span>{" "}
                  Monthly Limit
                </p>
              </div>
            </div>

            <Link to="https://app.accusolvaproxy.com/" className="-mt-0">
              <button className="w-[230px] h-[40px] rounded-sm text-[#0103EC] bg-[#00000040] shadow-md hover:scale-105 mt-5">
                Choose plan
              </button>
            </Link>
            <div className="text-sm text-center text-[#979197] -mt-10">
              <p>
                or{" "}
                <Link to='https://app.accusolvaproxy.com/'><span className="text-[#1B42FF]">start free trial -&gt;</span></Link>
              </p>
              <p className="text-xs">🫶 No credit card required!</p>
            </div>

            <div className="border-[2px]"></div>
            <ul className="text-[14px] text-[#364050] flex flex-col gap-3">
              <li className="font-medium">Everything in Advanced</li>
              {pricing.advanced.map((item) => (
                <li key={item.id} className="flex items-center gap-2">
                  <img className="w-[14px] h-[11px]" src={img} alt="" />
                  {item.content}
                </li>
              ))}
            </ul>
          </section>
        </section>

        <section className="relative h-[707px] w-[272px] rounded-3xl py-10 px-5 flex flex-col justify-between hover:border-t-[30px] hover:border-[4px] border-[2px] border-[#0203EC] cursor-pointer">
          <section className="flex flex-col gap-12">
            <div className="h-[170px]">
              <h1 className="text-lg text-[#121D2F] font-bold uppercase">Exclusive</h1>
              <p className="text-[14px]/[20px] text-[#979197]">{basic}</p>
              <div className="mt-10">
                <span className="text-[48px] font-medium">$150</span>
                <p className="text-xs text-[#979197]">
                  <span className="border-b border-dotted">No</span>{" "}Monthly
                  Limit
                </p>
              </div>
            </div>

            <Link to="https://app.accusolvaproxy.com/">
              <button className="w-[230px] h-[40px] rounded-sm bg-[#00000040] text-[#0103EC] shadow-md hover:scale-105">
                Choose plan
              </button>
            </Link>

            <div className="text-sm text-center text-[#979197] -mt-10">
              <p>
                or{" "}
                <Link to='https://app.accusolvaproxy.com/'><span className="text-[#1B42FF]">start free trial -&gt;</span></Link>
              </p>
              <p className="text-xs">🫶 No credit card required!</p>
            </div>

            <div className="border-[2px] border-[#F7F7F7]"></div>
            <ul className="text-[14px] text-[#364050] flex flex-col gap-3">
              {pricing.exclusive.map((item) => (
                <li key={item.id} className="flex items-center gap-2">
                  <img className="w-[14px] h-[11px]" src={img} alt="" />
                  {item.content}
                </li>
              ))}
            </ul>
          </section>
        </section>

        <section className="relative h-[707px] w-[272px] rounded-3xl py-10 px-5 flex flex-col justify-between hover:border-t-[30px] hover:border-[4px] border-[2px] border-[#0203EC] cursor-pointer">
          <section className="flex flex-col gap-12">
            <div className="h-[170px]">
              <h1 className="text-lg text-[#121D2F] font-bold uppercase">Business</h1>
              <p className="text-[14px]/[20px] text-[#979197]">{basic}</p>
              <div className="mt-10">
                <span className="text-[48px] font-medium">$350</span>
                <p className="text-xs text-[#979197]">
                  <span className="border-b border-dotted">No</span>{" "}Monthly
                  Limit
                </p>
              </div>
            </div>

            <Link to="https://app.accusolvaproxy.com/">
              <button className="w-[230px] h-[40px] rounded-sm bg-[#00000040] text-[#0103EC] shadow-md hover:scale-105">
                Choose plan
              </button>
            </Link>

            <div className="text-sm text-center text-[#979197] -mt-10">
              <p>
                or{" "}
                <Link to='https://app.accusolvaproxy.com/'><span className="text-[#1B42FF]">start free trial -&gt;</span></Link>
              </p>
              <p className="text-xs">🫶 No credit card required!</p>
            </div>

            <div className="border-[2px] border-[#F7F7F7]"></div>
            <ul className="text-[14px] text-[#364050] flex flex-col gap-3">
              {pricing.business.map((item) => (
                <li key={item.id} className="flex items-center gap-2">
                  <img className="w-[14px] h-[11px]" src={img} alt="" />
                  {item.content}
                </li>
              ))}
            </ul>
          </section>
        </section>

        <section className="relative h-[707px] w-[272px] rounded-3xl py-10 px-5 flex flex-col justify-between hover:border-t-[30px] hover:border-[4px] border-[2px] border-[#0203EC] cursor-pointer">
          <section className="flex flex-col gap-12">
            <div className="h-[170px]">
              <h1 className="text-lg text-[#121D2F] font-bold uppercase">Proficient</h1>
              <p className="text-[14px]/[20px] text-[#979197]">{basic}</p>
              <div className="mt-10">
                <span className="text-[48px] font-medium">$650</span>
                <p className="text-xs text-[#979197]">
                  <span className="border-b border-dotted">No</span>{" "}Monthly
                  Limit
                </p>
              </div>
            </div>

            <Link to="https://app.accusolvaproxy.com/">
              <button className="w-[230px] h-[40px] rounded-sm bg-[#00000040] text-[#0103EC] shadow-md hover:scale-105">
                Choose plan
              </button>
            </Link>

            <div className="text-sm text-center text-[#979197] -mt-10">
              <p>
                or{" "}
                <Link to='https://app.accusolvaproxy.com/'><span className="text-[#1B42FF]">start free trial -&gt;</span></Link>
              </p>
              <p className="text-xs">🫶 No credit card required!</p>
            </div>

            <div className="border-[2px] border-[#F7F7F7]"></div>
            <ul className="text-[14px] text-[#364050] flex flex-col gap-3">
              {pricing.proficient.map((item) => (
                <li key={item.id} className="flex items-center gap-2">
                  <img className="w-[14px] h-[11px]" src={img} alt="" />
                  {item.content}
                </li>
              ))}
            </ul>
          </section>
        </section>

        <section className="relative h-[707px] w-[272px] rounded-3xl py-10 px-5 flex flex-col justify-between hover:border-t-[30px] hover:border-[4px] border-[2px] border-[#0203EC] cursor-pointer">
          <section className="flex flex-col gap-12">
            <div className="h-[170px]">
              <h1 className="text-lg text-[#121D2F] font-bold uppercase">Plus</h1>
              <p className="text-[14px]/[20px] text-[#979197]">{basic}</p>
              <div className="mt-10">
                <span className="text-[48px] font-medium">$1500</span>
                <p className="text-xs text-[#979197]">
                  <span className="border-b border-dotted">No</span>{" "}Monthly
                  Limit
                </p>
              </div>
            </div>

            <Link to="https://app.accusolvaproxy.com/">
              <button className="w-[230px] h-[40px] rounded-sm bg-[#00000040] text-[#0103EC] shadow-md hover:scale-105">
                Choose plan
              </button>
            </Link>

            <div className="text-sm text-center text-[#979197] -mt-10">
              <p>
                or{" "}
                <Link to='https://app.accusolvaproxy.com/'><span className="text-[#1B42FF]">start free trial -&gt;</span></Link>
              </p>
              <p className="text-xs">🫶 No credit card required!</p>
            </div>

            <div className="border-[2px] border-[#F7F7F7]"></div>
            <ul className="text-[14px] text-[#364050] flex flex-col gap-3">
              {pricing.plus.map((item) => (
                <li key={item.id} className="flex items-center gap-2">
                  <img className="w-[14px] h-[11px]" src={img} alt="" />
                  {item.content}
                </li>
              ))}
            </ul>
          </section>
        </section>


        <section className="relative h-[707px] w-[272px] rounded-3xl py-10 px-5 flex flex-col justify-between hover:border-t-[30px] hover:border-[4px] border-[2px] border-[#0203EC] cursor-pointer">
          <section className="flex flex-col gap-12">
            <div className="h-[170px]">
              <h1 className="text-lg text-[#121D2F] font-bold uppercase">Business Pro</h1>
              <p className="text-[14px]/[20px] text-[#979197]">{basic}</p>
              <div className="mt-10">
                <span className="text-[48px] font-medium">$2500</span>
                <p className="text-xs text-[#979197]">
                  <span className="border-b border-dotted">No</span>{" "}Monthly
                  Limit
                </p>
              </div>
            </div>

            <Link to="https://app.accusolvaproxy.com/">
              <button className="w-[230px] h-[40px] rounded-sm bg-[#00000040] text-[#0103EC] shadow-md hover:scale-105">
                Choose plan
              </button>
            </Link>

            <div className="text-sm text-center text-[#979197] -mt-10">
              <p>
                or{" "}
                <Link to='https://app.accusolvaproxy.com/'><span className="text-[#1B42FF]">start free trial -&gt;</span></Link>
              </p>
              <p className="text-xs">🫶 No credit card required!</p>
            </div>

            <div className="border-[2px] border-[#F7F7F7]"></div>
            <ul className="text-[14px] text-[#364050] flex flex-col gap-3">
              {pricing.businesspro.map((item) => (
                <li key={item.id} className="flex items-center gap-2">
                  <img className="w-[14px] h-[11px]" src={img} alt="" />
                  {item.content}
                </li>
              ))}
            </ul>
          </section>
        </section>

        <section className="relative h-[707px] w-[272px] rounded-3xl py-10 px-5 flex flex-col justify-between hover:border-t-[30px] hover:border-[4px] border-[2px] border-[#0203EC] cursor-pointer">
          <section className="flex flex-col gap-12">
            <div className="h-[170px]">
              <h1 className="text-lg text-[#121D2F] font-bold uppercase">Premium</h1>
              <p className="text-[14px]/[20px] text-[#979197]">{basic}</p>
              <div className="mt-10">
                <span className="text-[48px] font-medium">$2500</span>
                <p className="text-xs text-[#979197]">
                  <span className="border-b border-dotted">No</span>{" "}Monthly
                  Limit
                </p>
              </div>
            </div>

            <Link to="https://app.accusolvaproxy.com/">
              <button className="w-[230px] h-[40px] rounded-sm bg-[#00000040] text-[#0103EC] shadow-md hover:scale-105">
                Choose plan
              </button>
            </Link>

            <div className="text-sm text-center text-[#979197] -mt-10">
              <p>
                or{" "}
                <Link to='https://app.accusolvaproxy.com/'><span className="text-[#1B42FF]">start free trial -&gt;</span></Link>
              </p>
              <p className="text-xs">🫶 No credit card required!</p>
            </div>

            <div className="border-[2px] border-[#F7F7F7]"></div>
            <ul className="text-[14px] text-[#364050] flex flex-col gap-3">
              {pricing.premium.map((item) => (
                <li key={item.id} className="flex items-center gap-2">
                  <img className="w-[14px] h-[11px]" src={img} alt="" />
                  {item.content}
                </li>
              ))}
            </ul>
          </section>
        </section>

        <section className="relative h-[707px] w-[272px] rounded-3xl py-10 px-5 flex flex-col justify-between hover:border-t-[30px] hover:border-[4px] border-[2px] border-[#0203EC] cursor-pointer">
          <section className="flex flex-col gap-12">
            <div className="h-[170px]">
              <h1 className="text-lg text-[#121D2F] font-bold uppercase">Premium Plus</h1>
              <p className="text-[14px]/[20px] text-[#979197]">{basic}</p>
              <div className="mt-10">
                <span className="text-[48px] font-medium">$3000</span>
                <p className="text-xs text-[#979197]">
                  <span className="border-b border-dotted">No</span>{" "}Monthly
                  Limit
                </p>
              </div>
            </div>

            <Link to="https://app.accusolvaproxy.com/">
              <button className="w-[230px] h-[40px] rounded-sm bg-[#00000040] text-[#0103EC] shadow-md hover:scale-105">
                Choose plan
              </button>
            </Link>

            <div className="text-sm text-center text-[#979197] -mt-10">
              <p>
                or{" "}
                <Link to='https://app.accusolvaproxy.com/'><span className="text-[#1B42FF]">start free trial -&gt;</span></Link>
              </p>
              <p className="text-xs">🫶 No credit card required!</p>
            </div>

            <div className="border-[2px] border-[#F7F7F7]"></div>
            <ul className="text-[14px] text-[#364050] flex flex-col gap-3">
              {pricing.premiumplus.map((item) => (
                <li key={item.id} className="flex items-center gap-2">
                  <img className="w-[14px] h-[11px]" src={img} alt="" />
                  {item.content}
                </li>
              ))}
            </ul>
          </section>
        </section>
      </section>
      {/* </div> */}


      {/* {PricingSection()} */}
    </main>
  );
};
const pricing = {
  standard: [{ id: 1, content: "Feature 1" }, { id: 2, content: "Feature 2" }],
  basic: [{ id: 1, content: "Feature 1" }, { id: 2, content: "Feature 2" }],
  premium: [{ id: 1, content: "Feature 1" }, { id: 2, content: "Feature 2" }],
  custom: [{ id: 1, content: "Feature 1" }, { id: 2, content: "Feature 2" }],
};

const standard = "Standard Plan Description";
const basic = "Basic Plan Description";
const premium = "Premium Plan Description";
const custom = "Custom Plan Description";
// const img = "https://via.placeholder.com/14"; // Replace with your actual image source

const PricingSection = () => {
  return (
    <div className="overflow-x-auto">
      <section className="flex flex-row flex-nowrap justify-center gap-10  mx-auto w-full ">
        <section className="h-[707px]  w-[272px] rounded-3xl py-10 px-5  flex flex-col justify-between hover:border-t-[30px] hover:border-[4px] border-[2px] border-[#0203EC] cursor-pointer">
          <section className="flex flex-col gap-12 ">
            <div className="h-[170px]">
              <h1 className="text-lg text-[#121D2F] font-bold uppercase">Started</h1>
              <p className="text-[14px]/[20px] text-[#979197] mb-5">
                {standard}
              </p>
              <span className="text-[48px] font-medium">$79</span>
              <p className="text-xs text-[#979197]">No Monthly Limit</p>
            </div>
            <Link to="/signup">
              <button className="w-[230px] h-[40px] rounded-sm bg-[#00000040] text-[#0103EC] shadow-md hover:scale-105">
                Get started
              </button>
            </Link>
            <div className="border-[2px] border-[#F7F7F7] mt-11"></div>
            <ul className="text-[14px] text-[#364050] flex flex-col gap-3">
              {pricing.standard.map((item) => (
                <li key={item.id} className="flex items-center gap-2">
                  <img className="w-[14px] h-[11px]" src={img} alt="" />
                  {item.content}
                </li>
              ))}
            </ul>
          </section>
        </section>

        <section className="relative h-[707px] w-[272px] rounded-3xl py-10 px-5 flex flex-col justify-between hover:border-t-[30px] hover:border-[4px] border-[2px] border-[#0203EC] cursor-pointer">
          <section className="flex flex-col gap-12">
            <div className="h-[170px]">
              <h1 className="text-lg text-[#121D2F] font-bold uppercase">Basic</h1>
              <p className="text-[14px]/[20px] text-[#979197]">{basic}</p>
              <div className="mt-10">
                <span className="text-[48px] font-medium">$500</span>
                <p className="text-xs text-[#979197]">
                  <span className="border-b border-dotted">No</span>{" "}
                  Monthly Limit
                </p>
              </div>
            </div>

            <Link to="/signup">
              <button className="w-[230px] h-[40px] rounded-sm bg-[#00000040] text-[#0103EC] shadow-md hover:scale-105">
                Choose plan
              </button>
            </Link>

            <div className="text-sm text-center text-[#979197] -mt-10">
              <p>
                or{" "}
                <Link to='/signup'><span className="text-[#1B42FF]">start free trial -&gt;</span></Link>
              </p>
              <p className="text-xs">🫶 No credit card required!</p>
            </div>

            <div className="border-[2px] border-[#F7F7F7]"></div>
            <ul className="text-[14px] text-[#364050] flex flex-col gap-3">
              {pricing.basic.map((item) => (
                <li key={item.id} className="flex items-center gap-2">
                  <img className="w-[14px] h-[11px]" src={img} alt="" />
                  {item.content}
                </li>
              ))}
            </ul>
          </section>
        </section>

        <section className="relative h-[729px] w-[272px] rounded-3xl py-5 px-5 flex flex-col border-t-[20px] justify-between hover:border-t-[30px] hover:border-[4px] border-[3px] border-[#0203EC] cursor-pointer -mt-5">
          <section className="flex flex-col gap-12 mt-3">
            <div className="h-[170px]">
              <h1 className="text-lg text-[#121D2F] font-bold uppercase mt-[12px]">Premium</h1>
              <p className="text-[14px]/[20px] text-[#979197]">{premium}</p>
              <div className="mt-9">
                <span className="text-[48px] font-medium">$1000.00</span>
                <p className="text-xs text-[#979197]">
                  <span className="border-b border-dotted">No</span>{" "}
                  Monthly Limit
                </p>
              </div>
            </div>

            <Link to="/signup">
              <button className="w-[230px] h-[40px] rounded-sm text-[#0103EC] bg-[#00000040] shadow-md hover:scale-105 mt-5">
                Choose plan
              </button>
            </Link>
            <div className="text-sm text-center text-[#979197] -mt-10">
              <p>
                or{" "}
                <Link to='/signup'><span className="text-[#1B42FF]">start free trial -&gt;</span></Link>
              </p>
              <p className="text-xs">🫶 No credit card required!</p>
            </div>

            <div className="border-[2px]"></div>
            <ul className="text-[14px] text-[#364050] flex flex-col gap-3">
              <li className="font-medium">Everything in Premium</li>
              {pricing.premium.map((item) => (
                <li key={item.id} className="flex items-center gap-2">
                  <img className="w-[14px] h-[11px]" src={img} alt="" />
                  {item.content}
                </li>
              ))}
            </ul>
          </section>
        </section>

        <section className="relative h-[707px] w-[272px] rounded-3xl py-10 px-5 flex flex-col justify-between hover:border-t-[30px] hover:border-[4px] border-[2px] border-[#0203EC] cursor-pointer">
          <section className="flex flex-col gap-12">
            <div className="h-[170px]">
              <h1 className="text-lg text-[#121D2F] font-bold uppercase">Custom</h1>
              <p className="text-[14px]/[20px] text-[#979197]">{custom}</p>
              <div className="mt-[18px]">
                <span className="text-[48px] font-medium">$4000</span>
                <p className="text-xs text-[#979197]">Custom price per GB</p>
              </div>
            </div>

            <Link to="/contact-sale">
              <button className="w-[230px] h-[40px] rounded-sm bg-[#00000040] text-[#0103EC] shadow-md hover:scale-105">
                Contact sales
              </button>
            </Link>
            <div className="text-sm text-center text-[#979197] -mt-10">
              <p>Custom quote and billing options</p>
            </div>

            <div className="border-[2px] border-[#F7F7F7] mt-3"></div>
            <ul className="text-[14px] text-[#364050] flex flex-col gap-3">
              <li className="font-medium">Custom quote and billing options</li>
              {pricing.custom.map((item) => (
                <li key={item.id} className="flex items-center gap-2">
                  <img className="w-[14px] h-[11px]" src={img} alt="" />
                  {item.content}
                </li>
              ))}
            </ul>
          </section>
        </section>
      </section>
    </div>
  );
};


export default Pricing;
