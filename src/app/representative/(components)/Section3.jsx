import "./Section3.css";
import React from 'react'
import { FaCar } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import Image from 'next/image';

const Section3 = () => {
  return (
    <>
      <div className="px-[110px] bg-[white] sm:px-[10px] md:px-[25px] lg:px-[25px] xl:px-[25px] xxl:px-[25px] py-12 flex flex-col gap-8">
        <div className="text-start sm:text-center md:text-center  text-[20px] font-[500] leading-[28px] text-[#173968] xxl:ml-6">Gebühr pro vermittelten Dienst</div>
        <div className="text-start -mt-8 sm:text-center md:text-center  text-[16px] font-[400] leading-[24px] text-[#9CABBF] xxl:ml-6">abhängig von der Dienstdauer</div>
        <div className="flex sm:flex-col sm:justify-center sm:items-center gap-[120px] md:flex-wrap md:justify-center md:items-center lg:flex-wrap lg:justify-center xl:flex-wrap xl:justify-center xl:items-center xxl:flex-wrap xxl:justify-center xxl:items-center">
          {/* //Card starting */}
          <div className="px-4 py-6 drop-shadow-xl flex flex-col justify-center items-center rounded-md gap-[12px] bg-[white] text-[black] w-64">
            <div className="w-8 h-8 flex justify-center items-center">
              <span className="text-center text-[16px] font-[600]">4,99€*</span>
            </div>
            <div className="flex flex-col">
              <span className='text-black text-xl text-center text-[12.8px]'>0-3.5 Std.</span>
            </div>
          </div>
          {/* //Card ending */}
          {/* //Card starting */}
          <div className="px-4 py-6 drop-shadow-xl flex flex-col justify-center items-center rounded-md gap-[12px] bg-[white] text-[black] w-64">
            <div className="w-8 h-8 flex justify-center items-center">
              <span className="text-center text-[16px] font-[600]">9,99€*</span>
            </div>
            <div className="flex flex-col">
              <span className='text-black text-xl text-center text-[12.8px]'>4-9.5 Std.</span>
            </div>
          </div>
          {/* //Card ending */}
          {/* //Card starting */}
          <div className="px-4 py-6 drop-shadow-xl flex flex-col justify-center items-center rounded-md gap-[12px] bg-[white] text-[black] w-64">
            <div className="w-8 h-8 flex justify-center items-center">
              <span className="text-center text-[16px] font-[600]">13,99€*</span>
            </div>
            <div className="flex flex-col">
              <span className='text-black text-xl text-center text-[12.8px]'>10-24 Std.</span>
            </div>
          </div>
          {/* //Card ending */}
        </div>
      </div>
    </>
  )
}

export default Section3;