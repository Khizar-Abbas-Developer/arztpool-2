import React, { useState } from 'react';
import "./FourthLayout.css";
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import DynamicTable from '../DynamicTable/DynamicTable';

const FourthLayout = () => {
    const [send, setSend] = useState(false);
    const [data, setData] = useState({
        start_date: "04-04-2024",
        end_date: "05-04-2024"
    })
    const apiUrl = process.env.NEXT_PUBLIC_BACK_END_API_URL;
    const handleStartDate = (newDate) => {
        setData({
            ...data,
            start_date: newDate ? dayjs(newDate).format('DD-MM-YYYY') : ''
        });
    };
    const handleEndDate = (newDate) => {
        setData({
            ...data,
            end_date: newDate ? dayjs(newDate).format('DD-MM-YYYY') : ''
        });
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }
    const handleFetchServices = () => {
        setSend(true)
    }
    return (
        <>
            <div className="header-containerst">
                <form className="second-containerst" onSubmit={handleFormSubmit}>
                    <div className="top-info-container-dynamic my-3">
                        <div className="font-[600]">Dienste</div>
                    </div>
                    <hr />
                    {/*  */}
                    <div className="row mt-[50px]">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            {/* //Input and Date Fields */}
                            <div className="flex justify-center items-center">
                                <div className="sub-containers">
                                    <span className="label-spans">Von</span>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['DesktopDatePicker']}>
                                            <DesktopDatePicker
                                                className="datepp z-50"
                                                name='start_date'
                                                onChange={(newDate) => handleStartDate(newDate)}
                                                defaultValue={dayjs(`${data.start_date}`)}
                                                format="DD MM YYYY"
                                            />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                </div>
                            </div>
                            {/* //Input and Date Fields */}
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            {/* //Input and Date Fields */}
                            <div className="flex justify-center items-center">
                                <div className="sub-containers">
                                    <span className="label-spans">Bis</span>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['DesktopDatePicker']}>
                                            <DesktopDatePicker
                                                className="datepp z-50"
                                                name='end_date'
                                                onChange={(newDate) => handleEndDate(newDate)}
                                                defaultValue={dayjs(`${data.end_date}`)}
                                                format="DD MM YYYY"
                                            />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                </div>
                            </div>
                            {/* //Input and Date Fields */}
                        </div>

                    </div>
                    {/* added by hammad */}

                    {/* // */}
                    <div className="flex justify-end mr-8 mt-16 mb-3">
                        <button className="py-[10px] px-[32px] rounded-md text-white bg-[#ED6D05] text-[16px] font-[500]" onClick={handleFetchServices}>Speichern</button>
                    </div>
                    <hr />
                    {/* <main className="user-table-containerst"> */}
                    {/* <DynamicTable send  DatesData={data} /> */}
                    <div className="mt-5">
                        <DynamicTable sendProp={send ? true : false} DatesData={send ? data : null} />
                    </div>
                    {/* </main> */}
                </form>
            </div>
        </>
    )
}

export default FourthLayout;