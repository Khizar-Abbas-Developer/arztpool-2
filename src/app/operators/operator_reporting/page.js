'use client'
import './ServiceReport.css'
import Input from '@/app/_components/Input'
import Table2 from '@/app/operators/(components)/ServicesTable'
//select
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
import { MdAccessTime } from 'react-icons/md'

const ServiceReport = () => {
  return (
    <>
      <main className="users-container" style={{ width: 'auto' }}>
        <form className="">
          <div className="row w-100 d-flex justify-content-between">
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center flex-col">
              <span>Start of service</span>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DesktopDatePicker']}>
                  <DesktopDatePicker
                    defaultValue={dayjs('2022-04-17')}
                    className="datep"
                  />
                </DemoContainer>
              </LocalizationProvider>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-center flex-col">
              <span>End of service</span>
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
          <div className="d-flex button-containers">
            <button className="btn-2 py-2">Suchen</button>
          </div>
        </form>
        <div className="row gap-2 my-2">
          <div className="btn-1 col-lg-2 col-md-2 col-sm-12">
            <MdAccessTime className="plus-icons" />
            <span>Letzte 24h</span>
          </div>
          <div className="btn-1 col-lg-2 col-md-2 col-sm-12">
            <MdAccessTime className="plus-icons" />
            <span>Letzte 7 Tage</span>
          </div>
          <div className="btn-1 col-lg-2 col-md-2 col-sm-12">
            <MdAccessTime className="plus-icons" />
            <span>Letzte 30 Tage</span>
          </div>
        </div>
      </main>
      {/* //table */}
      <main className="user-table-container">
        <Table2 />
        <Table2 />
      </main>
    </>
  )
}

export default ServiceReport
