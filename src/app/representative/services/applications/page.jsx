"use client"
//select
import { HiOutlineSortAscending } from "react-icons/hi";
import "./application.css";
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
import { ClipLoader } from "react-spinners";

const Page = () => {
  return (
    <>
      <div className="pt-20 pl-16">
        <div className="text-[24px] mb-8 font-[700] text-[#20416E]">Meine Bewerbungen</div>
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

        <div className="py-6 flex justify-center items-center">
          <ClipLoader color="#36d7b7" />
        </div>
      </div>
    </>
  )
}

export default Page;

{/* <div className="w-4 h-4">
<svg data-v-3d8347df="" className="text-[#173968] svg-inline--fa fa-chair-office fa-w-12 mdi v-icon notranslate v-theme--light v-icon--size-default" aria-hidden="true" light="" focusable="false" data-prefix="fal" data-icon="chair-office" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M32 240v-96c0-8.84-7.16-16-16-16s-16 7.16-16 16v96c0 8.84 7.16 16 16 16s16-7.16 16-16zm314.49 47.03c-6.39-10.63-15.74-18.67-26.49-24.02V64c0-35.35-28.65-64-64-64H128C92.65 0 64 28.65 64 64v199.01c-10.75 5.35-20.1 13.39-26.49 24.02l-14.57 24.24C3.71 343.26 26.75 384 64.07 384H176v33.22c-35.61 5.41-65 28.54-77.85 59.63-6.41 15.51 2.41 35.14 15.02 35.14h157.66c12.61 0 21.44-19.63 15.02-35.14-12.85-31.08-42.24-54.22-77.85-59.63V384h111.93c37.33 0 60.37-40.74 41.14-72.73l-14.58-24.24zM96 64c0-17.64 14.36-32 32-32h128c17.64 0 32 14.36 32 32v192H96V64zm155.6 416H132.4c12.18-19.47 34.96-32 59.6-32s47.42 12.53 59.6 32zm82.25-136.12c-1.38 2.44-5.5 8.12-13.93 8.12H64.07c-8.42 0-12.54-5.68-13.93-8.12-1.38-2.44-4.13-8.9.21-16.12l14.57-24.24C70.69 293.95 81.19 288 92.36 288h199.28c11.17 0 21.67 5.95 27.43 15.52l14.57 24.24c4.34 7.21 1.59 13.68.21 16.12zM368 128c-8.84 0-16 7.16-16 16v96c0 8.84 7.16 16 16 16s16-7.16 16-16v-96c0-8.84-7.16-16-16-16z"></path></svg>
</div> */}