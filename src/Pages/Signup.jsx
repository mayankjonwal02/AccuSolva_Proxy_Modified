import React, { useEffect, useState } from "react";
import { Link,  useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import img from "../assets/signupImg.jpg";


const Signup = () => {

  const navigate = useNavigate()

  useEffect(() => {
     window.location.href = "https://app.accusolvaproxy.com/"
  }, []);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://app.accusolvaproxy.com/signup',{
        method: 'post',
        headers:{
          "Content-Type": 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div
      className="w-full min-h-screen bg-no-repeat bg-cover sm:bg-contain pb-12"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className="flex justify-between items-center py-4 px-2 lg:px-6">
        <Link to="/">
          {" "}
          <h1 className="font-semibold text-[24px] sm:text-[28px] tracking-tight bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-transparent bg-clip-text">
            AccuSolva Proxy
          </h1>
        </Link>
        <Link to="/login">
          <button className="font-medium text-[12px] sm:text-[16px] tracking-tight py-2 px-4 bg-[#4D09B6] text-white rounded-full w-[100px] sm:w-[145.68px] uppercase">
            Log in
          </button>
        </Link>
      </div>

      <div className="max-w-[485px] mx-4 sm:mx-auto pt-4 flex flex-col items-center border border-[#B3B3B3] rounded-[10px] shadow-md p-6 sm:p-12 bg-white">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#1B1A55] tracking-tight">
          Create Account
        </h1>
        <p className="text-xl sm:text-2xl text-[#424242] font-medium tracking-tight py-6 text-center">
          It's free to sign up and only takes a minute.
        </p>
        <button className="w-full bg-[#E3F3FB] rounded-full flex items-center justify-center gap-4 py-4 mb-6">
          <FcGoogle className="bg-white rounded-full w-[24px] h-[24px]" />{" "}
          <span className="text-[16px] text-[#424242]">
            Sign up with Google
          </span>
        </button>
        <div className="flex items-center py-6 w-full">
          <div className="border-b-2 border-[#E0E0E0] flex-grow"></div>
          <p className="mx-4 text-sm text-[#616161]">Or use Email</p>
          <div className="border-b-2 border-[#E0E0E0] flex-grow"></div>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
          <div className="bg-gradient-to-t from-[#1300D2] to-[#7B10A0] rounded-[10px] p-[1px] relative">
            <div className="rounded-[10px] flex flex-col px-4 py-2 bg-[#F5F5F5]">
              <label className="text-[10.24px] font-medium text-[#616161] uppercase">
                Email
              </label>
              <input
                className="text-base focus:outline-none p-1 bg-transparent"
                type="email"
                placeholder="marrydeo@email.com"
                id="email"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="bg-gradient-to-t from-[#1300D2] to-[#7B10A0] rounded-[10px] p-[1px] relative">
            <div className="rounded-[10px] flex flex-col px-4 py-2 bg-[#F5F5F5]">
              <label className="text-[10.24px] font-medium text-[#616161] uppercase">
                Password
              </label>
              <input
                className="text-base focus:outline-none p-1 bg-transparent"
                type={showPassword ? "text" : "password"}
                placeholder="•••••••••••••••••••"
                id="password"
                onChange={handleChange}
              />
            </div>
          </div>
          <button className="text-[12.8px] font-bold uppercase py-4 rounded-[10px] bg-[#2F3538] text-white">
            Sign up
          </button>
          <div className="flex justify-center items-center gap-2">
            <input
              className="w-[22px] h-[20px]"
              type="checkbox"
              name="accept"
            />
            <span className="text-[10.24px] text-[#757575]">
              By Signing up to AccuSolva Proxy, you agree to our Privacy Policy
              and Terms of Service
            </span>
          </div>
          <div className="text-[12.8px] py-2 text-left">
            <span className="text-[#616161]">Already a Member?</span>
            <Link to="/login">
              <span className="text-[14.8px] text-[#25BBC5] pl-1 border-b border-[#25BBC5] uppercase font-black">
                Log in
              </span>
            </Link>
          </div>
        </form>
      </div>

      <p className="text-[18px] font-medium text-[#5A3092] text-center mt-6">
        Terms and conditions | FAQs | Contact us
      </p>
    </div>
  );
};

export default Signup;
