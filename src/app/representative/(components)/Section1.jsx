'use client'
import * as React from 'react'
import './Section1.css'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import { FaCar } from 'react-icons/fa'
import { PiOfficeChair } from "react-icons/pi";

//select imports
import Button from '@mui/joy/Button'
import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'
import Stack from '@mui/joy/Stack'

const Section1 = () => {
  return (
    <>
      <div className="main-container-section-11">
        <div className="top-sub-containers">
          <span className="heading-text-1">Dashboard</span>
          <span className="heading-text-2">Herzlich willkommen</span>
        </div>
        <div className="bottom-sub-containers">
          <div className='hm-custom11'>
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
          </div>

        </div>
      </div>
    </>
  )
}

export default Section1
