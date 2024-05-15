"use client"
import React from 'react';
import Link from 'next/link';
import "./globalProfile.css";
import { usePathname } from 'next/navigation'; // Import usePathname
import ProfileHeader from './(profileComponents)/extraHeader/extraHeader';
import RepresentativeHeader from '@/app/_components/header';

const Page = ({ children }) => {
    const pathname = usePathname(); // Get current pathname
    const navLinks = [
        { name: "Ihr Account", href: "/customer/profile/account" },
        { name: "Stammdaten", href: "/customer/profile/basedata" },
        { name: "Einrichtung", href: "/customer/profile/billing" },
        { name: "Betriebsstätten", href: "/customer/profile/insurances" },
       
    ];

    return (
        <>
            
            <ProfileHeader />
            <div className='h-auto w-screen bg-blue-400 flex'>
                {/* Left section */}
                <div className="w-[480px] bg-white pr-6">
                    <div className="w-full flex flex-col justify-start items-start pt-[138px] pl-[86px] gap-2 ">
                        {navLinks.map((link, i) => (
                            <Link key={i} href={link.href} className='w-full sm:w-[140%] mb-2'>
                                <div className={`w-full cursor-pointer ${pathname === link.href ? "font-bold text-[rgb(23,85,153)]" : "text-black"} w-full mb-2 flex border-transparent border-b-2 hover:border-orange-500 hover:border-b-2`}>{link.name}</div>
                            </Link>
                        ))}
                    </div>
                </div>
                {/* Right section */}
                <div className="w-full h-auto bg-white shadow-2xl">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Page;
