'use client'

import './AllInclusiveServices.css'
import Input from '@/app/_components/Input'
import AllInclusiveServicesTable from '@/app/operators/(components)/allInclusiveServicesTable'
import Table2 from '@/app/operators/(components)/ServicesTable'
import React from 'react'

//datepicker imports start
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
//datepicker imports end

const AllInclusiveServices = () => {
  return (
    <>
      <main className="users-container">
        <div className="row mb-3">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <span className="label-span">Dienstbeginn</span>
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              className="tempo-0"
            >
              <DemoContainer
                components={['DesktopDatePicker']}
                className="tempo"
              >
                <DesktopDatePicker
                  defaultValue={dayjs('2022-04-17')}
                  className="datep"
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <span className="label-span">Dienstbeginn</span>
            <LocalizationProvider
              dateAdapter={AdapterDayjs}
              className="tempo-0"
            >
              <DemoContainer
                components={['DesktopDatePicker']}
                className="tempo"
              >
                <DesktopDatePicker
                  defaultValue={dayjs('2022-04-17')}
                  className="datep"
                />
              </DemoContainer>
            </LocalizationProvider>
          </div>
        </div>
        <div className="button-containers">
          <button className="btn">Suchen</button>
        </div>
      </main>
      <main className="user-table-container">
        <AllInclusiveServicesTable />
      </main>
    </>
  )
}

export default AllInclusiveServices
