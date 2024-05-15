"use client"
import React from 'react';
import ExtraHeader from './(components)/extraHeader/extraHeader';
import Link from 'next/link';
import "./globalLayoutServices.css";
import { usePathname } from 'next/navigation'; // Import usePathname

const Page = ({ children }) => {
    const pathname = usePathname(); // Get current pathname
    const navLinks = [
        { name: "Übersicht", href: "/representative/services/overview" },
        { name: "Neuen Dienst eintragen", href: "/customer/services/register"},
        { name: "Veröffentlichte Dienste", href: "/customer/services/published" },
        { name: "Vergebene Dienste", href: "/representative/services/subcontracted" },
        { name: "Beendete Dienste", href: "/representative/services/terminated" },
    ];

    return (
        <>
            <ExtraHeader />
            <div className='h-auto w-screen bg-blue-400 flex'>
                <div className="w-[480px] bg-white pr-6">
                    <div className="w-full flex flex-col justify-start items-start pt-[138px] pl-[106px] gap-2">
                        {navLinks.map((link, i) => (
                            <Link key={i} href={link.href} className='w-full mb-2'>
                                <div className={`w-full cursor-pointer ${pathname === link.href ? "font-bold text-[rgb(23,85,153)]" : "text-black"} w-full mb-2 flex border-transparent border-b-2 hover:border-orange-500 hover:border-b-2`}>{link.name}</div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="w-full h-auto bg-white shadow-2xl">
                    {children}
                </div>
            </div>
        </>
    )
}

export default Page;
