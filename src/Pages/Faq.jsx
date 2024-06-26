import React from 'react'
import FaqQues from '../components/faq/FaqQues'
import HaveQues from '../components/faq/HaveQues'
import bgImg from "../assets/faqbg.png";

const Faq = () => {
  return (
    <>
     <FaqQues />
     <HaveQues bgImg={bgImg} style={'h-[419px] mt-12 pt-4 sm:pt-10 lg:pt-20 '} />
    </>
  )
}

export default Faq