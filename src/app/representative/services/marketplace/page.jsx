"use client"
//select
import placeHolderGoogleMap from "@/../public/assets/bg-2.jpg";
import "./marketplace.css";
import { GiElectric } from "react-icons/gi";
import { AiOutlineArrowRight } from "react-icons/ai";
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
import { useState } from "react";

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
        <div className="text-2xl mb-8 font-[500] text-[#20416E]">KV-Dienste finden</div>
        <div className="flex gap-6">
          <div className="set">
            <span className='label-span'>Dienstbeginn</span>
            <LocalizationProvider dateAdapter={AdapterDayjs} className='tempo-0'>
              <DemoContainer components={['DesktopDatePicker']} className='tempo'>
                <DesktopDatePicker
                  defaultValue={dayjs('2022-04-17')}
                  className="datep"
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <div className="set">
            <span className='label-span'>Dienstende</span>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DesktopDatePicker']}>
                <DesktopDatePicker
                  defaultValue={dayjs('2022-04-17')}
                  className="datep"
                />
              </DemoContainer>
            </LocalizationProvider>
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
        <div className="flex">
          <div className="container-4-checkboxes hm-check">
            <div className="checkbox-section-1-container">
              <div className="">
                <input type="checkbox" className='checkbox-1-section-1' name="" id="" />
              </div>
              <div className="icon-and-text-container-section-1">
                <FaCar className='car-icon-section-1' />
                <span className='icon-text-section-1'>Fahrdienste</span>
              </div>
            </div>
            <div className="checkbox-section-1-container hm-check-2">
              <div className="">
                <input type="checkbox" className='checkbox-1-section-1' name="" id="" />
              </div>
              <div className="icon-and-text-container-section-1">
                <PiOfficeChair className='car-icon-section-1' />
                <span className='icon-text-section-1'>Sitzdienste</span>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center ml-28 hover:drop-shadow-lg">
            <button className="flex justify-center items-center pt-[12px] pb-[12px] px-8 text-white bg-[#ED6D05] rounded-md">Neue Suche starten</button>
          </div>
        </div>
        <div className="flex w-full justify-end pr-[60px] mt-4">
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
        <div className="py-2 flex flex-wrap gap-4">
          {/* Google MAP CARD */}
          {mapArray.map((item, i) => {
            return (
              <div key={i} className={`h-[418px] cursor-pointer w-[260px] rounded-md border-[#3d6194] border-1 hover:border-3 hover:border-[#ED6D05]`} onMouseEnter={handleMouseHoverEnter} onMouseLeave={handleMouseHoverLeave}>
                <div className={`h-32 rounded-tl-md rounded-tr-md`}>
                  {/* <Image src={placeHolderGoogleMap} className="w-full h-full" alt="" /> */}
                  <div className="mapouter"><div className="gmap_canvas"><iframe width="258" height="128" id="gmap_canvas" src="https://maps.google.com/maps?q=636+5th+Ave%2C+New+York&t=&z=7&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe><a href="https://textcaseconvert.com/"></a><br /><a href="https://online-timer.me/"></a><br /><a href="https://www.embedmaps.co">google map net</a></div></div>
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
                    <span className="text-[20px] text-[#173968] font-[600]">65€</span> <span className="text-[16px] text-[#173968]">Honorar pro Std.</span>
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
      </div>
    </>
  )
}

export default Page;