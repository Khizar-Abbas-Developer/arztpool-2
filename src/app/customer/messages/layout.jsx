"use client"
import React, { useState } from 'react';
import ExtraHeader from './(messagesComponents)/extraHeader copy/extraHeader';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname
//select imports
import Button from '@mui/joy/Button'
import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'
import Stack from '@mui/joy/Stack'
import { BsArrowRight } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";


const Page = ({ children }) => {
    const [firstActive, setFirstActive] = useState(true);
    const [secondActive, setSecondActive] = useState(false);
    const [firstSectionState, setFirstSectionState] = useState('block')
    const [secondSectionState, setSecondSectionState] = useState("none")
    const pathname = usePathname(); // Get current pathname
    const navLinks = [
        { name: "", href: "/representative/services/overview" },
        { name: "", href: "/representative/services/marketplace" },
    ];
    const handleActiveLink1 = () => {
        setFirstActive(true);
        setSecondActive(false);
        setFirstSectionState("block");
        setSecondSectionState("none");
    }
    const handleActiveLink2 = () => {
        setSecondActive(true);
        setFirstActive(false);
        setFirstSectionState("none")
        setSecondSectionState("block")
    }
    const sectionOneTempArray = [1, 2, 3, 4, 5]
    return (
        <>
            <ExtraHeader heading={""} subHeading={""} />
            <div className='h-auto w-screen bg-blue-400 flex'>
                {/* Left section */}
                <div className="w-[480px] bg-white pr-6">
                    <div className="w-full flex flex-col justify-start items-start pt-[138px] pl-[106px] gap-4">
                        <Link href={"/representative/messages"}>
                            <div onClick={handleActiveLink1} className={`w-full cursor-pointer ${firstActive ? "font-bold text-[rgb(23,85,153)]" : "text-black"} w-full mb-2 flex border-transparent border-b-2 hover:border-orange-500 hover:border-b-2`}>{"Ungelesene Nachrichten (0)"}</div>
                        </Link>
                        <Link href={"/representative/messages"}>
                            <div onClick={handleActiveLink2} className={`w-full cursor-pointer ${secondActive ? "font-bold text-[rgb(23,85,153)]" : "text-black"} w-full mb-2 flex border-transparent border-b-2 hover:border-orange-500 hover:border-b-2`}>{"Gelesene Nachrichten  (1)"}</div>
                        </Link>
                    </div>
                </div>
                {/* Right section */}
                <div className="h-auto bg-white shadow-2xl">
                    {/* //FirstSection */}
                    <div className={`SecondActiveLinkSection`} style={{ display: firstSectionState }}>
                        <div className="pt-20 pb-12 pl-16 pr-28">
                            <div className="text-3xl mb-8 font-[500] text-[#20416E]">Ungelesene Nachrichten (169)</div>
                            <div className="flex justify-between">
                                <div className="set">
                                    <span className='label-span'>Bundesland</span>
                                    <Select
                                        placeholder="Alle"
                                        className='seletedf'
                                        sx={{
                                            width: 270,
                                            height: 57,
                                            border: 0,
                                            borderBottom: '2px solid #C0C0C0',
                                            borderRadius: 0,
                                            // borderColor: '#C0C0C0',
                                            marginTop: 1,
                                            '&:focus-within': {
                                                borderColor: '#ffbf00',
                                            },
                                            fontWeight: 600,
                                        }}
                                    >
                                        <Option value="dog">Baden-Wurttemberg</Option>
                                        <Option value="cat">Bayern</Option>
                                        <Option value="fish">Berlin</Option>
                                        <Option value="bird">Brandenburg</Option>
                                        <Option value="bird">Bremen</Option>
                                        <Option value="bird">Hamburg</Option>
                                    </Select>
                                </div>
                                <div className="set">
                                    <span className='label-span'>Bundesland</span>
                                    <Select
                                        placeholder="Alle"
                                        className='seletedf'
                                        sx={{
                                            width: 270,
                                            height: 57,
                                            border: 0,
                                            borderBottom: '2px solid #C0C0C0',
                                            borderRadius: 0,
                                            // borderColor: '#C0C0C0',
                                            marginTop: 1,
                                            '&:focus-within': {
                                                borderColor: '#ffbf00',
                                            },
                                            fontWeight: 600,
                                        }}
                                    >
                                        <Option value="dog">Baden-Wurttemberg</Option>
                                        <Option value="cat">Bayern</Option>
                                        <Option value="fish">Berlin</Option>
                                        <Option value="bird">Brandenburg</Option>
                                        <Option value="bird">Bremen</Option>
                                        <Option value="bird">Hamburg</Option>
                                    </Select>
                                </div>
                            </div>
                            {/* <div className="flex justify-center items-center py-12">
                                PAGINATION UI HERE
                            </div> */}
                            <div className="flex flex-col gap-6">
                                {sectionOneTempArray.map((item, i) => {
                                    return (
                                        <div key={i} className="w-full h-52 flex shadow-xl rounded-lg border">
                                            <div className="w-[15%] flex justify-center pt-3">
                                                <div className=""><CgProfile className='text-6xl text-black' /></div>
                                            </div>
                                            <div className="w-[85%] flex flex-col justify-between py-[16px] px-2 pr-4 gap-4">
                                                <div className="">
                                                    <div className="text-[14px] text-[#173968] mb-1">Freitag, 23.02.2024</div>
                                                    <div className="text-[16px] text-[#173968] font-bold mb-2">Dienst wurde Ihnen zugewiesen</div>
                                                    <div className="text-[14px] text-[#173968]">Vielen Dank für Ihre Dienstübernahme. Der Fahrdienst am 16.4.2024 um 07:00 im Dienstgebiet Regensburg-Stadt und Land wurde Ihnen zugewiesen. Bitte bestätigen Sie den Honorarvertrag.</div>
                                                </div>
                                                <div className="flex justify-end items-center">
                                                    <div className="flex mr-5 px-8 py-[10px] rounded-md mb-6 gap-3 bg-[#173968] justify-center items-center text-white">
                                                        <div className="">Zum Dienst</div>
                                                        <div className=""><BsArrowRight className='text-2xl' /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    {/* //FirstSection */}
                    {/* //SecondSection */}
                    <div className={`SecondActiveLinkSection`} style={{ display: secondSectionState }}>
                        <div className="pt-20 pb-12 pl-16 pr-28">
                            <div className="text-3xl mb-8 font-[500] text-[#20416E]">Gelesene Nachrichten (64)</div>
                            <div className="flex justify-between">
                                <div className="set">
                                    <span className='label-span'>Bundesland</span>
                                    <Select
                                        placeholder="Alle"
                                        className='seletedf'
                                        sx={{
                                            width: 270,
                                            height: 57,
                                            border: 0,
                                            borderBottom: '2px solid #C0C0C0',
                                            borderRadius: 0,
                                            // borderColor: '#C0C0C0',
                                            marginTop: 1,
                                            '&:focus-within': {
                                                borderColor: '#ffbf00',
                                            },
                                            fontWeight: 600,
                                        }}
                                    >
                                        <Option value="dog">Baden-Wurttemberg</Option>
                                        <Option value="cat">Bayern</Option>
                                        <Option value="fish">Berlin</Option>
                                        <Option value="bird">Brandenburg</Option>
                                        <Option value="bird">Bremen</Option>
                                        <Option value="bird">Hamburg</Option>
                                    </Select>
                                </div>
                                <div className="set">
                                    <span className='label-span'>Bundesland</span>
                                    <Select
                                        placeholder="Alle"
                                        className='seletedf'
                                        sx={{
                                            width: 270,
                                            height: 57,
                                            border: 0,
                                            borderBottom: '2px solid #C0C0C0',
                                            borderRadius: 0,
                                            // borderColor: '#C0C0C0',
                                            marginTop: 1,
                                            '&:focus-within': {
                                                borderColor: '#ffbf00',
                                            },
                                            fontWeight: 600,
                                        }}
                                    >
                                        <Option value="dog">Baden-Wurttemberg</Option>
                                        <Option value="cat">Bayern</Option>
                                        <Option value="fish">Berlin</Option>
                                        <Option value="bird">Brandenburg</Option>
                                        <Option value="bird">Bremen</Option>
                                        <Option value="bird">Hamburg</Option>
                                    </Select>
                                </div>
                            </div>
                            <div className="flex justify-center items-center py-12">Pagination SECTION</div>
                            <div className="flex flex-col gap-6">
                                {sectionOneTempArray.map((item, i) => {
                                    return (
                                        <div key={i} className="w-full h-52 flex shadow-xl rounded-lg border">
                                            <div className="w-[15%] flex justify-center pt-3">
                                                <div className=""><CgProfile className='text-6xl text-black' /></div>
                                            </div>
                                            <div className="w-[85%] flex flex-col justify-between py-[16px] px-2 pr-4 gap-4">
                                                <div className="">
                                                    <div className="text-[14px] text-[#173968] mb-1">Freitag, 23.02.2024</div>
                                                    <div className="text-[16px] text-[#173968] font-bold mb-2">Dienst wurde Ihnen zugewiesen</div>
                                                    <div className="text-[14px] text-[#173968]">Vielen Dank für Ihre Dienstübernahme. Der Fahrdienst am 16.4.2024 um 07:00 im Dienstgebiet Regensburg-Stadt und Land wurde Ihnen zugewiesen. Bitte bestätigen Sie den Honorarvertrag.</div>
                                                </div>
                                                <div className="flex justify-end items-center">
                                                    <div className="flex mr-5 px-8 py-[10px] rounded-md mb-6 gap-3 bg-[#173968] justify-center items-center text-white">
                                                        <div className="">Zum Dienst</div>
                                                        <div className=""><BsArrowRight className='text-2xl' /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    {/* //SecondSection */}
                </div>
            </div>
        </>
    )
}

export default Page;
