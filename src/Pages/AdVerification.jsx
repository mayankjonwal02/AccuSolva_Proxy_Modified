import React from "react";
import Hero from "../components/mobileProxies/Hero";
import heroImg from "../assets/AdVerificatonHeroImg.png";
import HelpProcess from "../components/adVerification/HelpProcess";
import ProxyType from "../components/ProxyType";
import OurCustomers from "../components/mobileProxyPricing/OurCustomers";
import img from "../assets/AdVerificatonImg.png";
import { helpProcess } from "../data/HelpProcess";
import balls from "../assets/3dballsImg.png";
import smallBalls from "../assets/smallBallsImg.png";

const AdVerification = () => {
  return (
    <>
      <div className="relative flex flex-col w-full p-2">
        <Hero
          bg={"bg-[#D6E4E2]"}
          title1={"Ad Verification Proxies"}
          tcolor={"text-[#0103EC]"}
          content={
            "A proxy server reroutes traffic and serves as an intermediary between a user’s device and the destination server of a site or platform. Thanks to the advantages of the rerouting process, advertisers and marketers can use them to verify ads."
          }
          content2={
            "A proxy for ad verification is thus one that allows relevant professionals to assess ads from different locations. Proxy Cheap offers some of the best ad verification proxies online."
          }
          btn1={"Get Started"}
          btn2={"hidden"}
          btn3={"hidden"}
          img={heroImg}
          link={"/signup"}
          bgImg={smallBalls}
          bgStyle={
            "bg-right-top bg-[length:100px] sm:bg-[length:200px] lg:bg-[length:300px]"
          }
        />
        <img
          className="absolute hidden sm:block top-[450px] lg:top-[500px] xl:top-[640px] left-[120px] lg:left-[230px] w-[400px] lg:w-[450px]"
          src={balls}
          alt="bg"
        />
        <HelpProcess
          title={"How it Helps in the Ad Verification Process?"}
          desc={
            "AccuSolva proxy aims to help users find the best deals possible, and this is done by removing some friction points."
          }
          data={helpProcess}
          btn={"hidden"}
        />
      </div>
      <div className="relative bg-gradient-to-b from-[#D6E4E2] to-[#FFCBA5A6]">
        <img
          className="absolute -top-[100px] sm:-top-[170px] sm:right-[60px] lg:right-[160px] -rotate-45 w-[280px] sm:w-[400px] lg:w-[500px]"
          src={balls}
          alt="bg"
        />
        <ProxyType
          heading1={"Features of Ad Verification"}
          boxHeading1={"Multiple IP Addresses"}
          desc1={
            "A reliable proxy for ad verification should provide users with access to many IP addresses across many locations. Possessing this feature increases the proxy's ability to facilitate a comprehensive process."
          }
          img={img}
          boxHeading2={"Scalability"}
          desc3={
            "The chosen proxy for ad verification should be one that enables users to grow with the service. Their performance, service, and pricing should be such that it provides value for money that is translatable even when tasks and burdens increase."
          }
          desc4={
            "That is why our proxies are ethically source genuine residential IPs."
          }
          boxHeading3={"IP Rotation"}
          desc5={
            "Adjustable IP rotation can help reduce the need for multiple manual changes while verifying ads. However, users will probably still need to monitor the changes so as to note locations from which they have checked an ad."
          }
          btn1={"Get Started"}
          btn2={"See Pricing"}
          boxbgcolor={"bg-white"}
          textcolor={"text-[#1B1B1BD6]"}
          link1={"/signup"}
          link2={"/signup"}
        />
        <OurCustomers p1={"pb-24"} rounded={"rounded-br-[50px] "} />
      </div>
    </>
  );
};

export default AdVerification;
