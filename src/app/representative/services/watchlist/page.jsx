"use client"
//select
import { HiOutlineSortAscending } from "react-icons/hi";
import "./watchlist.css";
import * as React from 'react'
import Button from '@mui/joy/Button'
import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'
import Stack from '@mui/joy/Stack'
//select
import 'react-datepicker/dist/react-datepicker.css'
import inputIcon from '@/../public/icons/2.png'
import Image from 'next/image'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import { PiOfficeChair } from 'react-icons/pi'
import { FaCar } from 'react-icons/fa'
import Link from "next/link";
import { TbCircleFilled } from "react-icons/tb";
import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const Page = () => {
  const mapArray = [1, 2, 3, 4, 5, 6, 7]
  const [hover, setHover] = useState(false);
  const handleMouseHoverEnter = () => {
    console.log("hovered enter");
    setHover(true);
  }
  const handleMouseHoverLeave = () => {
    setHover(false);
    console.log("hovered leave");
  }
  return (
    <>
      <div className="pt-20 pl-16">
        <div className="text-[24px] mb-8 font-[700] text-[#20416E]">Merkliste</div>
        <div className="flex gap-6">
          <div className="set">
            <Select
              placeholder="Alle"
              className='seletedf'
              sx={{
                width: 870,
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
        <div className="flex">
          <div className="container-4-checkboxes hm-check">
            <div className="set">
              <div className="flex">
                <HiOutlineSortAscending />
                <span className='label-span'>Sortierung</span>
              </div>
              <Select
                placeholder="Datum aufsteigend"
                className='seletedf'
                sx={{
                  width: 870,
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
        </div>

        <div className="py-2 flex flex-wrap gap-4 justify-center items-center mr-8">
          {/* Google MAP CARD */}
          {mapArray.map((item, i) => {
            return (
              <div key={i} className={`h-[335px] cursor-pointer w-[260px] rounded-md border-[#3d6194] border-1 hover:border-3 hover:border-[#ED6D05]`} onMouseEnter={handleMouseHoverEnter} onMouseLeave={handleMouseHoverLeave}>
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
                  <span className="text-[#173968] text-[14px]">1 Beobachter | 1 Bewerber</span>
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
      </div>
    </>
  )
}

export default Page;

{/* <div className="w-4 h-4">
<svg data-v-3d8347df="" className="text-[#173968] svg-inline--fa fa-chair-office fa-w-12 mdi v-icon notranslate v-theme--light v-icon--size-default" aria-hidden="true" light="" focusable="false" data-prefix="fal" data-icon="chair-office" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M32 240v-96c0-8.84-7.16-16-16-16s-16 7.16-16 16v96c0 8.84 7.16 16 16 16s16-7.16 16-16zm314.49 47.03c-6.39-10.63-15.74-18.67-26.49-24.02V64c0-35.35-28.65-64-64-64H128C92.65 0 64 28.65 64 64v199.01c-10.75 5.35-20.1 13.39-26.49 24.02l-14.57 24.24C3.71 343.26 26.75 384 64.07 384H176v33.22c-35.61 5.41-65 28.54-77.85 59.63-6.41 15.51 2.41 35.14 15.02 35.14h157.66c12.61 0 21.44-19.63 15.02-35.14-12.85-31.08-42.24-54.22-77.85-59.63V384h111.93c37.33 0 60.37-40.74 41.14-72.73l-14.58-24.24zM96 64c0-17.64 14.36-32 32-32h128c17.64 0 32 14.36 32 32v192H96V64zm155.6 416H132.4c12.18-19.47 34.96-32 59.6-32s47.42 12.53 59.6 32zm82.25-136.12c-1.38 2.44-5.5 8.12-13.93 8.12H64.07c-8.42 0-12.54-5.68-13.93-8.12-1.38-2.44-4.13-8.9.21-16.12l14.57-24.24C70.69 293.95 81.19 288 92.36 288h199.28c11.17 0 21.67 5.95 27.43 15.52l14.57 24.24c4.34 7.21 1.59 13.68.21 16.12zM368 128c-8.84 0-16 7.16-16 16v96c0 8.84 7.16 16 16 16s16-7.16 16-16v-96c0-8.84-7.16-16-16-16z"></path></svg>
</div> */}