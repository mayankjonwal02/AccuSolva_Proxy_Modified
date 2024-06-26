import React, { useState , useEffect } from "react";
import { Link , useNavigate} from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import loginImage from "../assets/login-img.jpg";
import { MdArrowForwardIos } from "react-icons/md";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const Login = () => {

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
      const res = await fetch("https://app.accusolvaproxy.com/signin", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="w-full flex gap-4">
      <div className="flex flex-col flex-1">
        <div className="flex justify-between items-center py-4 px-2 lg:px-6">
          <Link to="/">
            {" "}
            <h1 className="font-semibold text-[24px] sm:text-[28px] tracking-tight bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-transparent bg-clip-text">
              AccuSolva Proxy
            </h1>
          </Link>
          <Link to="/signup">
            <button className="font-medium text-[12px] sm:text-[16px] tracking-tight py-2 px-4 bg-[#4D09B6] text-white rounded-full w-[90px] sm:w-[145.68px] uppercase">
              Sign up
            </button>
          </Link>
        </div>
        <div className="max-w-[485px] mx-4 xl:mx-auto pt-4 flex flex-col border border-[#B3B3B3] rounded-[10px] shadow-md p-6 xl:p-12 ">
          <h1 className="text-[18.8px] text-[#424242] tracking-tight">
            WELCOME BACK <span className="text-[20.8px]">👋🏻</span>
          </h1>
          <p className="text-2xl sm:text-[31.25px] text-[#1B1A55] font-bold tracking-tight py-6">
            Continue to your Account.
          </p>
          <button className="w-full bg-[#E3F3FB] rounded-full flex items-center justify-center gap-4 py-4">
            <FcGoogle className="bg-white rounded-full w-[24px] h-[24px]" />{" "}
            <span className="text-[#424242]">Log In with Google</span>
          </button>
          <div className="flex items-center py-6">
            <div className="border-b-2 border-[#E0E0E0] flex-grow"></div>
            <p className="mx-4">Or use Email</p>
            <div className="border-b-2 border-[#E0E0E0] flex-grow"></div>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <div className="bg-gradient-to-t from-[#1300D2] to-[#7B10A0] rounded-[10px] p-[1px] relative">
              <div className="rounded-[10px] flex flex-col px-4 py-2 bg-[#F5F5F5]">
                <label className="text-[10.24px] font-medium text-[#616161] uppercase">
                  Email
                </label>
                <input
                  className="text-base focus:outline-none bg-transparent"
                  type="email"
                  placeholder="marrydeo@email.com"
                  id="email"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="bg-gradient-to-t from-[#1300D2] to-[#7B10A0] rounded-[10px] p-[1px] relative">
              <div className="border rounded-[10px] flex flex-col px-4 py-2 bg-[#F5F5F5]">
                <label className="text-[10.24px] font-medium text-[#616161] uppercase">
                  Password
                </label>
                <input
                  className="text-base focus:outline-none bg-transparent"
                  type={showPassword ? "text" : "password"}
                  placeholder="•••••••••••••••••••"
                  id="password"
                  onChange={handleChange}
                />
              </div>
            </div>
            <button className="text-[12.8px] uppercase py-4 rounded-[10px] bg-[#2F3538] text-white flex items-center justify-center gap-4">
              continue <MdArrowForwardIos />
            </button>
            <Link to="/forgot-password">
              <span className="text-[15px] text-[#419BF9] border-b border-[#419BF9]">
                Forgot password?
              </span>
            </Link>
            <div className="text-[12.8px] py-2">
              <span className="text-[#616161]">Are you a Newbie? </span>
              <Link to="/signup">
                <span className="text-[14.4px] sm:text-[14.8px] text-[#212121] pl-1 border-b border-[#212121] uppercase font-black">
                  GET STARTED - IT'S FREE
                </span>
              </Link>
            </div>
          </form>
        </div>
        <p className="text-[18px] font-medium text-[#5A3092] text-center mt-6">
          Terms and conditions | FAQs | Contact us
        </p>
      </div>
      <div className="hidden md:block md:w-[360px] lg:w-[540px]">
        <img
          className="w-full h-full  object-cover"
          src={loginImage}
          alt="login"
        />
      </div>
    </div>
  );
};

export default Login;
