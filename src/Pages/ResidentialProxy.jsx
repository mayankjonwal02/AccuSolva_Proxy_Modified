import React from "react";
import Hero from "../components/mobileProxies/Hero";
import heroImg from "../assets/rpi.png";
import WhatMobileProxy from "../components/mobileProxies/WhatMobileProxy";
import heroImg2 from "../assets/residentialheroImg2.png";
import WhyMobileProxy from "../components/mobileProxies/WhyMobileProxy";
import AdvantagesResidentialProxy from "../components/residentialProxy/AdvantagesResidentialProxy";
import Usecase from "../components/Usecase";
import { residential } from "../data/ResidentialUseCase";
import Joinus from "../components/Joinus";
import Pricing from "../components/mobileProxies/Pricing";
import LeadingTeams from "../components/mobileProxies/LeadingTeams";
import OurCustomers from "../components/mobileProxies/OurCustomers";
import { pricing } from "../data/ResidentialProxyCard";
import bgImg from "../assets/rpbg1.png";
import img1 from "../assets/residentialadvImg1.png";
import img2 from "../assets/residentialadvImg2.png";
import img3 from "../assets/residentialadvImg3.png";
import img4 from "../assets/residentialadvImg4.jpg";
import QuickCheckout from "../components/residentialProxy/QuickCheckout";

const ResidentialProxy = () => {
  return (
    <>
      <Hero
        title1={"Residential Proxies"}
        content={
"Experience reliable IPv4 proxy servers designed to seamlessly rotate IP addresses for security and access to geo-restricted content."        }
        btn1={"Get Started"}
        btn2={"See Pricing"}
        btn3={"hidden"}
        img={heroImg}
        bgImg={bgImg}
        bgStyle={"bg-cover"}
        rounded={"rounded-br-[50px]"}
        link={'/signup'}
      />
      <WhatMobileProxy
        title={"What are Residential Proxy?"}
        tcolor={"text-[#0103EC]"}
        content1={
          "Our residential network consists of these actual home IPs in every country and city in the world.These IPs allow you to use a data collection request as a request for a real residence and treat it as a request from a real residence, so if it is used correctly, it will be very effective and undetectable."
        }
        content2={
          "Its exclusive intellectual property rights allow you to access a set of residential IPs, which are then dedicated to data collection needs and target domains. This can increase the success rate of certain use cases and remove any potential obstacles caused by repeated use."
        }
        btn={"hidden"}
        btn2={"hidden"}
        contcolor={"text-[#073141]"}
        img={heroImg2}
        rowReverse={"sm:flex-row"}
      />
      <WhyMobileProxy
        heading={"Why use Residential proxy?"}
        description={
          "Gain access to data that meets ethical standards to ensure the long-term value of data procurement and Sending unlimited concurrent requests can increase speed, cost effectiveness and overall efficiency."
        }
        title1={"All proxies in one place"}
        title2={"Manage multiple locations and menu"}
        title3={"Keep track of marketing campaigns"}
        title4={"Fully customizable to suit your business best"}
      />
      <AdvantagesResidentialProxy
        heading1={"Why choose"}
        heading2={"Residential Rotating"}
        heading3={"Proxies"}
        img1={img1}
        title1={"Bypass blocks or bans"}
        desc1={
          " Browse without blocking headache. Many website hosts actively defend against rotating ISP proxies by banning inauthentic users.That is why our proxies are ethically source genuine residential IPs."
        }
        img2={img2}
        title2={"Access anything"}
        desc2={
          "AccuSolva gives you access to the largest pool of genuine LP address from real users so you can easily collect information like a local user. Target complex website from a variety of source."
        }
        img3={img3}
        title3={"Global Network"}
        desc3={
          "Rotating residential IPs are for use cases that require more intensive data collection without any limits. With real residential proxies, you can access any website with higher frequency and speed to gain your competitive edge."
        }
        img4={img4}
        title4={"Simple setup"}
        desc4={
          "With AccuSolva’s Residential proxies, it’s easy to install proxy extensions or apps that allow you to switch between different IPs as needed. This allows you to use thousands of proxy IPs instantly without complex configurations."
        }
        boxbgcolor={"bg-[#D8F2FE]"}
        boxtitlecolor={"text-[#19186E]"}
        boxdesccolor={"text-[#073141B2]"}
      />
      <Usecase
        title1={"Residential Proxy"}
        title2={"Use Case"}
        data={residential}
      />
      <QuickCheckout />
      <Joinus
        title={"Interested in Rotating Residential Proxies?"}
        description1={
          "You can use shared IP to connect you to a huge IP pool, which includes a fixed allocation og IP for each available country/region."
        }
        description2={
          "Or, you can choose a country/region to purchase a separate IP without limiting the cost of bandwidth traffic.Pay based on the number of IPs and the traffic used."
        }
        btn1={"CONTACT SALES"}
        btn2={"hidden"}
        link1={"/contact-sale"}
      />
      <Pricing
        started={"5"}
        premium={"1000.0"}
        custom={"2500"}
        data={pricing}
      />
      <LeadingTeams
        heading={"Rapid Connection 30M IPs Worldwide"}
      />
      <OurCustomers />
    </>
  );
};

export default ResidentialProxy;
