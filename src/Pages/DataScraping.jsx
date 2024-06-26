import React from "react";
import Hero from "../components/mobileProxies/Hero";
import heroImg from "../assets/DSHeroImg.png";
import WhatMobileProxy from "../components/mobileProxies/WhatMobileProxy";
import img1 from "../assets/DSImg1.png";
import img2 from "../assets/DSImg2.png";
import img3 from "../assets/MRImg3.png";
import Usecase from "../components/Usecase";
import { serpData } from "../data/SerpTracking";
import OurCustomers from "../components/mobileProxyPricing/OurCustomers";
import balls from "../assets/3dballsImg.png";
import smallBalls from "../assets/smallBallsImg.png";

const DataScraping = () => {
  return (
    <>
      <div>
        <Hero
          bg={"bg-[#D6E4E2]"}
          title1={"Data Scraping Proxies"}
          tcolor={"text-[#0103EC]"}
          content={
            "Proxies deployed worldwide offer a valuable means of extracting data and exploring the various possibilities of web data extraction without any restrictions. Scraping proxies include remote DNS support to keep your personal information private. ISP Residential proxy servers are impressively fast. This allows you to use multiple connections simultaneously and complete the project on time."
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
          className="absolute hidden sm:block top-[500px] lg:top-[700px] left-[130px] ld:left-[210px] xl:left-[270px] w-[400px] lg:w-[450px]"
          src={balls}
          alt="bg"
        />

        <WhatMobileProxy
          bgcolor={"bg-[#D6E4E2]"}
          title={"Worldwide Scraping Proxy"}
          tcolor={"text-[#0103EC]"}
          content1={
            "A global proxy service for scraping facilitates web browsing by providing users with a network of servers from different locations worldwide. Web scraping ensures information privacy and offers high speed, making it easier for users to extract data and perform tasks efficiently."
          }
          btn={"hidden"}
          btn2={"hidden"}
          contcolor={"text-[#073141B2]"}
          img={img1}
          rowReverse={"sm:flex-row"}
        />
      </div>
      <WhatMobileProxy
        bgcolor={"bg-[#D6E4E2]"}
        title={"Secure Web Scraping Proxies"}
        tcolor={"text-[#0103EC]"}
        content1={
          "We offer reliable servers designed according to your requirements. Data extraction proxies guarantee your information's privacy and security and facilitate the efficient extraction of information from the Internet. They come with advanced features such as encryption and remote DNS support"
        }
        btn={"hidden"}
        btn2={"hidden"}
        contcolor={"text-[#073141B2]"}
        img={img2}
        rowReverse={"sm:flex-row-reverse"}
      />
      <div className="relative bg-gradient-to-b from-[#D6E4E2] to-[#FFCBA5A6]">
      <img className="absolute hidden sm:block -top-[170px] right-[60px] lg:right-[160px] -rotate-45 w-[400px] lg:w-[500px]" src={balls} alt="bg" />
        <WhatMobileProxy
          title={"Data Quality with AccuSolva proxy"}
          tcolor={"text-[#0103EC]"}
          content1={
            "AccuSolva-proxy provides reliable and high-performance web scraping proxies. They allow users to collect accurate and up-to-date information from websites."
          }
          btn={"hidden"}
          btn2={"hidden"}
          contcolor={"text-[#073141B2]"}
          img={img3}
          rowReverse={"sm:flex-row"}
        />
        <Usecase
          title1={"Why Businesses Choose AccuSolva Proxy for"}
          title2={"SEO Monitoring"}
          desc={
            "Buying from AccuSolva proxy offers several advantages. We provide high-quality and affordable services with a user-friendly interface. We also offer a variety of IP address options."
          }
          data={serpData}
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

export default DataScraping;
