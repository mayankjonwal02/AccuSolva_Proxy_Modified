import React from "react";
import Hero from "../components/mobileProxies/Hero";
import heroImg from "../assets/InstagramHeroImg.png";
import OurCustomers from "../components/mobileProxyPricing/OurCustomers";
import HelpProcess from "../components/adVerification/HelpProcess";
import { instagramProxy } from "../data/InstagramProxyy";
import ProxyType from "../components/ProxyType";
import img from "../assets/image.jpg";
import WhatMobileProxy from "../components/mobileProxies/WhatMobileProxy";
import img3 from "../assets/MRImg3.png";
import balls from "../assets/3dballsImg.png";
import smallBalls from "../assets/smallBallsImg.png";

const InstagramProxies = () => {
  return (
    <>
      <div className="relative flex flex-col w-full">
        <Hero
          bg={"bg-[#D6E4E2]"}
          title1={"Scrape Instagram without getting blocked or banned"}
          tcolor={"text-[#0103EC]"}
          content={
            "Scrape all the Instagram data you need without being blocked or getting your IP banned."
          }
          btn1={"Get Started"}
          btn2={"hidden"}
          btn3={"See Pricing"}
          img={heroImg}
          link={"/signup"}
          bgImg={smallBalls}
          bgStyle={"bg-right-top bg-[length:100px] sm:bg-[length:200px] lg:bg-[length:300px]"}
        />
        <img className="absolute hidden sm:block top-[330px] lg:top-[660px] xl:top-[480px] left-[130px] ld:left-[210px] xl:left-[270px] w-[400px] lg:w-[450px]" src={balls} alt="bg" />
        <HelpProcess
          bg={"bg-[#D6E4E2]"}
          title={"Why Businesses Choose AccuSolva Proxy for SEO Monitoring"}
          data={instagramProxy}
          btn={"Contact Sales"}
        />
      </div>
      <div className="relative bg-gradient-to-b from-[#D6E4E2] to-[#FFCBA5A6]">
      <img className="absolute hidden sm:block -top-[170px] right-[60px] lg:right-[160px] -rotate-45 w-[400px] lg:w-[500px]" src={balls} alt="bg" />
        <ProxyType
          heading1={"Just"}
          heading2={"need a proxy"}
          heading3={"for your scraper?"}
          boxHeading1={" Mobile Proxy"}
          desc1={
            "AccuSolva proxy gives you access to the largest pool of genuine LP address from real users so you can easily collect information like a local user."
          }
          desc2={"Target complex website from a variety of source."}
          img={img}
          boxHeading2={" Residential Proxy"}
          desc3={
            " Browse without blocking headaches. Many website hosts actively defend against rotating ISP proxies or rotating datacenter proxies by banning inauthentic users."
          }
          desc4={
            "That is why our proxies are ethically source genuine residential IPs."
          }
          boxHeading3={"Datacenter Proxy"}
          desc5={
            "Rotating residential IPs are for use cases that require more intensive data collection without any limits."
          }
          desc6={
            " With real residential proxies, you can access any website with higher frequency and speed to gain and maintain your competitive edge."
          }
          btn1={"hidden"}
          btn2={"hidden"}
          boxbgcolor={"bg-[#1B1A55]"}
          textcolor={"text-white"}
          MobileProxyLink={"/mobile-proxy"}
          ResidentialProxyLinnk={"/residential-proxy"}
          DataCenterProxyLink={"data-center-proxy"}
        />
        <WhatMobileProxy
          title={"99.55% proxy success rate"}
          tcolor={"text-[#0103EC]"}
          content1={
            "AccuSolva proxy proxies are an integral part of our ecosystem, seamlessly integrated into our operations. The AccuSolva proxy team has become more than just a service provider; they're now a trusted partner in our journey towards sustained success."
          }
          btn={"hidden"}
          btn2={"hidden"}
          contcolor={"text-[#073141B2]"}
          img={img3}
          rowReverse={"sm:flex-row"}
        />
        <OurCustomers
          heading2={"OUR CUSTOMERS"}
          desc1={"The best customer experience in the industry"}
          p1={"py-24"}
          rounded={"rounded-br-[50px] "}
        />
      </div>
    </>
  );
};

export default InstagramProxies;
