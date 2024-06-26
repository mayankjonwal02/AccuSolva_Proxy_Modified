import React from "react";
import customerProfileImg from "../../assets/customerProfileImg.png";
import customerProfileImg2 from "../../assets/customerProfileImg2.png";
import customerProfileImg3 from "../../assets/customerProfileImg3.png";
import customerLogo from "../../assets/customerLogo.png";
import customerLogo2 from "../../assets/customerLogo2.png";
import customerLogo3 from "../../assets/customerLogo3.png";
import quotemark from "../../assets/quotemark.png";
import quotemark3 from "../../assets/quotemark3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const OurCustomers = () => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    arrows: false,
  };
  return (
    <></>
    // <main className="w-full py-10">
    //   <section className="text-center pb-28">
    //     <h1 className="text-[28px] text-center sm:text-[40px]/[34px] font-semibold text-[#0103EC] pb-5">
    //       OUR{" "}
    //       <span className="font-bold bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-transparent bg-clip-text">
    //         CUSTOMERS
    //       </span>
    //     </h1>
    //     <p className="text-[18px]/[24px] sm:text-[36px]/[34px]">
    //       The best customer experience in the industry
    //     </p>
    //   </section>

    //   <Slider {...settings}>
    //     <div>
    //       <section className="flex gap-4 lg:gap-10 rounded-xl bg-[#D7D9FF] p-6 sm:px-12 sm:py-10 mx-2 sm:mx-4 cursor-pointer h-[230px] sm:h-[200px] lg:h-[270px] xl:h-[250px] mb-10">
    //         <img
    //           className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] lg:w-[126px] lg:h-[126px]"
    //           src={customerProfileImg}
    //           alt="profileImg"
    //         />
    //         <div className="flex flex-col gap-4 lg:gap-6">
    //           <p className="text-sm/[16px] lg:text-[22px]/[29px] text-[#554D56]">
    //             AccuSolva is a famous proxy network platform, we have been using
    //             for hundreds of IPs We can use any coding language ,love it!
    //           </p>
    //           <p className="text-xs sm:text-sm lg:text-base">
    //             Tyler Stafford, Manager, Digital Operations & Innovation
    //           </p>
    //           <div className="flex justify-between">
    //             <img
    //               className="w-[50px] sm:w-[85px] sm:h-[30px]"
    //               src={customerLogo}
    //               alt="logo"
    //             />
    //             <img
    //               className="w-[30px] h-[20px] sm:w-[50px] sm:h-[40px] lg:w-[63px] lg:h-[50px]"
    //               src={quotemark}
    //               alt="quotes"
    //             />
    //           </div>
    //         </div>
    //       </section>
    //     </div>

    //     <div>
    //       <section className="flex gap-4 lg:gap-10 rounded-xl bg-[#D7D9FF] p-6 sm:px-12 sm:py-10  mx-2 sm:mx-4 cursor-pointer h-[230px] sm:h-[200px] lg:h-[270px] xl:h-[250px]">
    //         <img
    //           className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] lg:w-[126px] lg:h-[126px]"
    //           src={customerProfileImg2}
    //           alt="profileImg"
    //         />
    //         <div className="flex flex-col gap-4 lg:gap-6">
    //           <p className="text-sm/[16px] lg:text-[22px]/[29px] text-[#554D56]">
    //             AccuSolva seems like the best service we have seen to-date. The
    //             company has been very responsive to our needs even though we are
    //             a small customer.
    //           </p>
    //           <p className="text-xs sm:text-sm lg:text-base">
    //             Lanna Solci, Digital Experience Specialist
    //           </p>
    //           <div className="flex justify-between">
    //             <img
    //               className="w-[100px] sm:w-[168px] sm:h-[32px]"
    //               src={customerLogo2}
    //               alt="logo"
    //             />
    //             <img
    //               className="w-[30px] h-[20px] sm:w-[50px] sm:h-[40px] lg:w-[63px] lg:h-[50px]"
    //               src={quotemark}
    //               alt="quotes"
    //             />
    //           </div>
    //         </div>
    //       </section>
    //     </div>

    //     <div>
    //       <section className="flex gap-4 lg:gap-10 rounded-xl bg-[#D7D9FF] p-6 sm:px-12 sm:py-10 mx-2 sm:mx-4 cursor-pointer h-[230px] sm:h-[200px] lg:h-[270px] xl:h-[250px]">
    //         <img
    //           className="w-[50px] h-[50px] sm:w-[80px] sm:h-[80px] lg:w-[126px] lg:h-[126px]"
    //           src={customerProfileImg3}
    //           alt="profileImg"
    //         />
    //         <div className="flex flex-col gap-4 lg:gap-6">
    //           <p className="text-sm/[16px] lg:text-[22px]/[29px] text-[#554D56]">
    //             AccuSolva proxy is a one-stop solution for companies that need
    //             to get data all over the web from any source. No need to look up
    //             for proxies and check them.
    //           </p>
    //           <p className="text-xs sm:text-sm lg:text-base">
    //             Katherine Lee, Manager
    //           </p>
    //           <div className="flex justify-between">
    //             <img
    //               className="w-[100px] sm:w-[188px] sm:h-[32px]"
    //               src={customerLogo3}
    //               alt="logo"
    //             />
    //             <img
    //               className="w-[30px] h-[20px] sm:w-[50px] sm:h-[40px] lg:w-[63px] lg:h-[50px]"
    //               src={quotemark}
    //               alt="quotes"
    //             />
    //           </div>
    //         </div>
    //       </section>
    //     </div>
    //   </Slider>
    // </main>
  );
};

export default OurCustomers;
