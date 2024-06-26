import React from 'react'
import world from "../assets/world.jpg";
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function ContactUs() {
  const navigate = useNavigate();
  return (
    <div className='p-10'>
      <div className='flex flex-col w-full max-h-fit'>

        <div className="w-full  flex justify-center mt-[80px] font-bold" style={{ color: "#720e9e" }}>
          Contact Us
        </div>
        <div className="w-full  flex justify-center mt-[30px] font-bold text-3xl" >
          We'd  love to hear from you
        </div>
        <div className="w-full bg-white mt-10">
          <img src={world} alt="" className="w-full" />

        </div>
        <div className="w-full p-10 flex flex-col lg:flex-row justify-around gap-5">
          <div className='flex flex-col justify-center items-center'>
            <div className='font-bold'>Support</div>
            <div className='text-gray-500'>Our friendly team is here to help.</div>
            {/* <div className='font-bold mt-3' style={{ color: "#720e9e" }}>Support@accusolva.com</div> */}
            <div className='font-bold mt-3'>
              <a
                href="mailto:manager@accusolvaproxy.com"
                className="hover:underline"
                style={{ color: "#720e9e" }}
              >
                manager@accusolvaproxy.com              </a>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <div className='font-bold'>Sales</div>
            <div className='text-gray-500'>Questions or queries? Get in touch!</div>
            <div className='font-bold mt-3'>
              <a
                href="mailto:sales@accusolvaproxy.com"
                className="hover:underline"
                style={{ color: "#720e9e" }}
              >
                sales@accusolvaproxy.com
              </a>
            </div>        </div>
          <div className='flex flex-col justify-center items-center'>
            <div className='font-bold'>Contact Form</div>
            <div className='text-gray-500'>Contact our Online Support Desk</div>
            <div className='font-bold mt-3 underline-offset-4 underline cursor-pointer' style={{ color: "#720e9e" }} onClick={() => navigate("/contact-sale")}>Visit our contact page</div>
          </div>
        </div>
      </div>
    </div>
  )
}
