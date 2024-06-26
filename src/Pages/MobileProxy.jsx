import React from "react";
import MobileTesting from "../assets/MobileTesting.png";
import Hero from "../components/mobileProxies/Hero";
import WhatMobileProxy from "../components/mobileProxies/WhatMobileProxy";
import img from "../assets/whatMobileProxyImg.png";
import WhyMobileProxy from "../components/mobileProxies/WhyMobileProxy";
import AdvantageMobileProxy from "../components/mobileProxies/AdvantageMobileProxy";
import Usecase from "../components/Usecase";
import { residential } from "../data/MobileResidential";
import Joinus from "../components/Joinus";
import Pricing from "../components/mobileProxies/Pricing";
import LeadingTeams from "../components/mobileProxies/LeadingTeams";
import OurCustomers from "../components/mobileProxies/OurCustomers";
import bgflower from "../assets/bgflower.png";
import { pricing } from "../data/MobileProxyCard";
import WhichProxy from "../components/WhichProxy";
import img1 from "../assets/MPImg.png";
import img2 from "../assets/MPIcon.png";
import img3 from "../assets/MPbgImg.png";
import AnyNeed from "../components/mobileProxies/AnyNeed";

const MobileProxy = () => {
  return (
    <>
      <Hero
        title1={"Mobile Proxies"}
        tcolor={"text-[#1B1A55]"}
        content={
          "Our mobile proxy servers support HTTP/SOCKS5 protocols, offer a unified Internet experience, and give you access to work on the Internet."
        }
        btn1={"Get Started"}
        btn2={"See Pricing"}
        btn3={"hidden"}
        img={MobileTesting}
        img2={bgflower}
        bgStyle={""}
        rounded={"rounded-br-[50px]"}
        link={"/signup"}
      />
      <WhatMobileProxy
        title={"What are Mobile Proxy?"}
        tcolor={"text-[#0103EC]"}
        content1={
          "Mobile proxy, also known as 5G/4G/3G/LTE proxy, are servers that assign mobile IP address, giving users the appearance of accessing the Internet from a mobile data network."
        }
        content2={
          "Mobile proxies offer rich functionality and can be used in various ways. This is made possible by our network’s robust infrastructure – in every use case, you can rely on AccuSolva’s proxies to avoid roadblocks and deliver accurate data with total anonymity."
        }
        btn={"hidden"}
        btn2={"hidden"}
        contcolor={"text-[#073141]"}
        img={img}
        rowReverse={"sm:flex-row"}
      />
      <WhyMobileProxy
        heading={"Why use mobile proxy?"}
        description={
          "The primary reason to use mobile proxy is high level of anonymity they provide. By utilizing mobile IP addresses, Users can bypass Geo-restrictions Avoid getting detected or banned during data collection processes."
        }
        title1={"All sales statistics in one place"}
        title2={"Manage multiple locations and menu"}
        title3={"Keep track of marketing campaigns"}
        title4={"Fully customizable to suit your business best"}
      />
      <AdvantageMobileProxy />
      <Usecase title1={"Mobile Proxy"} title2={"Use Case"} data={residential} />
      <AnyNeed />
      <Joinus
        title={"High Trust/Faster"}
        description1={
          "Since millions of mobile phone users use mobile IP addresses, and mobile operators have only thousands of IP addresses, the IP address checking system will highly trust addresses. The speed of internet access on mobile proxy will always be at high level!"
        }
        btn1={"START NOW"}
        btn2={"hidden"}
        link1={"/signup"}
      />
      <Pricing
        started={"79.0"}
        premium={"1000.0"}
        custom={"4000+"}
        data={pricing}
      />
      <LeadingTeams
        heading={"Mobile Proxies for $2.5 per Gb"}
      />
      <OurCustomers />
    </>
  );
};

export default MobileProxy;
