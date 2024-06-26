import React from "react";
import Hero from "../components/mobileProxies/Hero";
import bpHeroImg from "../assets/bpHeroImg.png";
import WhatMobileProxy from "../components/mobileProxies/WhatMobileProxy";
import gnImg1 from "../assets/gnImg1.png";
import gnImg2 from "../assets/gnImg2.png";
import OurCustomers from "../components/mobileProxyPricing/OurCustomers";
import balls from "../assets/3dballsImg.png";
import smallBalls from "../assets/smallBallsImg.png";

const BrandProtection = () => {
  return (
    <>
      <div className="relative">
        <Hero
          bg={"bg-[#D6E4E2]"}
          title1={"Proxy for Brand Protection"}
          tcolor={"text-[#0103EC]"}
          content={
            "Protecting your brand from malicious intent is critical to the security of your business. After you've put a lot of effort into establishing your business-building platforms and recognition, it becomes imperative to prioritize your defense. Proxy-Cheap offers premium proxies brand solutions to keep your brand data safe"
          }
          btn1={"hidden"}
          btn2={"hidden"}
          btn3={"hidden"}
          img={bpHeroImg}
          bgImg={smallBalls}
          bgStyle={"bg-right-top bg-[length:100px] sm:bg-[length:200px] lg:bg-[length:300px]"}
        />
         <img className="absolute hidden sm:block top-[380px] lg:top-[750px] xl:top-[500px] left-[130px] ld:left-[210px] xl:left-[270px] w-[400px] lg:w-[450px]" src={balls} alt="bg" />
        <WhatMobileProxy
          bgcolor={"bg-[#D6E4E2]"}
          title={"Preventing Phishing Attacks with AccuSolva proxy"}
          tcolor={"text-[#0103EC]"}
          content1={
            "AccuSolva proxy helps protect against phishing attacks, increasing online security and protecting your information."
          }
          btn={"Get Started"}
          btn2={"See Pricing"}
          contcolor={"text-[#073141B2]"}
          img={gnImg1}
          rowReverse={"sm:flex-row"}
          link1={"/signup"}
          link2={"/signup"}
        />
      </div>
      <div className="relative bg-gradient-to-b from-[#D6E4E2] to-[#FFCBA5A6]">
      <img className="absolute hidden sm:block -top-[170px] right-[60px] lg:right-[160px] -rotate-45 w-[400px] lg:w-[500px]" src={balls} alt="bg" />
        <WhatMobileProxy
          title={"The Best Online Brand Protection Solution"}
          tcolor={"text-[#0103EC]"}
          content1={
            "We offer comprehensive tools and strategies designed to save a company's brand and intellectual property online. Our proxy services will help you with this."
          }
          btn={"hidden"}
          btn2={"hidden"}
          contcolor={"text-[#073141B2]"}
          img={gnImg2}
          rowReverse={"sm:flex-row-reverse"}
        />
        <OurCustomers p1={"pb-24"} rounded={"rounded-br-[50px] "} />
      </div>
    </>
  );
};

export default BrandProtection;
