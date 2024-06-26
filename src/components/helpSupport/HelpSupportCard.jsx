import React from "react";
import dotImg from "../../assets/dotImg.jpg";
import cardImg1 from "../../assets/cardImg1.jpg";
import cardImg2 from "../../assets/cardImg2.jpg";
import cardImg3 from "../../assets/cardImg3.jpg";
import cardImg4 from "../../assets/cardImg4.jpg";
import cardImg5 from "../../assets/cardImg5.jpg";
import cardImg6 from "../../assets/cardImg6.jpg";
import cardImg7 from "../../assets/cardImg7.jpg";
import cardImg8 from "../../assets/cardImg8.jpg";
import cardImg9 from "../../assets/cardImg9.jpg";
import authorImg1 from "../../assets/authorImg1.jpg";
import authorImg2 from "../../assets/authorImg2.jpg";
import authorImg3 from "../../assets/authorImg3.jpg";
import authorImg4 from "../../assets/authorImg4.jpg";
import authorImg5 from "../../assets/authorImg5.jpg";
import authorImg6 from "../../assets/authorImg6.jpg";
import authorImg7 from "../../assets/authorImg7.jpg";
import authorImg8 from "../../assets/authorImg8.jpg";
import authorImg9 from "../../assets/authorImg9.jpg";
import { data } from "../../data/HelpSupport";

const cardImg = [cardImg1,cardImg2,cardImg3,cardImg4,cardImg5,cardImg6,cardImg7,cardImg8,cardImg9,]
const authorImg = [authorImg1,authorImg2,authorImg3,authorImg4,authorImg5,authorImg6,authorImg7,authorImg8,authorImg9]

const HelpSupportCard = () => {
  return (
    <main className="w-full py-24">
      <section className="max-w-[990px] mx-auto flex flex-wrap justify-center gap-[24px]">
        {data.map((item) => (
          <div key={item.id} className="flex flex-col gap-4 w-[304px] h:w-[306px] hover:shadow-lg cursor-pointer rounded-[15px] border border-[#E6E6E6] drop-shadow-md py-[25px] px-[25px]">
            <img
              className="w-[36px] h-[36px] rounded-[11px] font-['Roboto']"
              src={cardImg[item.id-1]}
              alt="logo"
            />
            <div className=" h-[102px] text-[16px] text-[#1A1A1A]">
              <h1 className="text-[16px] font-semibold text-[#1A1A1A]">
                {item.title}
              </h1>
              <p className="">{item.desc}</p>
            </div>
            <div className="flex items-center gap-2">
              <img className="rounded-lg" src={authorImg[item.id-1]} alt="author" />
              <p className="text-[13.89px]/[22.4px] text-[#737373] font-['Roboto]">
                {item.auth}
              </p>
              <p className="flex items-center gap-2 text-[13.89px]/[22.4px] text-[#737373] font-['Roboto]">
                <img src={dotImg} alt="dot" />
                {item.art}
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default HelpSupportCard;
