import React , {useState} from "react";
import Hero from "../components/Hero";
import About from "../components/homeProxy/About";
import Locations from "../components/homeProxy/Locations";
import Resources from "../components/homeProxy/Resources";
import Customers from "../components/homeProxy/Customers";
import ProxyType from "../components/ProxyType";
import Joinus from "../components/Joinus";
import Usecase from "../components/Usecase";
import StartTrial from "../components/homeProxy/StartTrial";
import heroImage from "../assets/heroImage.png";
import { useCase } from "../data/UseCase";
import img from "../assets/rotating.png";
import WhichProxy from "../components/WhichProxy";
import img1 from "../assets/PImg.png";
import img2 from "../assets/PIcon.png";
import img3 from "../assets/PbgImg.png";
import HaveQues from "../components/faq/HaveQues";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChain } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FaSkype } from "react-icons/fa";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import avatar from "../assets/avatar1.png";
// import Modal from '@mui/material/Modal';
// import Button from '@mui/material/Button';

import {
  ModalHeader,
  ModalDescription,
  ModalContent,
  ModalActions,
  Button,
  Header,
  Image,
  Modal,
} from 'semantic-ui-react'
import { faSkype } from "@fortawesome/free-brands-svg-icons";
const Home = () => {
  const [open, setOpen] = React.useState(false)
  return (
    <div className="w-full">
      <Hero
        title1={"Need Premium"}
        title2={"Residential Proxies!"}
        btn1={"Get Started"}
        btn2={"See Pricing"}
        img={heroImage}
      />
      <div className="w-full flex justify-end p-4">


        {/* <Popup trigger={<div className="bg-[#1d1160] rounded w-12 h-12 flex justify-center items-center" >
          <FontAwesomeIcon icon={faMessage} size="lg" className="text-white" />
        </div>} position="left center" modal className="h-fit w-fit">
          <div className="h-full w-full bg-[linear-gradient(to_right,#1CC5E9_9.2%,#17A5EA_21%)]">
            <img src={avatar} alt="avatar" className="w-20" />
          </div>
        </Popup> */}

        {/* <Modal 
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={}
    >
  
    </Modal> */}
        
    

        
      </div>
      <About />
      <Locations />
      <Resources />
      <Customers />
      <ProxyType
        heading1={""}
        heading2={"Residential Specialist"}
        boxHeading1={"Rotating Residential Proxy"}
        desc1={
          "Experience reliable IPv4 proxy servers designed to seamlessly rotate IP addresses for security and access to geo-restricted content."
        }
        desc2={"Target complex website from a variety of source."}
        img={img}
        boxHeading2={"Proxies for Daily Integration"}
        desc3={
          "Rotating residential IPs are for use cases that require more intensive data collection without any limits."
        }
        desc4={
          "With real residential proxies, you can access any website with higher frequency and speed to gain and maintain your competitive edge."
        }
        boxHeading3={"Worldwide Coverage"}
        desc5={
          "Our rotating proxy servers provide extensive coverage. You will get an uninterrupted data connection for browsing the web. Our extensive and well-distributed pool of IP addresses reduces the risk of blocking"
        }
        desc6={
          " That is why our proxies are ethically source genuine residential IPs."
        }
        btn1={"hidden"}
        btn2={"hidden"}
        boxbgcolor={"bg-[#1B1A55]"}
        textcolor={"text-white"}
        MobileProxyLink={"/mobile-proxy"}
        ResidentialProxyLinnk={"/residential-proxy"}
        DataCenterProxyLink={"data-center-proxy"}
      />
      <WhichProxy
        bg={"lg:flex-row bg-right-bottom bg-[#4379EE29] bg-[length:400px] md:bg-[length:700px] xl:bg-[length:900px]"}
        img1={img1}
        img2={img2}
        img3={img3}
        title={"Not Sure Which Proxy Would be the Best for You?"}
        desc={" Start the quiz! Answer 3 questions and we will provide couple of recommended services you might need for your use case."}
        btn={"Start Quiz"}
        btnColor={"bg-[#1814F3] text-[#FFFFFF]"}
      />
      <Joinus
        title={"Sign up in minutes. Join the movement."}
        description1={
          "AccuSolva Proxy goal is to protect what’s most precious to entrepreneurs: their time, energy and focus. We are creating the future of premium proxies, IPs and we’d love you to join us."
        }
        btn1={"Open an account"}
        btn2={"Start Free Trial"}
        link1={'/signup'}
        link2={'/signup'}
      />
      <Usecase
        bg={"bg-[#F8FBFB]"}
        title1={"AccuSolva Proxy For Any"}
        title2={"Use Case"}
        data={useCase}
      />
      <StartTrial />
      <HaveQues />
    </div>
  );
};

export default Home;
