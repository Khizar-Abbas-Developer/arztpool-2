'use client'
import './accounting.css'
import Table from '@/app/operators/(components)/Table'
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
import { FaPlusCircle } from 'react-icons/fa'

const page = () => {
  return (
    <>
      <div className="over-services">
        <main className="users-container" style={{ width: 'auto' }}>
          <div>
            <div className="first-d">
              Bitte wählen Sie zunächst einen Zeitraum aus, für den Sie Dienste
              laden wollen. Sie können diese dann in der angezeigten Tabelle
              überprüfen oder einzeln aufrufen. Den Export der geladenen Dienste
              wird dann mit dem entsprechenden Button angestoßen.
            </div>
            <div className="">
              Bitte beachten Sie: Die Daten, die für die geladenen Dienste
              exportiert werden, sind umfangreicher als sie in der Tabelle
              angezeigt werden, diese dient nur der Kontrolle, welche Dienste in
              dem gewählten Zeitraum enthalten sind.
            </div>
          </div>
        </main>
        {/* //table */}
        <main className="user-table-container">
          <Table2 />
        </main>
      </div>
    </>
  )
}

export default page
