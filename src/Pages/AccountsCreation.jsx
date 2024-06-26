import React from "react";
import Hero from "../components/mobileProxies/Hero";
import heroImg from "../assets/ACHeroImg.png";
import WhatMobileProxy from "../components/mobileProxies/WhatMobileProxy";
import img1 from "../assets/ACImg1.png";
import img2 from "../assets/ACImg2.png";
import img3 from "../assets/ACImg3.png";
import Usecase from "../components/Usecase";
import { accountCreationData } from "../data/AccountCreation";
import OurCustomers from "../components/mobileProxyPricing/OurCustomers";
import balls from "../assets/3dballsImg.png";
import smallBalls from "../assets/smallBallsImg.png";

const AccountsCreation = () => {
  return (
    <>
      <div className="relative">
        <Hero
          bg={"bg-[#D6E4E2]"}
          title1={"Proxy for Multiple Accounts Creation"}
          tcolor={"text-[#0103EC]"}
          content={
            "Residential proxies simulate real IP addresses, making them indistinguishable from real users. This network works exceptionally well for social networking and account setup tasks. These proxies seamlessly serve platforms like Instagram, Facebook, LinkedIn, and various forms of automation. This allows you to use the full range of marketing opportunities in social networks."
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
          className="absolute hidden sm:block top-[400px] lg:top-[850px] xl:top-[640px] left-[130px] ld:left-[210px] xl:left-[270px] w-[400px] lg:w-[450px]"
          src={balls}
          alt="bg"
        />
        <WhatMobileProxy
          bgcolor={"bg-[#D6E4E2]"}
          title={"Efficient Multi-Account Management with AccuSolva proxy"}
          tcolor={"text-[#0103EC]"}
          content1={
            "The service offers a reliable solution for the efficient management of multiple accounts, especially in the context of proxy accounts. Our tools and services ensure seamless control of multiple accounts across the web."
          }
          btn={"hidden"}
          btn2={"hidden"}
          contcolor={"text-[#073141B2]"}
          img={img1}
          rowReverse={"sm:flex-row"}
        />

        <WhatMobileProxy
          bgcolor={"bg-[#D6E4E2]"}
          title={"Proxies for Instagram, Twitter & Other Accounts"}
          tcolor={"text-[#0103EC]"}
          content1={
            "Proxies for Instagram accounts specialize in this popular social media platform. This applies to both the Twitter proxy account and the proxy Facebook account. They provide users with privacy, security, and the ability to manage multiple accounts effectively."
          }
          btn={"hidden"}
          btn2={"hidden"}
          contcolor={"text-[#073141B2]"}
          img={img2}
          rowReverse={"sm:flex-row-reverse"}
        />
      </div>
      <div className="relative bg-gradient-to-b from-[#D6E4E2] to-[#FFCBA5A6]">
      <img className="absolute hidden sm:block -top-[170px] right-[60px] lg:right-[160px] -rotate-45 w-[400px] lg:w-[500px]" src={balls} alt="bg" />
        <WhatMobileProxy
          title={"Preventing IP Blocks Using Proxies"}
          tcolor={"text-[#0103EC]"}
          content1={
            "Proxy accounts are a buffer between your device and websites or online services. They help to avoid blocking IP addresses. Proxies make it harder for websites to detect and stop your activity."
          }
          btn={"hidden"}
          btn2={"hidden"}
          contcolor={"text-[#073141B2]"}
          img={img3}
          rowReverse={"sm:flex-row"}
        />
        <Usecase
          title1={"Why Buy Proxy for Account"}
          title2={" Multiple Creation"}
          title3={"from AccuSolva proxy"}
          desc={
            "Buying from AccuSolva proxy offers several advantages. We provide high-quality and affordable services with a user-friendly interface. We also offer a variety of IP address options."
          }
          data={accountCreationData}
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

export default AccountsCreation;
