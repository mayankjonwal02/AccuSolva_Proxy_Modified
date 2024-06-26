import React from "react";
import Hero from "../components/mobileProxies/Hero";
import heroImg from "../assets/CSHeroImg.png";
import AdvantagesResidentialProxy from "../components/residentialProxy/AdvantagesResidentialProxy";
import img1 from "../assets/CSImg1.jpg";
import img2 from "../assets/CSImg2.jpg";
import img3 from "../assets/CSImg3.jpg";
import img4 from "../assets/CSImg4.jpg";
import ProxyType from "../components/ProxyType";
import img from "../assets/image.jpg";
import WhatMobileProxy from "../components/mobileProxies/WhatMobileProxy";
import OurCustomers from "../components/mobileProxyPricing/OurCustomers";
import img5 from "../assets/MRImg3.png";
import balls from "../assets/3dballsImg.png";
import smallBalls from "../assets/smallBallsImg.png";


const Cybersecurity = () => {
  return (
    <>
    <div className="relative">
      <Hero
        bg={"bg-[#D6E4E2]"}
        title1={"Use high quality proxies to boost your business cybersecurity"}
        tcolor={"text-[#0103EC]"}
        content={
          "Identify security threats, prevent data loss, conduct testing and safeguard your business infrastructure with AccuSolva proxies."
        }
        btn1={"Get Started"}
        btn2={"hidden"}
        btn3={"See Pricing"}
        img={heroImg}
        link={'/signup'}
        bgImg={smallBalls}
        bgStyle={"bg-right-top bg-[length:100px] sm:bg-[length:200px] lg:bg-[length:300px]"}
      />
      <img className="absolute hidden sm:block top-[330px] lg:top-[630px] xl:top-[500px] left-[130px] ld:left-[210px] xl:left-[270px] w-[400px] lg:w-[450px]" src={balls} alt="bg" />
      <AdvantagesResidentialProxy
        bg={"bg-[#D6E4E2]"}
        heading1={"Why Businesses Choose"}
        heading2={"AccuSolva proxy"}
        heading3={"for Cybersecurity"}
        img1={img1}
        title1={"Seamless monitoring"}
        desc1={
          "Collect large amounts of security and threat data from any country in the world (excluding the State of Texas, USA)."
        }
        img2={img2}
        title2={"Easy setup"}
        desc2={
          "Customize your User Dashboard to highlight the security data you need."
        }
        img3={img3}
        title3={"Preventative nature"}
        desc3={
          "Don’t wait until it’s too late: detect security threats and prevent them from hurting your brand."
        }
        img4={img4}
        title4={"Zero restrictions"}
        desc4={
          "Hide your cybersecurity activities and avoid IP blocks and captchas."
        }
        boxbgcolor={"bg-[#1B1A55]"}
        boxtitlecolor={"text-white"}
        boxdesccolor={"text-white"}
      />
      </div>
      <div className=" relative bg-gradient-to-b from-[#D6E4E2] to-[#FFCBA5A6]">
      <img className="absolute -top-[90px]  sm:-top-[170px] sm:right-[60px] lg:right-[160px] -rotate-45 w-[280px] sm:w-[400px] lg:w-[500px]" src={balls} alt="bg" />
        <ProxyType
          heading1={"Choose the  "}
          heading2={"Proxy Solution"}
          heading3={"for Your Needs"}
          boxHeading1={" Mobile Proxy"}
          desc1={
            "AccuSolva proxy gives you access to the largest pool of genuine LP address from real users so you can easily collect information like a local user."
          }
          desc2={"Target complex website from a variety of source."}
          img={img}
          boxHeading2={" Residential Proxy"}
          desc3={
            " Browse without blocking headaches. Many website hosts actively defend against rotating ISP proxies or rotating datacenter proxies by banning inauthentic users."
          }
          desc4={
            "That is why our proxies are ethically source genuine residential IPs."
          }
          boxHeading3={"Datacenter Proxy"}
          desc5={
            "Rotating residential IPs are for use cases that require more intensive data collection without any limits."
          }
          desc6={
            " With real residential proxies, you can access any website with higher frequency and speed to gain and maintain your competitive edge."
          }
          btn1={"Start Trail"}
          link1={'/signup'}
          btn2={"hidden"}
          boxbgcolor={"bg-[#1B1A55]"}
          textcolor={"text-white"}
          MobileProxyLink={"/mobile-proxy"}
          ResidentialProxyLinnk={"/residential-proxy"}
          DataCenterProxyLink={"data-center-proxy"}
        />
        <WhatMobileProxy
          title={"Integrate seamlessly"}
          tcolor={"text-[#0103EC]"}
          content1={
            "Integrate AccuSolva proxy with a wide array of popular programming languages, including PHP, Python, .Net, Java, JavaScript, C/C++, C#, and more. For browsers, browser extensions like FoxyProxy simplify proxy configuration in just a few clicks. Detailed code samples, tutorials, and docs ensure your project is up and running quickly."
          }
          btn={"hidden"}
          btn2={"hidden"}
          contcolor={"text-[#073141B2]"}
          img={img5}
          rowReverse={"sm:flex-row"}
        />
        <WhatMobileProxy
          title={"Get started in just five minutes"}
          tcolor={"text-[#0103EC]"}
          content1={
            "AccuSolva proxy proxies are an integral part of our ecosystem, seamlessly integrated into our operations. The AccuSolva proxy team has become more than just a service provider; they're now a trusted partner in our journey towards sustained success."
          }
          btn={"hidden"}
          btn2={"hidden"}
          contcolor={"text-[#073141B2]"}
          img={img5}
          rowReverse={"sm:flex-row-reverse"}
          rotateImg={"transform scale-x-[-1]"}
        />
        <OurCustomers p1={"pb-24"} rounded={"rounded-br-[50px] "} />
      </div>
    </>
  );
};

export default Cybersecurity;
