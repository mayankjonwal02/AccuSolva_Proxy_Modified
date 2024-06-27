import React from "react";
import myimage from "../assets/cs1.png"
import astro from "../assets/astro.jpg"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faSkype } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChain } from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faSkype } from "@fortawesome/free-brands-svg-icons";
const ContactSales = () => {
  return (
    <main
      className="w-full min-h-screen -mb-12 flex flex-col justify-top items-center gap-4  sm:px-[70px] lg:px-[118px] py-7 sm:py-[85px]  bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${myimage})`,

        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >

      <h1 className="text-2xl font-bold text-white mt-12 sm:text-3xl sm:mt-[70px] md:text-4xl lg:text-5xl xl:text-[52px]">
        Contact Sales
      </h1>
      <p className="text-white mt-3 sm:text-[20px] md:text-[24px] text-center">
        Reach out, and let's create a universe of possibilities together!
      </p>
      <div className="w-fit flex flex-col max-h-fit mx-9 mt-9 bg-white bg-opacity-[0.1] rounded-3xl bg-gradient-to-r from-[#FFFFFF1A]  via-[#FFFFFF03] to-[#FFFFFF1A] border-t-2 border-b-2">
        <div className=" w-fit lg:w-[589px]  min-h-full  flex flex-col justify-center mx-12 my-12 items-center ">
          {/* <div className="sm:text-xl xl:text-3xl font-bold text-white mt-12 ms-12">
            Let's Connect
          </div> */}
          <div className="w-full min-h-full   flex flex-col justify-center items-center visible " >
            <img src={astro} alt="" className=" p-4  rounded-3xl h-fit w-auto" />
          </div>
          <div className="w-full flex flex-col mt-7   flex-grow my-7">


            <div className="w-full flex flex-row px-9 gap-3 justify-center items-center ">
              <div className=" z-10 rounded w-full h-full bg-transparent flex flex-row  items-center justify-center">
                <div className="bg-[#1B1A55] me-5 rounded-2xl h-fit w-fit p-4 flex flex-col justify-center items-center  gap-3" >

                  <a href="mailto:sales@accusolvaproxy.com" target="_blank">
                    <FontAwesomeIcon icon={faMessage} style={{ height: "45px", width: "45px" }} className="text-white" beat />
                  </a>
                </div>

                <div className="bg-[#007FFF] me-5 rounded-2xl h-fit w-fit p-3 flex flex-col justify-center items-center  gap-3" >

                  <a href="https://join.skype.com/invite/uh0h1fp4c520" target="_blank">
                    <FontAwesomeIcon icon={faSkype} style={{ height: "50px", width: "50px" }} className="text-white" beat />
                  </a>
                </div>
              </div>
              {/* <input className='border-white rounded p-3 bg-clip-padding backdrop-filter backdrop-blur-sm w-full h-[76px] p-6 text-[20px] bg-white bg-opacity-20 text-white placeholder-white' type="text" placeholder='Company Email'  />
              <a href="https://join.skype.com/invite/uh0h1fp4c520" target="_blank">
              <FontAwesomeIcon icon={faSkype}  className="text-[#007FFF]" style={{width: "80px", height: "80px"}} />
            </a> */}
              {/* <input className='border-white rounded p-3 bg-clip-padding backdrop-filter backdrop-blur-sm w-full lg:w-1/2 bg-white bg-opacity-20 text-white placeholder-white' type="text" placeholder='Last Name' /> */}
            </div>
            {/* <div className="w-full flex flex-row px-9">
              <input className=' border-white rounded p-3 bg-clip-padding backdrop-filter backdrop-blur-sm w-full mt-3  bg-white bg-opacity-20 text-white placeholder-white' type="text" placeholder='Company Email' />

            </div> */}
            {/* <div className="w-full flex flex-row px-9">
              <input className=' border-white rounded p-3 bg-clip-padding backdrop-filter backdrop-blur-sm w-full mt-3  bg-white bg-opacity-20 text-white placeholder-white' type="text" placeholder='Company Name' />

            </div> */}
            {/* <div className="w-full flex flex-row px-9">
              <input className=' border-white rounded p-3 bg-clip-padding backdrop-filter backdrop-blur-sm w-full mt-3  bg-white bg-opacity-20 text-white placeholder-white' type="text" placeholder='Social Media Contact' />

            </div> */}
            {/* <div className="w-full flex flex-row px-9">
              <textarea className=' border-white h-full flex flex-grow rounded p-3 bg-clip-padding backdrop-filter backdrop-blur-sm w-full mt-3  bg-white bg-opacity-20 text-white placeholder-white' type="text" placeholder='Plz describe your use case......' />

            </div> */}
            {/* <div className="w-full flex flex-row px-9 gap-7 mt-3 justify-center p-7">
              <button className='relative overflow-hidden border-white rounded p-3 text-white w-1/2 bg-gradient-to-t from-[#1300D2] to-[#7B10A0] hover:opacity-90 transition-opacity duration-300'>
                <span className='relative z-10'>Submit</span>
              </button>
            </div> */}

          </div>
          {/* <div className="bg-white rounded-2xl w-12 h-12 flex justify-center items-center mt-[300px]" >
            <a href="https://join.skype.com/invite/uh0h1fp4c520" target="_blank">
              <FontAwesomeIcon icon={faSkype} size="2xl" className="text-[#007FFF]" />
            </a>
          </div> */}


          <div className="w-full p-10 flex flex-col justify-center gap-2 items-center ">
          <div className='flex flex-col justify-start items-start '>
            <div className="font-bold text-white">Mail to us:</div>
            {/* <div className='font-bold mt-3' style={{ color: "#720e9e" }}>Support@accusolva.com</div> */}
            <div className='font-bold mt-3'>
              <a
                href="mailto:manager@accusolvaproxy.com"
                className="hover:underline"
                style={{ color: "#979197" }}
              >
                manager@accusolvaproxy.com              </a>
            </div>
            <div className='font-bold mt-3'>
              <a
                href="mailto:sales@accusolvaproxy.com"
                className="hover:underline"
                style={{ color: "#979197" }}
              >
                sales@accusolvaproxy.com
              </a>
            </div>
          </div>
          <div className='flex flex-col justify-start items-start'>
            
            
                    </div>
          
        </div>
        </div>
      </div>


    </main>
  );
};

export default ContactSales;