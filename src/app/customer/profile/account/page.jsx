"use client"
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Account = () => {
    const percentage = 100;
    return (
        <>
            <div className="px-[90px] py-[80px]">
                <h1 className='text-[24px] font-[600] text-[#173968]'>Ihr Account</h1>
                <div className="my-6 mx-3">
                    <div className="text-[16px] leading-[24px] text-[#173968] mb-8">Vielen Dank für Ihr Vertrauen in arztpool - Hier finden Sie einen kurzen Überblick über Ihren Account. Bei Fragen oder Kontakt zu unserem Service halten Sie bitte Ihre Kundennummer bereit.</div>
                    <div className="text-[16px] leading-[24px] text-[#173968] mb-10">Unseren Support erreichen Sie telefonisch unter der Nummer 0800 47 37 535 44.</div>
                    <div className="flex gap-40 mb-3">
                        <div className="text-[16px] font-[700] text-[#173968]">Kundennummer</div>
                        <div className="">50011</div>
                    </div>
                    <hr className='text-gray-400 mb-2' />
                    <div className="flex gap-[62px]">
                        <div className="flex flex-col">
                            <div className="text-[16px] leading-[24px] text-[#173968] font-[700] mb-8">Vollständigkeit Ihres Accounts</div>
                            {/* //Progress Bar */}
                            <div className="w-[140px] h-[140px] ml-4">
                                <CircularProgressbar value={percentage} backgroundColor="#1FB9E5" strokeWidth="6" text={`${percentage}%`} />;
                            </div>
                            {/* //Progress Bar */}
                        </div>
                        <div className="flex justify-center items-center py-12">
                            <div className="text-[16px] leading-[24px] text-[#173968] ">Herzlichen Glückwunsch! Ihr Profil ist vollständig.</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Account;