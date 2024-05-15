'use client'
import "./extraHeader.css";
import * as React from 'react'
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

const ExtraHeader = () => {
    return (
        <>
            <div className="main-container-section-1">
                <div className="top-sub-containerss">
                    <span className="heading-text-1">KV-Dienst am 22.03.2023 - Sitzdienst - 5h - Bayern</span>
                </div>
            </div>
        </>
    )
}

export default ExtraHeader;