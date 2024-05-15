"use client"
import "./billing.css"
import Input from '@/app/_components/Input';
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
//DatePicker imports
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
//Select imports
//select imports
import Button from '@mui/joy/Button'
import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'
import Stack from '@mui/joy/Stack'

const Billing = () => {
  const percentage = 100;
  return (
    <>
      <form className="px-[90px] py-[80px]">
        <h1 className='text-[24px] font-[600] text-[#173968]'>Ihre Abrechnungsdaten</h1>
        <div className="my-6 mx-3">
          <div className="text-[16px] leading-[24px] text-[#173968] mb-8">Die folgenden Daten verwenden wir, um Ihre Rechnungsvorlagen und die Vertragsinformationen auszufüllen. Bitte achten Sie darauf, dass die folgenden Angaben richtig sind, da sie Vertragsbestandteil der Dienstvertretungsverträge werden.</div>
        </div>
        <h1 className="pt-4 pb-10 text-[16px] text-[#173868] font-[700]">Rechnungsadresse</h1>
        {/* //Input Fields */}
        <div className="flex mb-16">
          <div className="sub-containers-1">
            <div className="entryarea">
              <input className='input-item-k' type="text" required />
              <div className="labelline">
                {"Straße"}
              </div>
            </div>
          </div>
          <div className="sub-containers-2">
            <div className="entryarea">
              <input className='input-item-k' type="text" required />
              <div className="labelline">
                {"Hausnummer"}
              </div>
            </div>
          </div>
        </div>
        {/* //Input and Date Fields */}
        {/* //Input Fields */}
        <div className="flex mb-16">
          <div className="sub-containers-2">
            <div className="entryarea">
              <input className='input-item-k' type="text" required />
              <div className="labelline">
                {"Postleitzahl"}
              </div>
            </div>
          </div>
          <div className="sub-containers-1">
            <div className="entryarea">
              <input className='input-item-k' type="text" required />
              <div className="labelline">
                {"Ort"}
              </div>
            </div>
          </div>
        </div>
        {/* //Input and Date Fields */}
        {/* //Input Fields */}
        <div className="set mb-16">
          <span className="label-span">Bundesland</span>
          <Select
            placeholder="Bundesländer"
            className="seletedf z-[99999999999]"
            multiple
            sx={{
              width: 410,
              height: 57,
              border: 0,
              zIndex: 9999,
              borderBottom: '1px solid #C0C0C0',
              borderRadius: 0,
              backgroundColor: 'transparent',
              // borderColor: '#C0C0C0',
              marginTop: 1,
              '&:focus-within': {
                borderColor: '#ffbf00',
                backgroundColor: 'rgb(231, 235, 239)',
              },
              fontWeight: 600,
            }}
          >
            <Option className="z-[9999999999999999999]" value="dog">Baden-Wurttemberg</Option>
            <Option className="z-[9999999999999999999]" value="cat">Bayern</Option>
            <Option className="z-[9999999999999999999]" value="fish">Berlin</Option>
            <Option className="z-[9999999999999999999]" value="bird">Brandenburg</Option>
            <Option className="z-[9999999999999999999]" value="bird">Bremen</Option>
            <Option className="z-[9999999999999999999]" value="bird">Hamburg</Option>
          </Select>
        </div>
        <hr />
        <h1 className="pt-4 text-[16px] text-[#173868] font-[700]">Steuernummer</h1>
        {/* //Input Fields */}
        <div className="flex my-16">
          <div className="sub-containers-3">
            <div className="entryarea">
              <input className='input-item-k' type="text" required />
              <div className="labelline">
                {"Steuernummer"}
              </div>
            </div>
          </div>
        </div>
        <h1 className="my-10 text-[16px] text-[#173868] font-[700]">Bankverbindung</h1>
        {/* //Input Fields */}
        {/* //Input Fields */}
        <div className="flex mt-16">
          <div className="sub-containers">
            <div className="entryarea">
              <input className='input-item-k' type="text" required />
              <div className="labelline">
                {"Kontoinhaber"}
              </div>
            </div>
          </div>
          <div className="sub-containers">
            <div className="entryarea">
              <input className='input-item-k' type="text" required />
              <div className="labelline">
                {"IBAN"}
              </div>
            </div>
          </div>
        </div>
        <div className="flex mt-20">
          <div className="sub-containers">
            <div className="entryarea">
              <input className='input-item-k' type="text" required />
              <div className="labelline">
                {"BIC"}
              </div>
            </div>
          </div>
          <div className="sub-containers">
            <div className="entryarea">
              <input className='input-item-k' type="text" required />
              <div className="labelline">
                {"Bank"}
              </div>
            </div>
          </div>
        </div>
        {/* //Input and Date Fields */}
        {/* //Input and Date Fields */}
        {/* //Input and Date Fields */}
        <div className="flex justify-end mt-24">
          <button className="py-[10px] px-[32px] rounded-md text-white bg-[#ED6D05] text-[16px] font-[500]">Speichern</button>
        </div>
      </form>
    </>
  )
}

export default Billing;