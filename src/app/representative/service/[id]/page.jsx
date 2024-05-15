"use client"
import React, { useState } from 'react';
import "./dynamicPage.css"
import { GoArrowLeft } from "react-icons/go";
import ExtraHeader from './(dynamicRouteComponents)/ExtraHeaderDynamic/extraHeader';
import MapComponent from './(dynamicRouteComponents)/dynamicRouteMap/map';
import { AiOutlineArrowRight } from 'react-icons/ai';
import AssignedService from './(dynamicRouteComponents)/(RightSections)/assigned/assigned';
import TerminatedService from './(dynamicRouteComponents)/(RightSections)/terminated/Terminated';
import WatchListRightSection from './(dynamicRouteComponents)/(RightSections)/watchList/WatchList';
import { useRouter } from 'next/navigation';

const Page = ({ params }) => {
    const router = useRouter();
    const [terminated, setTerminate] = useState(false);
    const [assigned, setAssigned] = useState(false);
    const [watchList, setWatchList] = useState(true);
    const mapArray = [1, 2, 3, 4]
    const [hover, setHover] = useState(false);
    const handleMouseHoverEnter = () => {
        console.log("hovered enter");
        setHover(true);
    }
    const handleMouseHoverLeave = () => {
        setHover(false);
        console.log("hovered leave");
    }
    const previousRoute = () => {
        router.back();
    }
    return (
        <>
            <ExtraHeader />
            <div className="px-[89px] py-3">
                <div className="flex justify-start items-center gap-2 cursor-pointer" onClick={previousRoute}>
                    <span><GoArrowLeft className='text-xl' /></span>
                    <span>Zurück</span>
                </div>
                <div className="linear-gradient-text-div py-3 mb-6 px-4 flex justify-end gap-4">
                    <div className="flex justify-center items-center gap-2">
                        <div className="h-4 w-4">
                            <svg data-v-33f0ae2d="" className="h-full w-full svg-inline--fa fa-eye fa-w-18 mdi v-icon notranslate v-theme--light v-icon--size-default me-2" aria-hidden="true" light="" focusable="false" data-prefix="fal" data-icon="eye" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M288 288a64 64 0 0 0 0-128c-1 0-1.88.24-2.85.29a47.5 47.5 0 0 1-60.86 60.86c0 1-.29 1.88-.29 2.85a64 64 0 0 0 64 64zm284.52-46.6C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 96a128 128 0 1 1-128 128A128.14 128.14 0 0 1 288 96zm0 320c-107.36 0-205.46-61.31-256-160a294.78 294.78 0 0 1 129.78-129.33C140.91 153.69 128 187.17 128 224a160 160 0 0 0 320 0c0-36.83-12.91-70.31-33.78-97.33A294.78 294.78 0 0 1 544 256c-50.53 98.69-148.64 160-256 160z"></path></svg>
                        </div>
                        <div className="">0</div>
                        <div className="">Beobachter</div>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <div className="h-4 w-4">
                            <svg data-v-33f0ae2d="" className="h-full w-full svg-inline--fa fa-eye fa-w-18 mdi v-icon notranslate v-theme--light v-icon--size-default me-2" aria-hidden="true" light="" focusable="false" data-prefix="fal" data-icon="eye" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M288 288a64 64 0 0 0 0-128c-1 0-1.88.24-2.85.29a47.5 47.5 0 0 1-60.86 60.86c0 1-.29 1.88-.29 2.85a64 64 0 0 0 64 64zm284.52-46.6C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 96a128 128 0 1 1-128 128A128.14 128.14 0 0 1 288 96zm0 320c-107.36 0-205.46-61.31-256-160a294.78 294.78 0 0 1 129.78-129.33C140.91 153.69 128 187.17 128 224a160 160 0 0 0 320 0c0-36.83-12.91-70.31-33.78-97.33A294.78 294.78 0 0 1 544 256c-50.53 98.69-148.64 160-256 160z"></path></svg>
                        </div>
                        <div className="">0</div>
                        <div className="">Beobachter</div>
                    </div>
                </div>
                <div className="w-full h-auto flex gap-4">
                    {/* //left div */}
                    <div className="w-[50%]">
                        <div className="w-full h-64 overflow-hidden mb-8">
                            <MapComponent />
                        </div>
                        <div className="my-8 text-[20px] font-[700] leading-[28px] text-[#173968]">Angaben zum Dienst</div>
                        <div className="">
                            <div className="flex gap-48 mb-2">
                                <div className="text-[16px] leading-[24px] text-[#173968] font-[600]">Dienstart</div>
                                <div className="text-[16px] text-[#173968]">Fahrdienst</div>
                            </div>
                            <hr className='mb-3' />
                            <div className="flex gap-[163px] mb-2">
                                <div className="text-[16px] leading-[24px] text-[#173968] font-[600]">Dienstbeginn</div>
                                <div className="text-[16px] text-[#173968]">08:00 Uhr (18.03.2023)</div>
                            </div>
                            <hr className='mb-3' />
                            <div className="flex gap-[176px] mb-2">
                                <div className="text-[16px] leading-[24px] text-[#173968] font-[600]">Dienstende</div>
                                <div className="text-[16px] text-[#173968]">14:30 Uhr (18.03.2023)</div>
                            </div>
                            <hr className='mb-3' />
                            <div className="flex gap-[170px] mb-2">
                                <div className="text-[16px] leading-[24px] text-[#173968] font-[600]">Dienstdauer</div>
                                <div className="text-[16px] text-[#173968]">6.5h</div>
                            </div>
                            <hr className='mb-3' />
                            <div className="flex gap-[174px] mb-2">
                                <div className="text-[16px] leading-[24px] text-[#173968] font-[600]">Bundesland</div>
                                <div className="text-[16px] text-[#173968]">Bayern</div>
                            </div>
                            <hr className='mb-3' />
                            <div className="flex gap-[168px] mb-2">
                                <div className="text-[16px] leading-[24px] text-[#173968] font-[600]">Dienstgebiet</div>
                                <div className="text-[16px] text-[#173968]">Regensburg-Stadt und Land</div>
                            </div>
                            <hr className='mb-3' />
                        </div>
                    </div>
                    {/* //left div */}
                    {/* right div */}
                    <div className="flex flex-col w-[50%] h-auto py-4 px-4 shadow-2xl border rounded-md">
                        {assigned && (
                            <AssignedService />
                        )}
                        {terminated && (
                            <TerminatedService />
                        )}
                        {watchList && (
                            <WatchListRightSection />
                        )}
                    </div>
                    {/* right div */}
                </div>
                <div className="mt-8 flex flex-col">
                    <div className="">Ähnliche KV-Dienste</div>
                    <div className="py-2 flex flex-wrap gap-4">
                        {/* Google MAP CARD */}
                        {mapArray.map((item, i) => {
                            return (
                                <div key={i} className={`h-[418px] cursor-pointer w-[260px] rounded-md border-[#3d6194] border-1 hover:border-3 hover:border-[#ED6D05]`} onMouseEnter={handleMouseHoverEnter} onMouseLeave={handleMouseHoverLeave}>
                                    <div className={`h-32 rounded-tl-md rounded-tr-md`}>
                                        {/* <Image src={placeHolderGoogleMap} className="w-full h-full" alt="" /> */}
                                        <div className="mapouter"><div className="gmap_canvas"><iframe width="258" height="128" id="gmap_canvas" src="https://maps.google.com/maps?q=636+5th+Ave%2C+New+York&t=&z=7&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe><a href="https://textcaseconvert.com/"></a><br /><a href="https://online-timer.me/"></a><br /><a href="https://www.embedmaps.co"></a></div></div>
                                    </div>
                                    <div className="flex py-1 px-1 justify-center items-center bg-[#173968] text-white gap-2">
                                        <div className="h-2 w-2 flex justify-center items-center">
                                            <svg data-v-6ffcad67="" className="text-white svg-inline--fa fa-bolt fa-w-10 mdi v-icon notranslate v-theme--light v-icon--size-default" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bolt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M296 160H180.6l42.6-129.8C227.2 15 215.7 0 200 0H56C44 0 33.8 8.9 32.2 20.8l-32 240C-1.7 275.2 9.5 288 24 288h118.7L96.6 482.5c-3.6 15.2 8 29.5 23.3 29.5 8.4 0 16.4-4.4 20.8-12l176-304c9.3-15.9-2.2-36-20.7-36z"></path></svg>
                                        </div>
                                        <div className="">Sofort-Zusage</div>
                                    </div>
                                    <div className="flex flex-col py-2 px-3 mb-4">
                                        <span className="text-[#199FC3] text-[16px] mb-2 font-[600]">29.03.2024</span>
                                        <span className="text-[#173968] text-[14px]">18-23 Uhr | 5 Std. | Sitzdienst</span>
                                        <span className="text-[#173968] text-[14px]">Sachsen | Torgau | Oschatz</span>
                                    </div>
                                    <div className="flex flex-col py-2 px-3 mb-4">
                                        <div className="">
                                            <span className="text-[20px] text-[#173968] font-[600]">65€-80€-</span> <span className="text-[16px] text-[#173968]">Honorar pro Std.</span>
                                        </div>
                                        <span className="text-[14px] text-[#173968]">0 Beobachter | 0 Bewerber</span>
                                    </div>
                                    <div className="flex px-3 justify-start items-center gap-2 cursor-pointer">
                                        <AiOutlineArrowRight className="text-[#173968]" />
                                        <div className="text-[#173968]">Details ansehen</div>
                                    </div>
                                </div>
                            )
                        })}
                        {/* Google MAP CARD */}
                    </div>
                    <div className="">Alle Dienste anzeigen</div>
                </div>
            </div>
        </>
    )
}

export default Page;