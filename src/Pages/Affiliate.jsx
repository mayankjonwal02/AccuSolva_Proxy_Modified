import React from "react";
import Hero from "../components/affiliatie/Hero";
import WhyChoose from "../components/affiliatie/WhyChoose";
import Program from "../components/affiliatie/Program";
import Dashboard from "../components/affiliatie/Dashboard";
import Payment from "../components/affiliatie/Payment";
import AffiliateFaq from "../components/affiliatie/AffiliatieFaq";
import AffiliateJourney from "../components/affiliatie/AffiliateJourney";


const Affiliate = () => {
  return (
    <>
      <Hero/>
      <WhyChoose />
      <Program />
      <Dashboard />
      <Payment />
      <AffiliateFaq />
      <AffiliateJourney />
    </>
  );
};

export default Affiliate;
