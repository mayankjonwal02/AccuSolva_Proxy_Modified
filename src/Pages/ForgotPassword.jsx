import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { MdArrowForwardIos } from "react-icons/md";
import email from "../assets/email.jpg";
import loginId from "../assets/loginId.jpg";
import img from "../assets/signupImg.jpg";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  
  return (
    <div
      className="w-full min-h-screen bg-no-repeat bg-cover sm:bg-contain pb-12"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="flex justify-between items-center py-4 lg:px-6">
        <Link to="/">
          {" "}
          <h1 className="font-semibold text-[24px] sm:text-[28px] tracking-tight bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-transparent bg-clip-text">
            AccuSolva Proxy
          </h1>
        </Link>
      </div>

      <div className="max-w-[485px] mx-4 sm:mx-auto border border-[#B3B3B3] rounded-[10px] shadow-md p-6 sm:p-12 bg-white">
        <h1 className="text-2xl sm:text-[31.25px] font-bold text-[#1B1A55] tracking-tight">
          Forgot password?
        </h1>
        <p className="text-sm sm:text-[15px] text-[#424242D6] font-medium tracking-tight py-4">
          Dont worry. We can help.
        </p>
        <form className="flex flex-col gap-4 w-full pt-10">
          <div className="bg-gradient-to-t from-[#1300D2] to-[#7B10A0] rounded-[10px] p-[1px]">
            <div className="relative rounded-[10px] flex flex-col justify-center py-4 px-2 sm:px-8 bg-white">
              <input
                className="text-base text-[#21212180] focus:outline-none"
                type="email"
                placeholder="Please fill in your email address"
                id="email"
                onChange={handleChange}
              />
              <img
                className="hidden sm:block w-7 h-5 absolute right-2 sm:right-8"
                src={email}
                alt="email"
              />
            </div>
          </div>
          <button className="text-[12.8px] uppercase py-4 rounded-[10px] bg-[#2F3538] text-white flex items-center justify-center gap-4">
            continue <MdArrowForwardIos />
          </button>
          <div className="py-10">
            <p className="text-[15px] font-medium text-[#616161] ">
              Remember your password?
            </p>
            <span className="text-[19px] text-[#424242] font-medium">
              Back to
              <Link to="/login">
                <span className="text-[#25BBC5]  font-black pl-1 border-b border-[#25BBC5] uppercase">
                  Log In
                </span>
              </Link>{" "}
            </span>
          </div>
        </form>
      </div>
      <p className="text-[18px] font-medium text-[#5A3092] text-center mt-6">
        Terms and conditions | FAQs | Contact us
      </p>
    </div>
  );
};

export default ForgotPassword;
