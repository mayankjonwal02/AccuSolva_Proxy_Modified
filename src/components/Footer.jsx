import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { FaGooglePlusG } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import chat from "../assets/chat.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full text-[#FFFFFF] bg-[#010D44] px-2 sm:px-12 lg:px-4 xl:px-16 py-12 mt-12">
      <section className="flex justify-between flex-wrap lg:flex-nowrap ">
        <section className="flex flex-col lg:justify-between gap-5 lg:h-[451px] lg:w-[560px] w-full">
          <div className="sm:w-[431px] ">
            <Link to="/">
              <h1 className="text-[25px] sm:text-[50px] tracking-tight font-medium bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-transparent bg-clip-text mt-5">
                AccuSolva
              </h1>
            </Link>
            <p className="text-base sm:text-2xl font-['IBM Plex Sans'] my-5">
              No monthly commitment. No additional fees. Try now!
            </p>
            <p className="text-xs sm:text-[14px]/[21px] font-semibold flex items-center gap-2">
              More about us <GoDotFill className="mt-1" />
            </p>
          </div>
          {/* -------------------------------------------------------------- */}
          <div className="flex flex-col gap-5 w-full">
            <Link to="/signup">
              <button className="w-full sm:w-[448px]  h-[50px] rounded-full bg-white text-[17.3px] font-medium text-[#1B1A55] hover:scale-105">
                Get Started
              </button>
            </Link>
            <Link to="/login">
              <button className="w-full sm:w-[448px] h-[50px] rounded-full text-[17.3px] font-medium border-[2px] hover:scale-105">
                Buy Now
              </button>
            </Link>
          </div>
          {/* -------------------------------------------------------------- */}
          <section className="flex flex-col sm:flex-row gap-5 sm:gap-40 lg:gap-20 xl:gap-24">
            {/* <div>
              <p className="text-[20px] font-medium text-[#FFFFFF] mb-6">
                Follow us
              </p>
              <div className="flex gap-[10px]">
                <span className="w-[50px] h-[50px] border border-[#FFFFFF40] rounded-full flex justify-center items-center">
                  <IoLogoFacebook className="w-4 h-4" />
                </span>
                <span className="w-[50px] h-[50px] border border-[#FFFFFF40] rounded-full flex justify-center items-center">
                  <FaGooglePlusG className="w-4 h-4" />
                </span>
                <span className="w-[50px] h-[50px] border border-[#FFFFFF40] rounded-full flex justify-center items-center">
                  <FaInstagram className="w-4 h-4" />
                </span>
                <span className="w-[50px] h-[50px] border border-[#FFFFFF40] rounded-full flex justify-center items-center">
                  <IoLogoYoutube className="w-4 h-4" />
                </span>
              </div>
            </div>
            <div>
              <p className="text-[20px] font-medium text-[#FFFFFF] mb-6">
                Let’s chat
              </p>
              <div className="flex gap-[10px]">
                <span className="w-[50px] h-[50px] border border-[#FFFFFF40] rounded-full flex justify-center items-center">
                  <img className="w-4 h-4" src={chat} alt="chat" />
                </span>
                <span className="w-[50px] h-[50px] border border-[#FFFFFF40] rounded-full flex justify-center items-center">
                  <FaTelegramPlane className="w-4 h-4" />
                </span>
                <span className="w-[50px] h-[50px] border border-[#FFFFFF40] rounded-full flex justify-center items-center">
                  <FaWhatsapp className="w-4 h-4" />
                </span>
              </div>
            </div> */}
          </section>
        </section>

        <section className="flex flex-col  gap-5 sm:w-[560px] sm:h-[451px] mb-12">
          <ul className="flex flex-wrap flex-row gap-[32px] text-base sm:text-lg font-medium">
            <Link to="/residential-proxy">
              <li>Proxies</li>
            </Link>
            <Link to="/residential-proxy-price">
              <li>Pricing</li>
            </Link>
            <Link to="/faq">
              <li>Resources</li>
            </Link>
            <Link to="/location">
              <li>Locations</li>
            </Link>
            <Link to="/blog">
              <li>Blog</li>
            </Link>
            <Link to="/#usecase">
              <li>Use Cases</li>
            </Link>
            {/* <Link to="/term-condition">
              <li>Terms & Conditions</li>
            </Link>
            <Link to="/refund-policy">
              <li>Refund Policy</li>
            </Link> */}
          </ul>
          {/* <div className="flex flex-col gap-5">
            <Link to="/signup">
              <button className="w-[248px] sm:w-[448px] h-[50px] rounded-full bg-white text-[17.3px] font-medium text-[#1B1A55] hover:scale-105">
                Get Started
              </button>
            </Link>
            <Link to="/login">
              <button className="w-[248px] sm:w-[448px] h-[50px] rounded-full text-[17.3px] font-medium border-[2px] hover:scale-105">
                Buy Now
              </button>
            </Link>
          </div> */}

          <section className="relative mt-[50px] flex-col">
            <section className="flex flex-row gap-5 justify-between pe-12">
              <div>
                <h1 className="text-[20px] font-medium tracking-tight mb-3">
                  Contact Us
                </h1>
                <div className="text-[13px] sm:text-[15px] text-[#8F9FA3]">
                  <p>General: sales@accusolvaproxy.com</p>
                  <p>Support: manager@accuSolvaproxy.com</p>
                  <p>Career: career@AccuSolva.com</p>
                </div>
              </div>
              <div>
                <h1 className="text-[20px] font-medium tracking-tight mb-3">
                  We are available
                </h1>
                <div className="text-[13px] sm:text-[15px] text-[#8F9FA3]">
                  <p>24/7</p>
                </div>
              </div>
            </section>
          
              <p className="text-[20px] font-medium text-[#FFFFFF] mb-6 mt-6">
                Let’s chat
              </p>
              <div className="flex gap-[10px]">
                {/* <span className="w-[50px] h-[50px] border border-[#FFFFFF40] rounded-full flex justify-center items-center">
                  <img className="w-4 h-4" src={chat} alt="chat" />
                </span>
                <span className="w-[50px] h-[50px] border border-[#FFFFFF40] rounded-full flex justify-center items-center">
                  <FaTelegramPlane className="w-4 h-4" />
                </span> */}
                <span className="w-[50px] h-[50px] border border-[#0ca6ff] rounded-full flex justify-center items-center">
                  <a href="https://join.skype.com/invite/uh0h1fp4c520" target="_blank" rel="noreferrer">
                  <FaSkype className="w-7 h-7" style={{color: "#0ca6ff"}} />
                  </a>
                </span>
              </div>

            {/* <section className="absolute right-0 bottom-[126px] sm:bottom-0 ">
              <p className="flex justify-end text-[13px] font-semibold right-0 mb-3">
                Languages
              </p>
              <ul className="flex gap-2 sm:gap-4 text-[13px] sm:text-[15px] text-[#8F9FA3] font-medium">
                <li>En</li>
                <li>Es</li>
                <li>Fr</li>
                <li>De</li>
                <li>Ru</li>
              </ul>
            </section> */}
          </section>
        </section>
      </section>

      <div className="text-[10px] sm:text-[14px] flex gap-4 border-t border-b py-12 border-[#FFFFFF] border-opacity-10">
        <p>© AccuSolva 2024</p>
        <p>Terms of Service</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between gap-4 font-normal text-[10px] sm:text-[14px] pt-4">
        <p>
          AccuSolva collect and processes your personal data to better respond
          to your requests.
        </p>
        <span className="underline">
          Learn more about how we manage your data and your rights.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
