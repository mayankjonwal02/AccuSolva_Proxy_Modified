import React from "react";
import BlogHero from "../components/blogProxy/BlogHero";
import heroImg from "../assets/blogHeroImg.png";
import BlogCoreFunctionality from "../components/blogProxy/BlogCoreFunctionality";
import WhatMobileProxy from "../components/mobileProxies/WhatMobileProxy";
import img1 from "../assets/blogImg1.jpg";
import img2 from "../assets/blogImg2.jpg";

const Blog = () => {
  return (
    <>
      <BlogHero
        title1={"Welcome to AccuSolva Blog"}
        content={
          "Build knowledge on everything proxies, or pick up somedope ideas for your next project - this is just the right place for that"
        }
        img={heroImg}
      />
      <WhatMobileProxy
        title={"How to choose best proxy service"}
        tcolor={"text-[#0103EC]"}
        content1={
          "The market for proxy services is currently thriving like never before, benefiting various sectors including business representatives and home users. These services offer numerous advantages, such as accessing geo-restricted content, purchasing limited edition sneakers, and conducting analysis through data scraping."
        }
        contcolor={"text-[#073141] font-medium"}
        btn={"Read More"}
        link1={"/ways-to-test-proxy"}
        btn2={"hidden"}
        img={img1}
        rowReverse={"sm:flex-row"}
      />
      <WhatMobileProxy
        title={
          "Proxy vs VPN: benefits for business, use cases & how to choose "
        }
        tcolor={"text-[#0103EC]"}
        content1={
          "When you need to hide your real identity or protect yourself while  online, you’ll definitely end up choosing between a VPN and a proxy. Though...."
        }
        contcolor={"text-[#073141] font-medium"}
        btn={"Read More"}
        link1={"/proxy-vs-vpn"}
        btn2={"hidden"}
        img={img2}
        rowReverse={"sm:flex-row-reverse"}
      />
      <BlogCoreFunctionality />
    </>
  );
};

export default Blog;
