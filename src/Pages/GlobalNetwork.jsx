import React from "react";
import Hero from "../components/mobileProxies/Hero";
import gnHeroImg from "../assets/gnHeroImg.png";
import WhatMobileProxy from "../components/mobileProxies/WhatMobileProxy";
import gnImg1 from "../assets/gnImg1.png";
import gnImg2 from "../assets/gnImg2.png";
import OurCustomers from "../components/mobileProxyPricing/OurCustomers";
import balls from "../assets/3dballsImg.png";
import smallBalls from "../assets/smallBallsImg.png";

const GlobalNetwork = () => {
  return (
    <>
      <div className="relative">
        <Hero
          bg={"bg-[#D6E4E2]"}
          title1={"Web Data Extraction"}
          tcolor={"text-[#0103EC]"}
          content={"Grab the most accurate data from around the world"}
          btn1={"Get Started"}
          btn2={"hidden"}
          btn3={"hidden"}
          img={gnHeroImg}
          bgImg={smallBalls}
          bgStyle={"bg-right-top bg-[length:100px] sm:bg-[length:200px] lg:bg-[length:300px]"}
          link={'/signup'}
        />
        <img className="absolute hidden sm:block top-[400px] lg:top-[500px] left-[130px] lg:left-[210px] xl:left-[270px] w-[360px] lg:w-[450px]" src={balls} alt="bg" />
        <WhatMobileProxy
          bgcolor={"bg-[#D6E4E2]"}
          title={"Optimize Data CollectionToday"}
          tcolor={"text-[#0103EC]"}
          content1={
            "In order to remain competitive and provide consumers with the best products or prices, companies need a lot of valid data. Almost every company participates in data collection in some from. They focus on collecting the most accurate data is critical to their business growth. Data extraction can include collecting data from websites to obtain price intelligence, or scraping public records for legal knowledge , or scraping social media data. With many types of web data extraction, it can be difficult to know the most effective way to determine what you need for your operation. No matter what kind of data or amount of data needs to be collected, the most critical aspect is its accuracy."
          }
          btn={"hidden"}
          btn2={"hidden"}
          contcolor={"text-[#073141B2]"}
          img={gnImg1}
          rowReverse={"sm:flex-row"}
        />
      </div>
      <div className="relative bg-gradient-to-b from-[#D6E4E2] to-[#FFCBA5A6]">
        <img className="absolute hidden sm:block -top-[170px] right-[60px] lg:right-[160px] -rotate-45 w-[400px] lg:w-[500px]" src={balls} alt="bg" />
        <WhatMobileProxy
          title={"How to Ensure The Accuracy of Information?"}
          tcolor={"text-[#0103EC]"}
          content1={
            "With the increasing use of advanced technologies based on personalization today, you will not be able to collect the data you need like ordinary consumers. Different sites implement certain blocking techniques (once they recognize you) to limit your ability to crawl the information you need. These blocks include IP-based blocking technology, bot-based blocking technology, and so on. In order to ensure that you collect the correct data for your business, you need to make the network transparent again, which means that you allow you to browse the website like a normal consumer. Using a residential IP with the correct settings to target a city or country will allow you to overcome these obstacles with a transparent and true view. Allows you to collect the most accurate data."
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

export default GlobalNetwork;
