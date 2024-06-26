import React from "react";
import Hero from "../components/locationProxy/Hero";
import MoreLocation from "../components/MoreLocation";
import ListOfCountries from "../components/locationProxy/ListOfCountries";
import { country } from "../data/ListOfCountries";
import img from "../assets/locationSearchImg.jpg";
import OurCustomers from "../components/mobileProxyPricing/OurCustomers";
import bgImg from "../assets/locationbgImg.jpg";
import LocationForm from "../components/locationProxy/LocationForm";
import world from "../assets/world.jpg";

const Location = () => {
  return (
    <>
      <Hero
        heading={"THE FASTEST GLOBAL PROXY NETWORK"}
        desc={
          " Proxies can help mask your online identity, changing your IP address and improving your online security. This way, you can bypass geo-restrictions, avoid CAPTCHAs, and perform data collection – our clients use AccuSolva proxy for marketing, cybersecurity, academia, SEO, recruitment, and more."
        }
        formComp={<></>} //<LocationForm />
        py={"py-[60px]"}
        btn={"hidden"}
        hideImg={"hidden"}
        gap={"gap-[80px]  lg:gap-[270px]"}
      />
      <div className="w-full bg-white">
        <img src={world} alt="" className="w-full" />

      </div>
      {/* <div className="w-full p-10 flex justify-center" >
        <div className="w-4/5 flex flex-col justify-center items-center p-6 rounded-xl gap-7"  style={{backgroundColor:"#E6E6FA"}}>
            <h1 className="text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold text-center">
              We are adding 10 IPs , per day 
            </h1>
            <div className="flex flex-col lg:flex-row justify-center  w-full mt-7 gap-3 lg:gap-0 items-center">
                <input type="text" placeholder="Enter your email" className="w-full lg:w-3/5 border rounded-lg p-3 bg-clip-padding backdrop-filter backdrop-blur-sm bg-gray-10 text-sm md:text-lg  bg-opacity-20 text-white placeholder-black" />
                <button className="rounded-lg w-fit p-3  lg:w-1/5  hover:opacity-90 transition-opacity duration-300 text-white text-sm md:text-lg " style={{backgroundColor:"#5083C2"}}>Sign Up</button>
            </div>
        </div>
      </div> */}
      <MoreLocation
        heading1={"Most popular Countries"}
        heading2={""}
        desc={
          "Proxies can help mask your online identity, changing your IP address and improving your online security. This way, you can bypass geo-restrictions, avoid CAPTCHAs, and perform data collection – our clients use AccuSolva  proxy for marketing, cybersecurity, academia, SEO, recruitment, and more."
        }
        btn={"hidden"}
        bgImg={bgImg}
      />
      <ListOfCountries img={img} listOfAsia={country.listOfAsia} listOfAfrica={country.listOfAfrica} Oceania={country.Oceania} />
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

export default Location;
