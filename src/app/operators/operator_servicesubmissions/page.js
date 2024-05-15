"use client"
import './ServiceSubmission.css'
import Input from '@/app/_components/Input';
import Table2 from '@/app/operators/(components)/ServicesTable';
//datepicker imports start
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
//datepicker imports end
//select
import * as React from 'react'
import Button from '@mui/joy/Button'
import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'
import Stack from '@mui/joy/Stack'
//select

const ServiceSubmission = () => {
  return (
    <>
      {/* <main className="users-container"> */}
      {/* <div className="first-row">
          <div className="set">
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
          <div className="set">
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
          <div className="set">
            <span>Federal State</span>
            <Select
              placeholder="Select a pet…"
              sx={{ width: 470, height: 57, marginTop: 1 }}
            >
              <Option value="dog">Dog</Option>
              <Option value="cat">Cat</Option>
              <Option value="fish">Fish</Option>
              <Option value="bird">Bird</Option>
            </Select>
          </div>
        </div> */}
      {/* <div className="button-containers">
          <button className="btn-2">Suchen</button>
        </div> */}
      {/* </main> */}
      <main className="user-table-container">
        <Table2 />
      </main>
    </>
  )
}

export default ServiceSubmission;
