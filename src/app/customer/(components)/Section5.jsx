import React from 'react';
import "./Section5.css";

const Section5 = () => {
    return (
        <>
            <div className="px-[110px] bg-[#E7EBEF] sm:px-[10px] md:px-[25px] lg:px-[25px] xl:px-[25px] xxl:px-[25px] py-12 flex flex-col gap-16">
                <div className="flex justify-between items-center">
                    <p className='text-start sm:text-center md:text-center  text-[24px] font-[600] leading-[28px] text-[#173968] xxl:ml-6'>Ihre Dienste</p>
                    <div className="button-set-section-1">
                        <button className="button-section-1 px-10 py-3">Neue Suche starten</button>
                    </div>
                </div>
                <div className="text-start -mt-8 sm:text-center md:text-center  text-[16px] font-[400] leading-[24px] text-[#173968] xxl:ml-6">Es wurden keine Dienste gefunden</div>
            </div>
        </>
    )
}

export default Section5;