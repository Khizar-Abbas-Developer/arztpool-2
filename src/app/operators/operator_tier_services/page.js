'use client'
import './TierServices.css'
import Input from '@/app/_components/Input'
import Table2 from '@/app/operators/(components)/ServicesTable'
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

const TierServices = () => {
  return (
    <>
      <main className="users-container">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
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
          <div className="col-lg-6 col-md-6 col-sm-12">
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
          <div className="col-lg-4 col-md-6 col-sm-12">
            <span className='label-span'>Bundesland</span>
            <Select
              placeholder="Alle"
              className='seletedf'
              sx={{

                height: 57,
                border: 0,
                borderBottom: '2px solid #C0C0C0',
                borderRadius: 0,
                // borderColor: '#C0C0C0',
                marginTop: 1,
                '&:focus-within': {
                  borderColor: '#ffbf00',
                },
                fontWeight: 800,
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
        <div className="button-containers">
          <button className="btn">Suchen</button>
        </div>
      </main>
      {/* //table */}
      <main className="user-table-container">
        <Table2 />
      </main>
    </>
  )
}

export default TierServices
