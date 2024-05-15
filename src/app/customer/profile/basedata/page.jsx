"use client"
import "./baseData.css"
import Input from '@/app/_components/Input';
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
//DatePicker imports
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'

const BaseData = () => {
  const percentage = 100;
  return (
    <>
      <form className="px-[90px] py-[80px]">
        <h1 className='text-[24px] font-[600] text-[#173968]'>Stammdaten</h1>
        <div className="my-6 mx-3">
          <div className="text-[16px] leading-[24px] text-[#173968] mb-8">Hier können Sie Ihre persönlichen Daten bearbeiten. Über diese Daten können wir Sie bei Fragen und Problemen erreichen.</div>
        </div>
        {/* //Input Fields */}
        <div className="flex mb-20">
          <div className="sub-containers">
            <div className="entryarea">
              <input className='input-item-k' type="text" required />
              <div className="labelline">
                {"Titel"}
              </div>
            </div>
          </div>
          <div className="sub-containers">
            <div className="entryarea">
              <input className='input-item-k' type="text" required />
              <div className="labelline">
                {"Vorname"}
              </div>
            </div>
          </div>
        </div>
        {/* //Input and Date Fields */}
        <div className="flex justify-center items-center">
          <div className="sub-containers">
            <div className="entryarea">
              <input className='input-item-k' type="text" required />
              <div className="labelline">
                {"Nachname"}
              </div>
            </div>
          </div>
          <div className="sub-containers mb-24">
            {/* <span className="label-spans">Geburtsdatum</span> */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={['DesktopDatePicker']}>
                <DesktopDatePicker
                  defaultValue={dayjs('2022-04-17')}
                  className="datep"
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>
        {/* //Input and Date Fields */}
        <div className="flex mb-24">
          <div className="sub-containers">
            <div className="entryarea">
              <input className='input-item-k' type="text" required />
              <div className="labelline">
                {"Festnetz"}
              </div>
            </div>
          </div>
          <div className="sub-containers">
            <div className="entryarea">
              <input className='input-item-k' type="text" required />
              <div className="labelline">
                {"Fax"}
              </div>
            </div>
          </div>
        </div>
        {/* //Input and Date Fields */}
        {/* //Input and Date Fields */}
        <div className="flex mb-24">
          <div className="sub-containers">
            <div className="entryarea">
              <input className='input-item-k' type="text" required />
              <div className="labelline">
                {"Mobiltelefon"}
              </div>
            </div>
          </div>
          <div className="sub-containers">
            <div className="entryarea">
              <input className='input-item-k' type="text" required />
              <div className="labelline">
                {"alternatives Mobiltelefon"}
              </div>
            </div>
          </div>
        </div>
        {/* //Input and Date Fields */}
        <div className="flex justify-end mr-8">
          <button className="py-[10px] px-[32px] rounded-md text-white bg-[#ED6D05] text-[16px] font-[500]">Speichern</button>
        </div>
      </form>
    </>
  )
}

export default BaseData;