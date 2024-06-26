import React from "react";
import img1 from "../../assets/mobilePriceImg1.png";
import img2 from "../../assets/mobilePriceImg2.png";
import img3 from "../../assets/mobilePriceImg3.png";
import img4 from "../../assets/mobilePriceImg4.png";
import img5 from "../../assets/mobilePriceImg5.png";
import img6 from "../../assets/mobilePriceImg6.png";

const WhyMobileProxy = () => {
  return (
    <main className="max-w-full py-24 px-2">
      <section className="text-center pb-10">
        <h1 className="text-[28px] text-center sm:text-[40px]/[34px] font-medium text-[#0103EC] pb-5">
          
          <span className="bg-gradient-to-t from-[#1300D2] to-[#7B10A0] text-transparent bg-clip-text">
            Residential Specialist
          </span>
        </h1>
      </section>

      <section className="flex flex-col gap-6 sm:p-12 justify-center items-center">
        <section className="sm:flex gap-6">
          <section className="flex flex-col gap-6 max-w-[436px] lg:max-w-[536px] xl:max-w-[737px] rounded-2xl border border-[#00000040] px-6 lg:px-12 py-12 mb-6 sm:mb-0">
            <h1 className="text-[20px] lg:text-[25.5px]/[32.2px] font-medium">
              Global Network 10M+IPs
            </h1>
            <div>
              <p className="text-sm lg:text-[20px]/[31px] text-[#073141B2]">
                Real-Peer 3G 4G IPs
              </p>
              <p className="text-sm lg:text-[20px]/[31px] text-[#073141B2]">
                Accurate IP allocation can ensure subdivision into accurate
                countries and regions.
              </p>
            </div>
            <img className="w-full max-w-full" src={img1} alt="img" />
          </section>

          <section className="flex flex-col justify-center items-center gap-6 sm:max-w-[258px] lg:max-w-[558px] rounded-2xl border border-[#00000040] bg-[#291A7A] text-white text-center px-6 lg:px-12 py-12 sm:py-0">
            <img className="w-full max-w-full" src={img2} alt="img" />
            <h1 className="text-[20px] lg:text-[25.5px]/[32.2px] font-medium">
              Unlimited Connections
            </h1>
            <p className="text-sm lg:text-[20px]/[31px]">
              Unlimited daily use of IPs, proxy rotation, free switching and
              keeping up with local compliance
            </p>
          </section>
        </section>

        <section className="sm:flex gap-6">
          <section className="flex flex-col justify-center items-center gap-6 sm:max-w-[258px] lg:max-w-[558px] rounded-2xl border border-[#00000040] bg-[#291A7A] text-white text-center px-6 lg:px-12 py-12 sm:py-0 mb-6 sm:mb-0">
            <img className="w-full max-w-full" src={img3} alt="img" />
            <h1 className="text-[20px] lg:text-[25.5px]/[32.2px] font-medium">
              Never Blocked
            </h1>
            <div>
              <p className="text-sm lg:text-[20px]/[31px]">
                Use the real user residential IP assigned by the IPs and leased
                to proxies for your exclusive use
              </p>
            </div>
          </section>

          <section className="flex flex-col gap-6 max-w-[436px] lg:max-w-[536px] xl:max-w-[737px] rounded-2xl border border-[#00000040] px-6 lg:px-12 py-12">
            <h1 className="text-[20px] lg:text-[25.5px]/[32.2px] font-medium">
              HTTP(S)/Socks5 proxies
            </h1>
            <div>
              <p className="text-sm lg:text-[20px]/[31px] text-[#073141B2]">
                Multiple network protocols, Fastest, Response time
              </p>
              <p className="text-sm lg:text-[20px]/[31px] text-[#073141B2]">
                Our mobile proxy servers support HTTP/SOCKS5 protocols, offer a
                unified Internet experience, and give you access to work on the
                Internet.
              </p>
            </div>
            <img className="w-full max-w-full" src={img4} alt="img" />
          </section>
        </section>

        <section className="sm:flex gap-6">
          <section className="flex flex-col gap-6 max-w-[436px] lg:max-w-[536px] xl:max-w-[737px] rounded-2xl border border-[#00000040] px-6 lg:px-12 py-12 mb-6 sm:mb-0">
            <h1 className="text-[20px] lg:text-[25.5px]/[32.2px] text-[#1B1B1B] font-medium">
              ASN and Carrier Targeting
            </h1>
            <div>
              <p className="text-sm lg:text-[20px]/[31px] text-[#073141B2] mb-4">
                Thanks to this automated functionality, users of AccuSolva
                mobile proxies can browse securely without stopping to manually
                change IP addresses regularly.
              </p>
              <p className="text-sm lg:text-[20px]/[31px] text-[#073141B2]">
                Verify online assets using the highest resolution IPs available
                products to manage goals, performance, learning development,
                team satisfaction, and more.
              </p>
            </div>
            <img className="w-full max-w-full " src={img5} alt="img" />
          </section>

          <section className="flex flex-col justify-center  gap-6 sm:max-w-[258px] lg:max-w-[558px] rounded-2xl border border-[#00000040] bg-[#D3CFF2CC] px-6 lg:px-12 py-12">
            <img className="w-full max-w-full" src={img6} alt="img" />
            <h1 className="text-[20px] lg:text-[25.5px]/[32.2px] font-medium text-[#1B1B1B]">
              Instant Setup and Easy Management
            </h1>
            <p className="text-sm lg:text-[20px]/[31px] text-[#073141B2]">
              Enjoy instant setup and easy operation. You can do this with our
              optimized system. You can get up and running quickly with
              user-friendly interfaces and intuitive controls.
            </p>
          </section>
        </section>
      </section>
    </main>
  );
};

export default WhyMobileProxy;
