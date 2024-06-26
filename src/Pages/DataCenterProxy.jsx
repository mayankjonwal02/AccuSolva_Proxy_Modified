import React from "react";
import Hero from "../components/mobileProxies/Hero";
import img1 from "../assets/dataCenterHeroImg.png";
import WhatMobileProxy from "../components/mobileProxies/WhatMobileProxy";
import img2 from "../assets/whatDataCenterImg.png";
import WhyMobileProxy from "../components/mobileProxies/WhyMobileProxy";
import ProxyType from "../components/ProxyType";
import img3 from "../assets/advDataCenterImg.png";
import Usecase from "../components/Usecase";
import { dataCenter } from "../data/DataCenterUseCase";
import Joinus from "../components/Joinus";
import Pricing from "../components/mobileProxies/Pricing";
import LeadingTeams from "../components/mobileProxies/LeadingTeams";
import OurCustomers from "../components/mobileProxies/OurCustomers";
import { pricing } from "../data/DataCenterProxyCard";
import ComplexTask from "../components/dataCenterProxy/ComplexTask";

const DataCenterProxy = () => {
  return (
    <>
      <Hero
        bg={"bg-gradient-to-r from-[#FFFFFF] to-[#B4E5FE]"}
        title1={"Data Center Proxy"}
        content={
          "Shared IP addresses provide a less costly way to access information on the web. You don’t need to spend time and money on configuration and maintenance of a proxy server - this is all handled for you"
        }
        btn1={"Get Started"}
        btn2={"See Pricing"}
        btn3={"hidden"}
        img={img1}
        bgStyle={"bg-cover"}
        rounded={"rounded-br-[50px]"}
        link={"/signup"}
      />
      <WhatMobileProxy
        title={"What are Data Center Proxy?"}
        tcolor={"text-[#0103EC]"}
        content1={
          "Datacenter proxies are IP addresses that come from servers in data centers. These proxies are not associated with internet service providers (ISPs) or residential networks, which means the traffic you route through them can be more susceptible to bot-blocking measures. People most often use datacenter proxy servers for scraping public web data that doesn’t require complex residential IPs, or managing multiple social media accounts."
        }
        btn={"hidden"}
        btn2={"hidden"}
        contcolor={"text-[#073141]"}
        img={img2}
        rowReverse={"sm:flex-row"}
      />
      <WhyMobileProxy
        heading={"Why use Data Center proxy?"}
        tcolor={"text-[#0103EC]"}
        description={
          "AccuSolva’s datacenter proxies are fast and reliable because we house them in dedicated data centers that are purpose-built for handling large volumes of internet traffic. We equip our data center proxies with high-speed internet connections and robust hardware to ensure consistent performance, making them ideal for high-traffic data scraping of public web data."
        }
        title1={"All proxies in one place"}
        title2={"Manage multiple locations and menu"}
        title3={"Keep track of marketing campaigns"}
        title4={"Fully customizable to suit your business best"}
      />
      <ProxyType
        heading1={"Advantages Of "}
        heading2={"Data Center Proxy"}
        boxHeading1={" Centralized management"}
        desc1={
          "Datacenter proxies are easy to organize because they originate from a consistent centralized location, unlike residential proxies which are distributed across consumer devices and networks."
        }
        desc2={""}
        img={img3}
        boxHeading2={"Scalability"}
        desc3={
          "Datacenter proxies are scalable and have the capacity to handle thousands of requests at once. This makes datacenter proxies particularly suitable for large-scale projects."
        }
        desc4={
          "That is why our proxies are ethically source genuine residential IPs."
        }
        textcolor={"text-[#1B1B1BD6]"}
        boxHeading3={"API Access"}
        desc5={
          "Simplify your workflow by seamlessly integrating Datacenter Proxies with your existing systems and applications. With easy API access, you can streamline processes and optimize efficiency. You get a different IP address with each new request, which helps avoid IP bans."
        }
        btn1={"hidden"}
        btn2={"hidden"}
      />
      <ComplexTask />
      <Usecase
        title1={"Data Center Proxy"}
        title2={"Use Case"}
        data={dataCenter}
      />
      <Joinus
        title={"Interested in IPv6 Datacenter Proxies?"}
        description1={
          "More than 10,000 people choose AccuSolva proxy for their business"
        }
        description2={""}
        btn1={"CONTACT SALES"}
        btn2={"hidden"}
        link1={"/contact-sale"}
      />
      <Pricing
        started={"79.0"}
        premium={"1000.0"}
        custom={"2250+"}
        data={pricing}
      />
      <LeadingTeams
        heading={"Need Data center Proxy in large project?"}
      />
      <OurCustomers />
    </>
  );
};

export default DataCenterProxy;
