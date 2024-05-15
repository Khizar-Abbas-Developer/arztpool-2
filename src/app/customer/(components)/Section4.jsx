import React from 'react';
import "./Section4.css";

const Section4 = () => {
    return (
        <>
            <div className="px-[110px] bg-[white] sm:px-[10px] md:px-[25px] lg:px-[25px] xl:px-[25px] xxl:px-[25px] py-12 flex flex-col gap-16 mb-10">
                <div className="text-start sm:text-center md:text-center  text-[24px] font-[600] leading-[28px] text-[#173968] xxl:ml-6">Folgende Dienste benötigen Ihre Aufmerksamkeit:</div>
                <div className="text-start -mt-8 sm:text-center md:text-center  text-[14px] font-[400] leading-[24px] text-[#173968] xxl:ml-6">Es wurden keine Dienste gefunden</div>
            </div>
        </>
    )
}

export default Section4;