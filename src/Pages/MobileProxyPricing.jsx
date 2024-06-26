import React from "react";
import MobileTesting from "../assets/MobileTesting.png";
import Hero from "../components/mobileProxies/Hero";
import WhyMobileProxy from "../components/mobileProxyPricing/WhyMobileProxy";
import Pricing from "../components/mobileProxyPricing/Pricing";
import Plan from "../components/mobileProxyPricing/Plan";
import Pay from "../components/mobileProxyPricing/Pay";
import LeadingTeams from "../components/mobileProxies/LeadingTeams";
import WhyCustomerChoose from "../components/mobileProxyPricing/WhyCustomerChoose";
import OurCustomers from "../components/mobileProxyPricing/OurCustomers";
import { pricing } from "../data/MobilePricingCard";
import bgflower from "../assets/bgflower.png";
import bgImg from "..//assets/bgImg2.png";

const MobileProxyPricing = () => {
  return (
    <>
      <Hero
        title1={"Mobile Proxies"}
        content={
          "See the web from the eyes of real mobile users, using mobile IPs from across the world"
        }
        btn1={"Buy Now"}
        btn2={"hidden"}
        btn3={"hidden"}
        img={MobileTesting}
        img2={bgflower}
        bgImg={bgImg}
        bgStyle={""}
        rounded={"rounded-br-[50px]"}
        link={"/login"}
      />
      <WhyMobileProxy />
      <Pricing
        standard={"For those just starting with AccuSolva-proxy"}
        basic={"High Cost Performance"}
        premium={"For large teams to collaborate on many complex projects"}
        custom={"For large teams who need support, security, and control"}
        pricing={pricing}
      />
      <Plan />
      <Pay />
      <LeadingTeams
        heading={"Need Mobile Proxy in large project?"}
      />
      <WhyCustomerChoose
        desc={
          "There is no shortage of reasons for the popularity of our Mobile proxies. However, here are the most popular reasons why customers choose AccuSolva proxy"
        }
      />
      <OurCustomers
        heading1={"OUR"}
        heading2={"CUSTOMERS"}
        desc1={"The best customer experience in the industry"}
        p1={"py-24"}
      />
    </>
  );
};

export default MobileProxyPricing;
