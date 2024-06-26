import React from "react";
import Hero from "../../components/locationProxy/Hero";
import bgImg from "../../assets/MRworldImg.png";
import Usecase from "../../components/Usecase";
import { useCaseWithoutLink } from "../../data/UseCaseWithoutLink";
import ListOfCountries from "../../components/locationProxy/ListOfCountries";
import { country } from "../../data/ListOfCountryWithoutLink";
import OurCustomers from "../../components/mobileProxyPricing/OurCustomers";

const Kyrgyzstan = () => {
  return (
    <>
      {" "}
      <Hero
       heading={"Kyrgyzstan Proxy 157 ips"}
       desc={
         "Are you tired of getting blocked from websites in Kyrgyzstan? Our network spans across different regions of Kyrgyzstan and can be used for web scraping, SEO, and marketing. With our fast and stable residential proxies, you can access local data and websites as if you were physically located in Kyrgyzstan."
       }
       desc2={"Stop getting blocked from websites and start scraping data from Kyrgyzstan with our reliable residential proxies. Our advanced proxy rotation system and large pool of available IP addresses ensure a high success rate for your operations. Our proxies are private and secure, ensuring that your online activity is kept confidential."}
       btn={"Contact Sales"}
        py={"py-[80px]"}
        bgImg={bgImg}
      />
      <Usecase
        bg={"bg-[#F8FBFB]"}
        title2={"Kyrgyzstan AccuSolva proxy"}
        title3={"for‍ Any Purpose or Use case"}
        data={useCaseWithoutLink}
      />
      <ListOfCountries hideImg={"hidden"} listOfAsia={country.listOfAsia} listOfAfrica={country.listOfAfrica} Oceania={country.Oceania} />
      <OurCustomers
        heading1={"What"}
        heading2={"Customers"}
        heading3={"Say about us"}
        desc2={
          "Our residential proxy users come from different backgrounds and create both small- and large-scale projects, utilizing millions of real IPs. Whatever your project may be, we would be pleased to have you as our client."
        }
        p1={"py-24"}
      />
    </>
  );
};

export default Kyrgyzstan;
