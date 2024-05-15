"use client"
import React, { useState } from 'react'
import './Section2.css'
import { FaCar } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import Image from 'next/image';
import { BsArrowRightCircleFill } from "react-icons/bs";
import Link from 'next/link';

const Section2 = () => {
  const [initial1, setInitial1] = useState(false);
  const [initial2, setInitial2] = useState(false);
  const [initial3, setInitial3] = useState(false);
  const [initial4, setInitial4] = useState(false);
  const handleInitialState1 = () => {
    setInitial1(false)
  }
  const handleHoveredState1 = () => {
    setInitial1(true)
  }
  const handleInitialState2 = () => {
    setInitial2(false)
  }
  const handleHoveredState2 = () => {
    setInitial2(true)
  }
  const handleInitialState3 = () => {
    setInitial3(false)
  }
  const handleHoveredState3 = () => {
    setInitial3(true)
  }
  const handleInitialState4 = () => {
    setInitial4(false)
  }
  const handleHoveredState4 = () => {
    setInitial4(true)
  }
  return (
    <>
      <div className="px-[100px] mt-2 bg-[#E7EBEF] sm:px-[10px] md:px-[25px] lg:px-[25px] xl:px-[25px] xxl:px-[25px] py-28 flex flex-col gap-8">
        <div className="text-start sm:text-center md:text-center  text-[24px] font-[600] leading-[32px] text-[#173968] xxl:ml-6">Was möchten Sie als nächstes tun?</div>
        <div className="flex sm:flex-col sm:justify-center sm:items-center gap-4 md:flex-wrap md:justify-center md:items-center lg:flex-wrap lg:justify-center xl:flex-wrap xl:justify-center xl:items-center xxl:flex-wrap xxl:justify-center xxl:items-center">
          {/* //Card starting */}
          <Link href={"/representative/services/marketplace"}>
            <div className="px-8 py-10 cursor-pointer drop-shadow-xl flex flex-col rounded-md gap-[12px] bg-[#173968] hover:bg-[#243854] w-72" onMouseEnter={handleHoveredState1} onMouseLeave={handleInitialState1}>
              <div className="flex justify-between">
                <div className="w-8 h-8">
                  <svg data-v-a67f5f97="" className="text-[#1FB9E5] w-auto h-auto svg-inline--fa fa-car fa-w-16 mdi v-icon notranslate v-theme--light v-icon--size-default" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="car" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M120.81 248c-25.96 0-44.8 16.8-44.8 39.95 0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08-.01-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95s8.32-15.95 20.8-15.95 31.2 14.36 31.2 23.93c0 7.17-10.54 8.07-21.06 8.07zm260.24-56c-24.1 0-55.19 23.24-55.19 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95-.01-23.16-18.85-39.96-44.81-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95zm114.8-140.94c-7.34-11.88-20.06-18.97-34.03-18.97H422.3l-8.07-24.76C403.5 86.29 372.8 64 338.17 64H173.83c-34.64 0-65.33 22.29-76.06 55.22l-8.07 24.76H40.04c-13.97 0-26.69 7.09-34.03 18.97s-8 26.42-1.75 38.91l5.78 11.61c3.96 7.88 9.92 14.09 17 18.55-6.91 11.74-11.03 25.32-11.03 39.97V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16H384v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-14.66-4.12-28.23-11.03-39.98 7.09-4.46 13.04-10.68 17-18.57l5.78-11.56c6.24-12.5 5.58-27.05-1.76-38.92zM128.2 129.14C134.66 109.32 153 96 173.84 96h164.33c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H107.73l20.47-62.84zm-89.53 70.02l-5.78-11.59c-1.81-3.59-.34-6.64.34-7.78.87-1.42 2.94-3.8 6.81-3.8h39.24l-6.45 19.82a80.69 80.69 0 0 0-23.01 11.29c-4.71-1-8.94-3.52-11.15-7.94zM96.01 400c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm367.98 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H48.01v-80c0-26.47 21.53-48 48-48h319.98c26.47 0 48 21.53 48 48v48zm15.12-132.41l-5.78 11.55c-2.21 4.44-6.44 6.97-11.15 7.97-6.94-4.9-14.69-8.76-23.01-11.29l-6.45-19.82h39.24c3.87 0 5.94 2.38 6.81 3.8.69 1.14 2.16 4.18.34 7.79z"></path></svg>
                </div>
                <div className={`${initial1 ? "visible" : "invisible"}`}>
                  <BsArrowRightCircleFill className='text-gray-400 text-2xl' />
                </div>
              </div>
              <div className="flex flex-col">
                <span className='text-white text-xl'>Dienste suchen</span>
              </div>
            </div>
          </Link>
          {/* //Card ending */}
          {/* //Card starting */}
          <Link href={"/representative/services/assigned"}>

            <div className="px-8 py-10 cursor-pointer drop-shadow-xl flex flex-col rounded-md gap-[12px] bg-[#173968] hover:bg-[#243854] w-72" onMouseEnter={handleHoveredState2} onMouseLeave={handleInitialState2}>
              <div className="flex justify-between">
                <div className="w-8 h-8">
                  <svg data-v-a67f5f97="" className="text-[#1FB9E5] w-auto h-auto svg-inline--fa fa-car fa-w-16 mdi v-icon notranslate v-theme--light v-icon--size-default" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="car" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M120.81 248c-25.96 0-44.8 16.8-44.8 39.95 0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08-.01-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95s8.32-15.95 20.8-15.95 31.2 14.36 31.2 23.93c0 7.17-10.54 8.07-21.06 8.07zm260.24-56c-24.1 0-55.19 23.24-55.19 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95-.01-23.16-18.85-39.96-44.81-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95zm114.8-140.94c-7.34-11.88-20.06-18.97-34.03-18.97H422.3l-8.07-24.76C403.5 86.29 372.8 64 338.17 64H173.83c-34.64 0-65.33 22.29-76.06 55.22l-8.07 24.76H40.04c-13.97 0-26.69 7.09-34.03 18.97s-8 26.42-1.75 38.91l5.78 11.61c3.96 7.88 9.92 14.09 17 18.55-6.91 11.74-11.03 25.32-11.03 39.97V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16H384v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-14.66-4.12-28.23-11.03-39.98 7.09-4.46 13.04-10.68 17-18.57l5.78-11.56c6.24-12.5 5.58-27.05-1.76-38.92zM128.2 129.14C134.66 109.32 153 96 173.84 96h164.33c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H107.73l20.47-62.84zm-89.53 70.02l-5.78-11.59c-1.81-3.59-.34-6.64.34-7.78.87-1.42 2.94-3.8 6.81-3.8h39.24l-6.45 19.82a80.69 80.69 0 0 0-23.01 11.29c-4.71-1-8.94-3.52-11.15-7.94zM96.01 400c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm367.98 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H48.01v-80c0-26.47 21.53-48 48-48h319.98c26.47 0 48 21.53 48 48v48zm15.12-132.41l-5.78 11.55c-2.21 4.44-6.44 6.97-11.15 7.97-6.94-4.9-14.69-8.76-23.01-11.29l-6.45-19.82h39.24c3.87 0 5.94 2.38 6.81 3.8.69 1.14 2.16 4.18.34 7.79z"></path></svg>              </div>
                <div className={`${initial2 ? "visible" : "invisible"}`}>
                  <BsArrowRightCircleFill className='text-gray-400 text-2xl' />
                </div>
              </div>
              <div className="flex flex-col">
                <span className='text-white text-xl'>Zugewiesene Dienste</span>
              </div>
            </div>
          </Link>
          {/* //Card ending */}
          {/* //Card starting */}
          <Link href={"/representative/messages"}>
            <div className="px-8 py-10 cursor-pointer drop-shadow-xl flex flex-col rounded-md gap-[12px] bg-[#173968] hover:bg-[#243854] w-72" onMouseEnter={handleHoveredState3} onMouseLeave={handleInitialState3}>
              <div className="flex justify-between">
                <div className="w-8 h-8">
                  <svg data-v-2d557568="" className="text-[#1FB9E5] w-auto h-auto svg-inline--fa fa-envelope fa-w-16" aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>              </div>
                <div className={`${initial3 ? "visible" : "invisible"}`}>
                  <BsArrowRightCircleFill className='text-gray-400 text-2xl' />
                </div>
              </div>
              <div className="flex flex-col">
                <span className='text-white text-xl'>Nachrichten</span>
              </div>
            </div>
          </Link>
          {/* //Card ending */}
          {/* //Card starting */}
          <Link href={"/representative/profile/account"}>
            <div className="px-8 py-10 cursor-pointer drop-shadow-xl flex flex-col rounded-md gap-[12px] bg-[#173968] hover:bg-[#243854] w-72" onMouseEnter={handleHoveredState4} onMouseLeave={handleInitialState4}>
              <div className="flex justify-between">
                <div className="w-8 h-8">
                  <svg data-v-5a983828="" className="text-[#1FB9E5] w-auto h-auto svg-inline--fa fa-user-md fa-w-14 mdi v-icon notranslate v-theme--light v-icon--size-default" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="user-md" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96zm93.7 256.1c-33.8-1-44.3 15.9-93.7 15.9-49.3 0-59.8-16.9-93.6-15.9C58 290.2 0 349.5 0 422.4V504c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-81.6c0-54.3 42.6-98.4 96-101.8v81.7c-23.1 6.9-40 28.3-40 53.7 0 30.9 25.1 56 56 56s56-25.1 56-56c0-25.4-16.9-46.8-40-53.7v-76.9c20.8 6.8 42.2 10.5 64 10.5 21.8 0 43.2-3.7 64-10.5v68.8c-28.2 7.5-48 34.5-48 64.6V488c0 4.2 1.7 8.3 4.7 11.3l10.3 10.3c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.1 3.1-8.2 0-11.3l-5.7-5.7V456c0-19.4 17.4-34.8 37.4-31.6 15.7 2.6 26.6 17.4 26.6 33.3v23.6l-5.7 5.7c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.3c3.1 3.1 8.2 3.1 11.3 0l10.3-10.3c3-3 4.7-7.1 4.7-11.3v-32c0-29.7-20.5-54.5-48-61.6v-73.7c53.4 3.4 96 47.5 96 101.8V504c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-81.6c.2-72.9-57.8-132.2-130.1-134.3zM168 456c0 13.2-10.8 24-24 24s-24-10.8-24-24 10.8-24 24-24 24 10.8 24 24z"></path></svg>               </div>
                <div className={`${initial4 ? "visible" : "invisible"}`}>
                  <BsArrowRightCircleFill className='text-gray-400 text-2xl' />
                </div>
              </div>
              <div className="flex flex-col">
                <span className='text-white text-xl'>Meine Daten</span>
              </div>
            </div>
          </Link>
          {/* //Card ending */}
        </div>
      </div>
    </>
  )
}

export default Section2
