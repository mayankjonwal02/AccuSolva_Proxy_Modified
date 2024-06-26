import React from "react";
import img1 from "../../assets/starHeadingImg.png";
import img2 from "../../assets/starsImg.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img3 from "../../assets/DCBgImg1.png";
import img4 from '../../assets/DCbgImg2.png';
import img5 from '../../assets/DCbgImg3.png';

const OurCustomers = ({
  bgcolor,
  heading1,
  heading2,
  heading3,
  desc1,
  desc2,
  p1,
  p2,
  rounded,
}) => {
  const settings = {
    infinite: true,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <></>
    // <main className={`relative w-full md:px-2 ${p1} ${bgcolor} ${rounded}`}>
    //   <img className="absolute -z-10 right-0 sm:-top-56 w-[680px] " src={img3} alt="bg" />
    //   <img className="absolute -z-10  xl:left-24 " src={img4} alt="bg" />
    //   <img className="absolute -z-10 -top-48 sm:left-36 xl:left-80 " src={img5} alt="bg" />
    //   <section className={`max-w-[857px] text-center ${p2} px-2 mx-auto`}>
    //     <h1 className="text-[28px] text-center sm:text-[36px]/[34px] font-semibold text-[#0103EC] pb-4">
    //       {heading1}{" "}
    //       <span className="font-bold bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-transparent bg-clip-text">
    //         {heading2}{" "}
    //       </span>
    //       {heading3}
    //     </h1>
    //     <p className="text-[24px] sm:text-[40px]/[34px] text-center mx-auto">
    //       {desc1}
    //     </p>
    //     <p className="text-[18px] sm:text-[20px]/[48px] text-[#1B1B1BD6] font-semibold text-center py-12">
    //       {desc2}
    //     </p>
    //   </section>

    //   <div className="flex justify-center items-center mt-10 mb-16">
    //     <div className="lg:w-[408px] border-b-2 border-[#B0B0B0] flex-grow lg:ml-12 xl:ml-24 mr-4 mt-[2px]"></div>
    //     <div className="w-[256px] flex items-center">
    //       <p className="text-[16px]/[24px] text-[#232525] font-bold text-nowrap mr-1">
    //         All 5-stars reviews on
    //       </p>
    //       <img className="w-[92px] h-[26px] mt-[3px]" src={img1} alt="star" />
    //     </div>
    //     <div className="lg:w-[408px] border-b-2 border-[#B0B0B0] flex-grow ml-4 lg:mr-12 lg:ml-[75px] xl:mr-24 xl:ml-4 mt-[2px]"></div>
    //   </div>

    //   <Slider {...settings}>
    //     <div className="w-[409px] px-10 cursor-pointer">
    //       <div className="flex items-center gap-4 mb-4">
    //         <img className="w-[96px] h-[18px]" src={img2} alt="stars" />
    //         <h1 className="text-[20px]/[30px] font-bold text-[#232525]">
    //           Shelby T
    //         </h1>
    //       </div>
    //       <p className="text-[16px]/[24px] font-bold text-[#232525]">
    //         We've been working with AccuSolva for a little over a year. These
    //         proxies are the highest quality product on the proxy market, high
    //         speed connection and importantly It’s pretty safe.
    //       </p>
    //     </div>
    //     <div className="w-[409px] px-10 cursor-pointer">
    //       <div className="flex items-center gap-4 mb-4">
    //         <img className="w-[96px] h-[18px]" src={img2} alt="stars" />
    //         <h1 className="text-[20px]/[30px] font-bold text-[#232525]">
    //           Brad B
    //         </h1>
    //       </div>
    //       <p className="text-[16px]/[24px] font-bold text-[#232525]">
    //         We have been using AccuSolva for a long time. AccuSolva supports
    //         many use-cases, making data extraction more efficient. Good usage
    //         monitoring and expense control - are key elements for us.
    //       </p>
    //     </div>
    //     <div className="w-[409px] px-10 cursor-pointer">
    //       <div className="flex items-center gap-4 mb-4">
    //         <img className="w-[96px] h-[18px]" src={img2} alt="stars" />
    //         <h1 className="text-[20px]/[30px] font-bold text-[#232525]">
    //           Heather B
    //         </h1>
    //       </div>
    //       <p className="text-[16px]/[24px] font-bold text-[#232525]">
    //         We have been using AccuSolva for almost a year now. It supplies more
    //         than 30 millions residential IP proxy services, fast response.
    //         Integrating easily and offering a variety of solutions.
    //       </p>
    //     </div>
    //   </Slider>
    // </main>
  );
};

export default OurCustomers;
