import React from "react";
import Hero from "../components/mobileProxies/Hero";
import heroImg from "../assets/serpHeroImg.png";
import img from "../assets/serpImg.png";
import Usecase from "../components/Usecase";
import { serpData } from "../data/SerpTracking";
import bgImg from "../assets/MRworldImg.png";
import BusinessGoals from "../components/serpTracking/BusinessGoals";
import OurCustomers from "../components/mobileProxyPricing/OurCustomers";
import balls from "../assets/3dballsImg.png";
import smallBalls from "../assets/smallBallsImg.png";

const SERPTracking = () => {
  return (
    <>
      <div className="relative">
        <Hero
          bg={"bg-[#D6E4E2]"}
          title1={
            "Boost Your SERP Results With a Powerful SEO Monitoring Solution"
          }
          tcolor={"text-[#0103EC]"}
          content={
            "Elevate your SEO game with real-time tracking of search results & visibility. Unlock new backlink opportunities and improve SERP positions using AccuSolva proxy's expert SEO proxies."
          }
          btn1={"Get Started"}
          btn2={"hidden"}
          btn3={"See Pricing"}
          img={heroImg}
          link={"/signup"}
          bgImg={smallBalls}
          bgStyle={
            "bg-right-top bg-[length:100px] sm:bg-[length:200px] lg:bg-[length:300px]"
          }
        />
        <img
          className="absolute hidden sm:block top-[500px] lg:top-[850px]  xl:top-[660px] left-[130px] lg:left-[230px] xl:left-[270px] w-[400px] lg:w-[450px]"
          src={balls}
          alt="bg"
        />
        <Usecase
          bg={"bg-[#D6E4E2]"}
          title1={"Why Businesses Choose AccuSolva Proxy for SEO Monitoring"}
          data={serpData}
          bgImg={bgImg}
        />
      </div>
      <BusinessGoals />
      <OurCustomers
        bgcolor={"bg-gradient-to-b from-[#D6E4E2] to-[#FFCBA5A6]"}
        heading2={"OUR CUSTOMERS"}
        desc1={"The best customer experience in the industry"}
        p1={"py-24"}
        rounded={"rounded-br-[50px] "}
      />
    </>
  );
};

export default SERPTracking;
