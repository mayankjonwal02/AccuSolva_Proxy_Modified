import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { FaBars, FaComment, FaFontAwesome } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { BiMobileAlt } from "react-icons/bi";
import { GoGlobe } from "react-icons/go";
import { BsDatabaseAdd } from "react-icons/bs";
import { FiBook } from "react-icons/fi";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { MdConnectWithoutContact } from "react-icons/md";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-regular-svg-icons';
const Header = () => {
  const [proxiesDropDown, setProxiesDropDown] = useState(false);
  const [pricingDropDown, setPricingDropDown] = useState(false);
  const [resourcesDropDown, setResourcesDropDown] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [mdToggle, setMdToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  const handleMdToggle = () => {
    setMdToggle((prev) => !prev);
  };

  const handleProxiesDropDown = () => {
    setProxiesDropDown((prev) => !prev);
    setPricingDropDown(false);
    setResourcesDropDown(false);
  };

  const handlePricingDropDown = () => {
    setPricingDropDown((prev) => !prev);
    setProxiesDropDown(false);
    setResourcesDropDown(false);
  };

  const handleResourcesDropDown = () => {
    setResourcesDropDown((prev) => !prev);
    setProxiesDropDown(false);
    setPricingDropDown(false);
  };

  const closeToggle = () => {
    setToggle(false);
    setMdToggle(false);
    setProxiesDropDown(false);
    setPricingDropDown(false);
    setResourcesDropDown(false);
  };

  useEffect(() => {
    const mdQuery = window.matchMedia(
      "(min-width: 768px) and (max-width: 1023px)"
    );

    const handleResize = (e) => {
      setToggle(false);
      setMdToggle(false);
    };

    mdQuery.addEventListener("change", handleResize);

    // Initial check
    if (mdQuery.matches) {
      setToggle(false);
      setMdToggle(false);
    }

    return () => mdQuery.removeEventListener("change", handleResize);
  }, []);

  return (
    <header className="w-full py-4 sm:px-2 xl:px-8 fixed bg-white z-50 shadow-navbar">
      <div className="flex justify-between flex-col sm:flex-row sm:items-center">
        <div className="flex items-center justify-between px-2">
          <Link to="/" onClick={closeToggle}>
            <span className="font-semibold text-[24px] sm:text-[28px] tracking-tight bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-transparent bg-clip-text">
              AccuSolva
            </span>
          </Link>

          <button className="sm:hidden" onClick={handleToggle}>
            {toggle ? (
              <IoClose className="text-3xl text-[#1300D2]" />
            ) : (
              <FaBars className="text-[22px] text-[#1300D2]" />
            )}
          </button>
        </div>

        <ul
          className={`${
            toggle ? "flex flex-col" : "hidden"
          } sm:flex flex-col sm:flex-row gap-2 px-2 sm:items-center sm:gap-8 xl:gap-16 text-[16px] font-semibold text-[#073141] font-['IBM Plex Sans Hebrew'] z-50 overflow-y-auto sm:overflow-visible max-h-[calc(100vh-80px)]`}
        >
          <li className="relative py-3 sm:py-0">
            <button
              className="flex items-center cursor-pointer"
              onClick={handleProxiesDropDown}
            >
              <span
                className={
                  proxiesDropDown
                    ? "tracking-tight bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-transparent bg-clip-text "
                    : "text-[#073141] "
                }
              >
                Proxies
              </span>
              {proxiesDropDown ? (
                <RiArrowDropUpLine className="w-[24px] h-[24px] mt-1 text-[#1300D2] absolute right-1 sm:relative" />
              ) : (
                <RiArrowDropDownLine className="w-[24px] h-[24px] mt-1 text-[#073141] absolute right-1 sm:relative" />
              )}
            </button>
            <div
              className={`${
                proxiesDropDown ? "block " : "hidden"
              } sm:absolute sm:left-0 sm:mt-[22px] w-full sm:w-[336px]`}
            >
              <ul className="bg-white sm:border border-[#E4E7EC] p-5 rounded-xl shadow-navbar">
             {/*   <Link to="/mobile-proxy" onClick={closeToggle}>
                  <li className="flex p-5 gap-4">
                    <BiMobileAlt className="w-[24px] h-[24px] text-[#0103EC]" />
                    <div className="w-[232px]">
                      <span className="text-[16px] text-[#101828] font-semibold font-['Inter']">
                        Mobile Proxy
                      </span>
                      <p className="text-[14px]/[20px] text-[#475467] font-['Inter'] mt-1">
                        Over 30 million 3G/4G/5G mobile proxies
                      </p>
                    </div>
                  </li>
                </Link>*/}
                <Link to="/residential-proxy" onClick={closeToggle}>
                  <li className="flex p-5 gap-4">
                    <GoGlobe className="w-[24px] h-[24px] text-[#0103EC]" />
                    <div className="w-[232px]">
                      <span className="text-[16px] text-[#101828] font-semibold font-['Inter']">
                        Residential Proxy
                      </span>
                      <p className="text-[14px]/[20px] text-[#475467] font-['Inter'] mt-1">
                        Over 30 million 3G/4G/5G mobile proxies
                      </p>
                    </div>
                  </li>
                </Link>
               {/* <Link to="/data-center-proxy" onClick={closeToggle}>
                  <li className="flex p-5 gap-4">
                    <BsDatabaseAdd className="w-[24px] h-[24px] text-[#0103EC]" />
                    <div className="w-[232px]">
                      <span className="text-[16px] text-[#101828] font-semibold font-['Inter']">
                        Datacenter proxy
                      </span>
                      <p className="text-[14px]/[20px] text-[#475467] font-['Inter'] mt-1">
                        High-performing datacenter proxies
                      </p>
                    </div>
                  </li>
                </Link>*/}
              </ul>
            </div>
          </li>

          <li className="relative py-3 sm:py-0">
            <button
              className="flex cursor-pointer"
              onClick={handlePricingDropDown}
            >
              <span
                className={
                  pricingDropDown
                    ? "tracking-tight bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-transparent bg-clip-text"
                    : "text-[#073141]"
                }
              >
                Pricing
              </span>
              {pricingDropDown ? (
                <RiArrowDropUpLine className="w-[24px] h-[24px] mt-[2px] text-[#1300D2] absolute right-1 sm:relative" />
              ) : (
                <RiArrowDropDownLine className="w-[24px] h-[24px] mt-[2px] text-[#073141] absolute right-1 sm:relative" />
              )}
            </button>
            <div
              className={`${
                pricingDropDown ? "block" : "hidden"
              } sm:absolute sm:left-0 sm:mt-[22px] w-full sm:w-[336px]`}
            >
              <ul className="bg-white sm:border border-[#E4E7EC] p-5 rounded-xl shadow-navbar">
                {/* <Link to="/mobile-proxy-price" onClick={closeToggle}>
                  <li className="flex p-5 gap-4">
                    <BiMobileAlt className="w-[24px] h-[24px] text-[#0103EC]" />
                    <div className="w-[232px]">
                      <span className="text-[16px] text-[#101828] font-semibold font-['Inter']">
                        Mobile Pricing
                      </span>
                      <p className="text-[14px]/[20px] text-[#475467] font-['Inter] mt-1">
                        Buy 3G/4G Mobile Proxies with Automatic IP Rotation
                      </p>
                    </div>
                  </li>
                </Link> */}
                <Link to="/residential-proxy-price" onClick={closeToggle}>
                  <li className="flex p-5 gap-4">
                    <GoGlobe className="w-[24px] h-[24px] text-[#0103EC]" />
                    <div className="w-232px">
                      <span className="text-[16px] text-[#101828] font-semibold font-['Inter']">
                        Residential pricing
                      </span>
                      <p className="text-[14px]/[20px] text-[#475467] font-['Inter] mt-1">
                        Buy Residential Rotating Proxies
                      </p>
                    </div>
                  </li>
                </Link>
                {/* <Link to="/data-center-proxy-price" onClick={closeToggle}>
                  <li className="flex p-5 gap-4">
                    <BsDatabaseAdd className="w-[24px] h-[24px] text-[#0103EC]" />
                    <div className="w-232px">
                      <span className="text-[16px] text-[#101828] font-semibold font-['Inter']">
                        Datacenter Pricing
                      </span>
                      <p className="text-[14px]/[20px] text-[#475467] font-['Inter] mt-1">
                        Buy Fast IPv4 Datacenter Proxies
                      </p>
                    </div>
                  </li>
                </Link> */}
              </ul>
            </div>
          </li>

          <li className="relative py-3 sm:py-0">
            <button
              className="flex cursor-pointer"
              onClick={handleResourcesDropDown}
            >
              <span
                className={
                  resourcesDropDown
                    ? "tracking-tight bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-transparent bg-clip-text"
                    : "text-[#073141]"
                }
              >
                Resources
              </span>
              {resourcesDropDown ? (
                <RiArrowDropUpLine className="w-[24px] h-[24px] mt-[2px] text-[#1300D2] absolute right-1 sm:relative" />
              ) : (
                <RiArrowDropDownLine className="w-[24px] h-[24px] mt-[2px] text-[#073141] absolute right-1 sm:relative" />
              )}
            </button>
            <div
              className={`${
                resourcesDropDown ? "block" : "hidden"
              } sm:absolute sm:left-0 sm:mt-[22px] w-full sm:w-[336px]`}
            >
              <ul className="bg-white sm:border border-[#E4E7EC] p-5 rounded-xl shadow-navbar">
                <Link to="/blog" onClick={closeToggle}>
                  <li className="flex p-5 gap-4">
                    <FiBook className="w-[24px] h-[24px] text-[#0103EC]" />
                    <div className="w-[232px]">
                      <span className="text-[16px] text-[#101828] font-semibold font-['Inter']">
                        Blog
                      </span>
                      <p className="text-[14px]/[20px] text-[#475467] font-['Inter] mt-1">
                        The latest industry news, updates and info.
                      </p>
                    </div>
                  </li>
                </Link>
                <Link to="/faq" onClick={closeToggle}>
                  <li className="flex p-5 gap-4">
                    <IoIosInformationCircleOutline className="w-[24px] h-[24px] text-[#0103EC]" />
                    <div className="w-[232px]">
                      <span className="text-[16px] text-[#101828] font-semibold font-['Inter']">
                        FAQ
                      </span>
                      <p className="text-[14px]/[20px] text-[#475467] font-['Inter] mt-1">
                        Learn how our customers are making big changes.
                      </p>
                    </div>
                  </li>
                </Link>
                <Link to="/contact-us" onClick={closeToggle}>
                  <li className="flex p-5 gap-4">
                  <FontAwesomeIcon icon={faComment} className="w-[20px] h-[20px] text-[#0103EC]"  />
                    <div className="w-[232px]">
                      <span className="text-[16px] text-[#101828] font-semibold font-['Inter']">
                        Contact us
                      </span>
                      <p className="text-[14px]/[20px] text-[#475467] font-['Inter] mt-1">
                        Learn, fix a problem, and get answers to your questions.
                      </p>
                    </div>
                  </li>
                </Link>
              </ul>
            </div>
          </li>

          <li className="py-3 sm:py-0">
            <Link to="/affiliate" onClick={closeToggle}>
              Affiliate
            </Link>
          </li>

          <li className="py-3 sm:py-0">
            <Link to="/location" onClick={closeToggle}>
              Locations
            </Link>
          </li>

          <div
            className={`${
              toggle ? "flex flex-col sm:flex-row" : "hidden"
            } lg:flex justify-between lg:justify-normal items-center mt-6 lg:mt-0 gap-2 text-[16px] font-medium tracking-tight`}
          >
            <div className="sm:hidden w-full flex gap-6 mb-10">
              <div className="w-[160px] flex flex-col gap-4">
                {/* <Link
                  to="/"
                  className="text-[16px]/[24px] font-semibold font-['Inter'] text-[#475467]"
                >
                  About us
                </Link> */}
                <Link
                  to="https://app.accusolvaproxy.com/"
                  className="text-[16px]/[24px] font-semibold font-['Inter'] text-[#475467]"
                >
                  Free trial
                </Link>
                <Link
                  to="/"
                  className="text-[16px]/[24px] font-semibold font-['Inter'] text-[#475467]"
                >
                  Careers
                </Link>
              </div>
              <div className="w-[160px] flex flex-col gap-4">
                <Link
                  to="/"
                  className="text-[16px]/[24px] font-semibold font-['Inter'] text-[#475467]"
                >
                  Use cases
                </Link>
                <Link
                  to="/contact-us"
                  className="text-[16px]/[24px] font-semibold font-['Inter'] text-[#475467]"
                >
                  Contact us
                </Link>{" "}
                {/* <Link
                  to="/"
                  className="text-[16px]/[24px] font-semibold font-['Inter'] text-[#475467]"
                >
                  Cookie settings
                </Link> */}
              </div>
            </div>
            <Link to="/contact-sale" onClick={closeToggle} className="w-full">
              <button className="border border-[#0103ECBA] w-full sm:w-[145px] h-[40px] rounded-full">
                <span className="bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-transparent bg-clip-text">
                  Contact Sales
                </span>
              </button>
            </Link>
            <Link to="https://app.accusolvaproxy.com/" className="w-full">
              <button className="w-full sm:w-[145px] h-[40px] rounded-full bg-[#4D09B6] text-white">
                Log In
              </button>
            </Link>
          </div>
        </ul>

        <button className="hidden md:block lg:hidden" onClick={handleMdToggle}>
          {mdToggle ? (
            <IoClose className="text-3xl text-[#1300D2]" />
          ) : (
            <FaBars className="text-[22px] text-[#1300D2]" />
          )}
        </button>
      </div>
      <div
        className={`${
          mdToggle ? "flex flex-col" : "hidden"
        } lg:hidden  mt-6 gap-2 text-[16px] font-medium tracking-tight px-3`}
      >
        <div className="lg:hidden w-full flex justify-between gap-6 mb-10">
          <Link
            to="/"
            className="text-[16px]/[24px] font-semibold font-['Inter'] text-[#475467]"
          >
            About us
          </Link>
          <Link
            to="/"
            className="text-[16px]/[24px] font-semibold font-['Inter'] text-[#475467]"
          >
            Free trial
          </Link>
          <Link
            to="/"
            className="text-[16px]/[24px] font-semibold font-['Inter'] text-[#475467]"
          >
            Careers
          </Link>
          <Link
            to="/"
            className="text-[16px]/[24px] font-semibold font-['Inter'] text-[#475467]"
          >
            Use cases
          </Link>
          <Link
            to="/"
            className="text-[16px]/[24px] font-semibold font-['Inter'] text-[#475467]"
          >
            Contact us
          </Link>{" "}
          <Link
            to="/"
            className="text-[16px]/[24px] font-semibold font-['Inter'] text-[#475467]"
          >
            Cookie settings
          </Link>
        </div>
        <div className="flex justify-between">
          <Link to="/contact-sale" onClick={closeToggle}>
            <button className="border border-[#0103ECBA] w-[145px] h-[40px] rounded-full">
              <span className="bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-transparent bg-clip-text">
                Contact Sales
              </span>
            </button>
          </Link>
          <Link to="/login">
            <button className="w-[145px] h-[40px] rounded-full bg-[#4D09B6] text-white">
              Log In
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
