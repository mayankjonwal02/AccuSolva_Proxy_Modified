import React from "react";
import Hero from "../components/mobileProxies/Hero";
import heroImg from "../assets/rppi.png";
import AdvantagesResidentialProxy from "../components/residentialProxy/AdvantagesResidentialProxy";
import Joinus from "../components/Joinus";
import Pricing from "../components/mobileProxyPricing/Pricing";
import { pricing } from "../data/ResidentialPricingCard";
import Plan from "../components/mobileProxyPricing/Plan";
import Pay from "../components/mobileProxyPricing/Pay";
import LeadingTeams from "../components/mobileProxies/LeadingTeams";
import OurCustomers from "../components/mobileProxyPricing/OurCustomers";
import WhyCustomerChoose from "../components/mobileProxyPricing/WhyCustomerChoose";
import bgImg from "../assets/ppbg.png";
import img1 from "../assets/residentialadvImg1.png";
import img2 from "../assets/residentialadvImg2.png";
import img3 from "../assets/residentialadvImg3.png";
import img4 from "../assets/residentialadvImg4.jpg";
import WhyMobileProxy from "../components/mobileProxyPricing/WhyMobileProxy";


const ResidentialProxyPricing = () => {
  return (
    <>
      <Hero
        title1={"Residential Proxies"}
        content={
          "Integrate easily with full documentation for swift onboarding. Create sub-users and manage them directly"
        }
        btn1={"Buy Now"}
        btn2={"hidden"}
        btn3={"hidden"}
        img={heroImg}
        bgImg={bgImg}
        bgStyle={"bg-cover"}
        rounded={"rounded-br-[50px]"}
        link={"https://app.accusolvaproxy.com/"}
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
          "Proxies gives you access to the largest pool of genuine LP address from real users so you can easily collect information like a local user. Target complex website from a variety of source."
        }
        img3={img3}
        title3={"Global Network"}
        desc3={
          "Rotating residential IPs are for use cases that require more intensive data collection without any limits. With real residential proxies, you can access any website with higher frequency and speed to gain and maintain your competitive edge."
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
      <Joinus
        title={"Pay by GB/IP"}
        description1={
          "You can use shared IP to connect you to a huge IP pool, which includes a fixed allocation og IP for each available country/region."
        }
        description2={
          "Or, you can choose a country/region to purchase a separate IP without limiting the cost of bandwidth traffic.Pay based on the number of IPs and the traffic used."
        }
        btn1={"hidden"}
        btn2={"hidden"}
      />
      <Pricing
        standard={"For those just starting with AccuSolva"}
        basic={"High Cost Performance"}
        premium={"Required by Top Users"}
        custom={"For large teams who need support, security, and control"}
        pricing={pricing}
      />
      <Plan />
      <Pay />
      <LeadingTeams
        heading={"Turn data insights into growth"}
      />
      <WhyCustomerChoose
        desc={
          "There is no shortage of reasons for the popularity of our Residential proxies. However, here are the most popular reasons why customers choose AccuSolva proxy"
        }
      />
      <OurCustomers
        heading1={"OUR"}
        heading2={"CUSTOMERS"}
        desc1={"The best customer experience in the industry"}
        p1={"py-24"}
      />
      <WhyMobileProxy />
    </>
  );
};

export default ResidentialProxyPricing;
