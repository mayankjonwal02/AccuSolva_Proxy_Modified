import React from 'react'

const LocationForm = () => {
  return (
    <main className='sm:w-[439px]'>
        <div className='h-full w-full bg-gray-400 rounded-[10px] bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-[#80808033] p-[30px]'>
            <h1 className='text-center text-[30px]/[36px] font-semibold text-[#25BBC5] tracking-tight mb-[10px]'>GET IN TOUCH</h1>
            <p className='text-center text-[18px]/[21.6px] text-[#CCCCCC]'>We’re available 27/7</p>
            <form className='flex flex-col gap-[18px] mt-[40px] text-xs text-white'>
                <input className='py-4 px-[14px]  h-full w-full bg-gray-400 rounded-sm bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-[#80808033]' type="text" placeholder='Your Name' />
                <input className='py-4 px-[14px]  h-full w-full bg-gray-400 rounded-sm bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-[#80808033]' type="text" placeholder='Your contact number' />
                <textarea className='py-4 px-[14px]  h-full w-full bg-gray-400 rounded-sm bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-[#80808033]' rows={'5'}  placeholder='How can we help?' />
            </form>
            <div className='flex justify-between text-[14px]/[16.8px] mt-[18px]'>
                <button className='w-[151px] h-[37px] rounded-[4px] border border-[#25BBC5] text-[#25BBC5] uppercase'>request callback</button>
                <button className='w-[80px] h-[37px]  rounded-[4px] border  bg-[#25BBC5] uppercase'>send</button>
            </div>
        </div>
    </main>
  )
}

export default LocationForm