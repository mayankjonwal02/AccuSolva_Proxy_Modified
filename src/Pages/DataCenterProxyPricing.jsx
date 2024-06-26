import React from "react";
import Hero from "../components/mobileProxies/Hero";
import img1 from "../assets/dataCenterHeroImg.png";
import ProxyType from "../components/ProxyType";
import img3 from "../assets/advDataCenterImg.png";
import MoreLocation from "../components/MoreLocation";
import Pricing from "../components/mobileProxyPricing/Pricing";
import { pricing } from "../data/DataCenterPricingCard";
import Plan from "../components/mobileProxyPricing/Plan";
import Pay from "../components/mobileProxyPricing/Pay";
import LeadingTeams from "../components/mobileProxies/LeadingTeams";
import OurCustomers from "../components/mobileProxyPricing/OurCustomers";
import WhyCustomerChoose from "../components/mobileProxyPricing/WhyCustomerChoose";
import bgImg from "../assets/locationbgImg.jpg";
import heroBgImg from "../assets/DCPbgImg.png";

const DataCenterProxyPricing = () => {
  return (
    <>
      <Hero
        title1={"Data Center Proxy"}
        content={
          "Shared IP addresses provide a less costly way to access information on the web. You don’t need to spend time and money on configuration and maintenance of a proxy server - this is all handled for you"
        }
        btn1={"Buy Now"}
        btn2={"hidden"}
        btn3={"hidden"}
        img={img1}
        bgImg={heroBgImg}
        bgStyle={"bg-cover"}
        rounded={"rounded-br-[50px]"}
        link={"/login"}
      />
      <ProxyType
        heading1={"Why choose Shared "}
        heading2={"Datacenter Proxies? "}
        boxHeading1={" Centralized management"}
        desc1={
          "Datacenter proxies are easy to organize because they originate from a consistent centralized location, unlike residential proxies which are distributed across consumer devices and networks."
        }
        img={img3}
        boxHeading2={"Scalability"}
        desc3={
          "Datacenter proxies are scalable and have the capacity to handle thousands of requests at once. This makes datacenter proxies particularly suitable for large-scale projects."
        }
        desc4={
          "That is why our proxies are ethically source genuine residential IPs."
        }
        boxHeading3={"API Access"}
        desc5={
          "Simplify your workflow by seamlessly integrating Datacenter Proxies with your existing systems and applications. With easy API access, you can streamline processes and optimize efficiency. You get a different IP address with each new request, which helps avoid IP bans."
        }
       
        btn1={"hidden"}
        btn2={"hidden"}
        boxbgcolor={"bg-white"}
        textcolor={"text-[#1B1B1BD6]"}
      />
      <MoreLocation
        heading1={"Datacenter Proxies"}
        heading2={"Locations "}
        btn={"Need Other Location"}
        bgImg={bgImg}
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
        heading={"Get started with Datacenter Proxy"}
      />
      <WhyCustomerChoose
        desc={
          "There is no shortage of reasons for the popularity of our Datacenter proxies. However, here are the most popular reasons why customers choose AccuSolva"
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

export default DataCenterProxyPricing;
