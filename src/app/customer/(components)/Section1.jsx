'use client'
import * as React from 'react'
import './Section1.css'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'


//select imports

import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'


const Section1 = () => {
  return (
    <>
      <div className="main-container-section-1">
        <div className="top-sub-containers">
          <span className="heading-text-1">Dashboard</span>
          <span className="heading-text-2">Herzlich willkommen</span>
        </div>
        <div className="bottom-sub-containers">
          <div className=' hm-custom'>
            <form className="form-section-1 flex-row">
              <div className="set">
                <span className="label-span">von (Datum)</span>
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
                <span className="label-span">bis (Datum)</span>
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
                <span className="label-span">Bundesland</span>
                <Select
                  placeholder="Bundesländer"
                  className="seletedf"
                  multiple
                  sx={{
                    width: 270,
                    height: 57,
                    border: 0,
                    borderBottom: '1px solid #C0C0C0',
                    borderRadius: 0,
                    backgroundColor: 'rgb(231, 235, 239)',
                    // borderColor: '#C0C0C0',
                    marginTop: 1,
                    '&:focus-within': {
                      borderColor: '#ffbf00',
                      backgroundColor: 'rgb(231, 235, 239)',
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
              <div className="button-set-section-1">
                <button className="button-section-1">Neue Suche starten</button>
              </div>
            </form>
            <div className="container-4-checkboxes hm-check">
              <div className="checkbox-section-1-container">
                <div className="">
                  <input type="checkbox" className='checkbox-1-section-1' name="" id="" />
                </div>
                <div className="icon-and-text-container-section-1">
                  {/* <FaCar className='car-icon-section-1' /> */}
                  <div className="car-icon-section-1 h-6 w-6">
                    <svg data-v-3d8347df="" className="h-full w-full svg-inline--fa fa-car fa-w-16 mdi v-icon notranslate v-theme--light v-icon--size-default" aria-hidden="true" light="" focusable="false" data-prefix="fal" data-icon="car" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M120.81 248c-25.96 0-44.8 16.8-44.8 39.95 0 23.15 18.84 39.95 44.8 39.95l10.14.1c39.21 0 45.06-20.1 45.06-32.08-.01-24.68-31.1-47.92-55.2-47.92zm10.14 56c-3.51 0-7.02-.1-10.14-.1-12.48 0-20.8-6.38-20.8-15.95s8.32-15.95 20.8-15.95 31.2 14.36 31.2 23.93c0 7.17-10.54 8.07-21.06 8.07zm260.24-56c-24.1 0-55.19 23.24-55.19 47.93 0 11.98 5.85 32.08 45.06 32.08l10.14-.1c25.96 0 44.8-16.8 44.8-39.95-.01-23.16-18.85-39.96-44.81-39.96zm0 55.9c-3.12 0-6.63.1-10.14.1-10.53 0-21.06-.9-21.06-8.07 0-9.57 18.72-23.93 31.2-23.93s20.8 6.38 20.8 15.95-8.32 15.95-20.8 15.95zm114.8-140.94c-7.34-11.88-20.06-18.97-34.03-18.97H422.3l-8.07-24.76C403.5 86.29 372.8 64 338.17 64H173.83c-34.64 0-65.33 22.29-76.06 55.22l-8.07 24.76H40.04c-13.97 0-26.69 7.09-34.03 18.97s-8 26.42-1.75 38.91l5.78 11.61c3.96 7.88 9.92 14.09 17 18.55-6.91 11.74-11.03 25.32-11.03 39.97V400c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48v-16H384v16c0 26.47 21.53 48 48 48h16c26.47 0 48-21.53 48-48V271.99c0-14.66-4.12-28.23-11.03-39.98 7.09-4.46 13.04-10.68 17-18.57l5.78-11.56c6.24-12.5 5.58-27.05-1.76-38.92zM128.2 129.14C134.66 109.32 153 96 173.84 96h164.33c20.84 0 39.18 13.32 45.64 33.13l20.47 62.85H107.73l20.47-62.84zm-89.53 70.02l-5.78-11.59c-1.81-3.59-.34-6.64.34-7.78.87-1.42 2.94-3.8 6.81-3.8h39.24l-6.45 19.82a80.69 80.69 0 0 0-23.01 11.29c-4.71-1-8.94-3.52-11.15-7.94zM96.01 400c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm367.98 0c0 8.83-7.19 16-16 16h-16c-8.81 0-16-7.17-16-16v-16h48v16zm0-80.01v32H48.01v-80c0-26.47 21.53-48 48-48h319.98c26.47 0 48 21.53 48 48v48zm15.12-132.41l-5.78 11.55c-2.21 4.44-6.44 6.97-11.15 7.97-6.94-4.9-14.69-8.76-23.01-11.29l-6.45-19.82h39.24c3.87 0 5.94 2.38 6.81 3.8.69 1.14 2.16 4.18.34 7.79z"></path></svg>
                  </div>
                  <span className='icon-text-section-1'>Fahrdienste</span>
                </div>
              </div>
              <div className="checkbox-section-1-container hm-check-2">
                <div className="">
                  <input type="checkbox" className='checkbox-1-section-1' name="" id="" />
                </div>
                <div className="icon-and-text-container-section-1">
                  {/* <PiOfficeChair className='car-icon-section-1' /> */}
                  <div className="car-icon-section-1 h-6 w-6">
                    <svg data-v-3d8347df="" className="w-full h-full svg-inline--fa fa-chair-office fa-w-12 mdi v-icon notranslate v-theme--light v-icon--size-default" aria-hidden="true" light="" focusable="false" data-prefix="fal" data-icon="chair-office" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M32 240v-96c0-8.84-7.16-16-16-16s-16 7.16-16 16v96c0 8.84 7.16 16 16 16s16-7.16 16-16zm314.49 47.03c-6.39-10.63-15.74-18.67-26.49-24.02V64c0-35.35-28.65-64-64-64H128C92.65 0 64 28.65 64 64v199.01c-10.75 5.35-20.1 13.39-26.49 24.02l-14.57 24.24C3.71 343.26 26.75 384 64.07 384H176v33.22c-35.61 5.41-65 28.54-77.85 59.63-6.41 15.51 2.41 35.14 15.02 35.14h157.66c12.61 0 21.44-19.63 15.02-35.14-12.85-31.08-42.24-54.22-77.85-59.63V384h111.93c37.33 0 60.37-40.74 41.14-72.73l-14.58-24.24zM96 64c0-17.64 14.36-32 32-32h128c17.64 0 32 14.36 32 32v192H96V64zm155.6 416H132.4c12.18-19.47 34.96-32 59.6-32s47.42 12.53 59.6 32zm82.25-136.12c-1.38 2.44-5.5 8.12-13.93 8.12H64.07c-8.42 0-12.54-5.68-13.93-8.12-1.38-2.44-4.13-8.9.21-16.12l14.57-24.24C70.69 293.95 81.19 288 92.36 288h199.28c11.17 0 21.67 5.95 27.43 15.52l14.57 24.24c4.34 7.21 1.59 13.68.21 16.12zM368 128c-8.84 0-16 7.16-16 16v96c0 8.84 7.16 16 16 16s16-7.16 16-16v-96c0-8.84-7.16-16-16-16z"></path></svg>                  </div>
                  <span className='icon-text-section-1'>Sitzdienste</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Section1
