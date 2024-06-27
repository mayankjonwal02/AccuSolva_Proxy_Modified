import React from "react";
import Hero from "../components/mobileProxies/Hero";
import heroImg from "../assets/MRHeroImg.png";
import WhatMobileProxy from "../components/mobileProxies/WhatMobileProxy";
import img1 from "../assets/gnImg1.png";
import img2 from "../assets/MRImg2.png";
import bgImg from "../assets/MRworldImg.png";
import img3 from "../assets/MRImg3.png";
import MoreLocation from "../components/MoreLocation";
import OurCustomers from "../components/mobileProxyPricing/OurCustomers";
import balls from "../assets/3dballsImg.png";
import smallBalls from "../assets/smallBallsImg.png";

const MarketResearch = () => {
  return (
    <>
      <div className="relative">
        <Hero
          bg={"bg-[#D6E4E2]"}
          title1={"Proxy for Market Research"}
          tcolor={"text-[#0103EC]"}
          content={
            "Gathering information and market analysis has become a key component of prosperity in the business world. This is especially important if you aim to work with different industries. Fortunately, the emphasis is on integrating into these markets. Restrictions imposed on corporate IP addresses must be overcome. This is where Proxy-Cheap helps its clients with high-quality proxy for market research."
          }
          btn1={"Get Started"}
          btn2={"hidden"}
          btn3={"hidden"}
          img={heroImg}
          link={"/signup"}
          link2={"/signup"}
          bgImg={smallBalls}
          bgStyle={
            "bg-right-top bg-[length:100px] sm:bg-[length:200px] lg:bg-[length:300px]"
          }
        />
        <WhatMobileProxy
          bgcolor={"bg-[#D6E4E2]"}
          title={"Anonymity and Privacy with AccuSolva proxy"}
          tcolor={"text-[#0103EC]"}
          content1={
            "AccuSolva proxy focuses on the privacy and confidentiality aspects of using the services. You get advanced access to information with complete anonymity.."
          }
          btn={"hidden"}
          btn2={"hidden"}
          contcolor={"text-[#073141B2]"}
          img={img1}
          rowReverse={"sm:flex-row"}
        />
         <img
          className="absolute hidden sm:block top-[500px] lg:top-[850px] xl:top-[640px] left-[130px] ld:left-[210px] xl:left-[270px] w-[400px] lg:w-[450px]"
          src={balls}
          alt="bg"
        />
        {/* <WhatMobileProxy
          bgcolor={"bg-[#D6E4E2]"}
          title={"Anonymity and Privacy with AccuSolva proxy"}
          tcolor={"text-[#0103EC]"}
          content1={
            "AccuSolva proxy focuses on the privacy and confidentiality aspects of using the services. You get advanced access to information with complete anonymity.."
          }
          btn={"hidden"}
          btn2={"hidden"}
          contcolor={"text-[#073141B2]"}
          img={img2}
          bgImg={bgImg}
          rowReverse={"sm:flex-row-reverse"}
        /> */}
      </div>
      <div className="relative bg-gradient-to-b from-[#D6E4E2] to-[#FFCBA5A6]">
      <img className="absolute hidden sm:block -top-[30px] right-[60px] lg:right-[160px] -rotate-45 w-[300px] lg:w-[400px]" src={balls} alt="bg" />
        {/* <WhatMobileProxy
          title={"Fast Market Data Collection"}
          tcolor={"text-[#0103EC]"}
          content1={
            "The service offers various methods and techniques for quick data collection in the context of trade analysis and business decision-making. Thanks to the service, you can get new essential knowledge that will help marketing."
          }
          btn={"hidden"}
          btn2={"hidden"}
          contcolor={"text-[#073141B2]"}
          img={img3}
          rowReverse={"sm:flex-row"}
        /> */}
        {/* <MoreLocation
          bgcolor={"bg-[#2148FD0D]"}
          heading1={"Buy Proxy for Market Research in Different Locations"}
          btn={"Need Other Location"}
        /> */}
        {/* <OurCustomers p1={"pb-24"} rounded={"rounded-br-[50px] "} /> */}
      </div>
    </>
  );
};

export default MarketResearch;
