"use client"
import React from 'react';
import "./FirstLayout.css";
import Input from '../../(Components)/Input/Input';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
//DatePicker imports
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux';
import axios from 'axios';
import toast from 'react-hot-toast';

const FirstLayout = ({ serviceId, service_type, created_at, id, from_date, till_date, emergency_fee, minimum_fee, maximum_fee }) => {
    const currentUser = useSelector((state) => state.user?.currentUser);
    const userAccessToken = currentUser?.accessToken;
    const URL = process.env.NEXT_PUBLIC_BACK_END_API_URL;
    const updateService = `${URL}/api/service/v1/update_service/${serviceId}`;
    //created at date formatting
    const date = new Date(created_at);
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);

    // From date formatting
    const fromDateObject = new Date(from_date);
    const fromDay = fromDateObject.getDate().toString().padStart(2, '0');
    const fromMonth = (fromDateObject.getMonth() + 1).toString().padStart(2, '0');
    const fromYear = fromDateObject.getFullYear();
    const formattedFromDate = `${fromDay}-${fromMonth}-${fromYear}`;

    // Till date formatting
    const tillDateObject = new Date(till_date);
    const tillDay = tillDateObject.getDate().toString().padStart(2, '0');
    const tillMonth = (tillDateObject.getMonth() + 1).toString().padStart(2, '0');
    const tillYear = tillDateObject.getFullYear();
    const myDateTill = `${tillDay}-${tillMonth}-${tillYear}`;

    const [data, setData] = useState({
        service_type: service_type || "",
        from_date: formattedFromDate || "04-04-2024",
        till_date: myDateTill || "05-04-2024", // This line might be causing the issue
        emergency_fee: emergency_fee || "",
        minimum_fee: minimum_fee || "",
        maximum_fee: maximum_fee || ""
    })
    const apiUrl = process.env.NEXT_PUBLIC_BACK_END_API_URL;
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleServiceType = (event) => {
        const selectedValue = event.target.value;
        setData({ ...data, service_type: selectedValue });
    };
    const handleStartDate = (newDate) => {
        setData({
            ...data,
            from_date: newDate ? dayjs(newDate).format('DD-MM-YYYY') : '' // Format the date as needed
        });
    };
    const handleEndDate = (newDate) => {
        setData({
            ...data,
            till_date: newDate ? dayjs(newDate).format('DD-MM-YYYY') : '' // Format the date as needed
        });
    };
    const handleEmergencyFee = (event) => {
        const selectedValue = event.target.value;
        setData({ ...data, emergency_fee: selectedValue });
    };
    const handleUpdateServiceInfo = async (e) => {
        e.preventDefault();
        delete data.service_type;
        const config = {
            headers: {
                Authorization: `Bearer ${userAccessToken}`,
                'Content-Type': 'application/json', // Specify content type as JSON
            },
        };
        try {
            const response = await axios.patch(updateService, data, config);
            if (response.data.message === "Success") {
                toast.success("Services Info updated successfully")
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <main className="users-container-services">
                <div className="flex justify-end items-center gap-4 special-service-container">
                    <div className="flex justify-center items-center gap-2">
                        <div className="h-4 w-4">
                            <svg data-v-d77c810e="" className="text-[#173968] w-full h-full svg-inline--fa fa-notes-medical fa-w-12 mdi v-icon notranslate v-theme--light v-icon--size-default me-2" aria-hidden="true" light="" focusable="false" data-prefix="fas" data-icon="notes-medical" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm96 304c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48zm0-192c0 4.4-3.6 8-8 8H104c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h176c4.4 0 8 3.6 8 8v16z"></path></svg>
                        </div>
                        <div className="text-[16px] font-[600] text-[#173968]">Altdienst</div>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <div className="h-4 w-4">
                            <svg data-v-d77c810e="" className="text-[#173968] w-full h-full svg-inline--fa fa-notes-medical fa-w-12 mdi v-icon notranslate v-theme--light v-icon--size-default me-2" aria-hidden="true" light="" focusable="false" data-prefix="fas" data-icon="notes-medical" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm96 304c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48zm0-192c0 4.4-3.6 8-8 8H104c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h176c4.4 0 8 3.6 8 8v16z"></path></svg>
                        </div>
                        <div className="text-[16px] font-[600] text-[#173968]">Nicht ausgeschrieben</div>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <div className="h-4 w-4">
                            <svg data-v-d77c810e="" className="text-[#173968] w-full h-full svg-inline--fa fa-notes-medical fa-w-12 mdi v-icon notranslate v-theme--light v-icon--size-default me-2" aria-hidden="true" light="" focusable="false" data-prefix="fas" data-icon="notes-medical" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm96 304c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48zm0-192c0 4.4-3.6 8-8 8H104c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h176c4.4 0 8 3.6 8 8v16z"></path></svg>
                        </div>
                        <div className="text-[16px] font-[600] text-[#173968]">Dienst zugewiesen</div>
                    </div>
                </div>
                <div className=""></div>
            </main>
            <main className="users-container-services-2">
                <div className="flex justify-between">
                    <div className="mr-28 font-semibold">{service_type === 1 ? "Fahrdienst" : "Sitzdienst"}</div>
                    <div className="">{`Registered on :   ${formattedDate}`}</div>
                    {/* <div className="">Eingetragen am: 20.02.2024</div> */}
                    <div className="">Muldental - Wurzen   (Sachsen)</div>
                    {/* <div className="">ID: 9e5f981a-b5bf-41a8-ba92-e15ba0264866</div> */}
                    <div className="">ID: {id}</div>
                </div>
            </main>
            <hr className='' />
            <form className="users-container-services-3" onSubmit={handleUpdateServiceInfo}>
                {/* // */}
                <div className="row justify-content-between mt-4">
                    <div className="col-lg-4 col-md-6 col-sm-12 mt-11">
                        <div className="mt-2">
                            <div className="set z-50">
                                <Form.Select
                                    aria-label="Default select example"
                                    className='w-[470px] border-none border-bottom rounded-none'
                                    name='service_type'
                                    value={data.service_type}
                                    onChange={handleServiceType}
                                >
                                    <option>Dienstart</option>
                                    {/* {listOfFederalStates.map((state, i) => { */}
                                    return (
                                    <React.Fragment>
                                        <option value="General-Medicines">General Medicines</option>
                                        {/* <option value={state.id}>{state.title}</option> */}
                                    </React.Fragment>
                                    )
                                    {/* })} */}
                                </Form.Select>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        {/* //Input and Date Fields */}
                        <div className="flex justify-center items-center">
                            <div className="sub-containers">
                                <span className="label-spans">von (Datum)</span>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DesktopDatePicker']}>
                                        <DesktopDatePicker
                                            className="datepp z-50 w-[470px]"
                                            name='from_date'
                                            onChange={(newDate) => handleStartDate(newDate)}
                                            defaultValue={dayjs(`${data.from_date}`)}
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
                                <span className="label-spans">bis (Datum)</span>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DesktopDatePicker']}>
                                        <DesktopDatePicker
                                            className="datepp z-50 w-[470px]"
                                            name='till_date'
                                            onChange={(newDate) => handleEndDate(newDate)}
                                            defaultValue={dayjs(`${data.till_date}`)}
                                            format="DD MM YYYY"
                                        />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </div>
                        </div>
                        {/* //Input and Date Fields */}
                    </div>
                </div>

                {/* //Second Row starting from here */}
                {/* //Second Row starting from here */}
                {/* //Second Row starting from here */}
                {/* //Second Row starting from here */}
                {/* //Second Row starting from here */}
                {/* //Second Row starting from here */}
                <div className="row justify-content-start mt-4">
                    <div className="col-lg-3 col-md-6 col-sm-12 mt-6">
                        <div className="mt-2">
                            <div className="set z-50">
                                <Form.Select
                                    aria-label="Default select example"
                                    className='w-[370px] border-none border-bottom rounded-none'
                                    name='emergency_fee'
                                    value={data.emergency_fee}
                                    onChange={handleEmergencyFee}
                                >
                                    <option>Notfallscheinbeteiligung</option>
                                    <option value="10">10€</option>
                                    <option value="20">20€</option>
                                    <option value="30">30€</option>
                                    <option value="40">40€</option>
                                    <option value="50">50€</option>
                                </Form.Select>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mt-6">
                        <div className="sub-container">
                            <div className="entryarea">
                                <input
                                    className='input-item-k'
                                    type={"text"}
                                    name={"minimum_fee"}
                                    value={data.minimum_fee}
                                    onChange={handleInputChange}
                                    required
                                    autoComplete="off"
                                />
                                <div className="labelline bg-transparent">
                                    {"Mindesthonorar"}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 mt-6">
                        <div className="sub-container">
                            <div className="entryarea">
                                <input
                                    className='input-item-k'
                                    type={"text"}
                                    name="maximum_fee"
                                    value={data.maximum_fee}
                                    onChange={handleInputChange}
                                    required
                                    autoComplete="off"
                                />
                                <div className="labelline bg-transparent">
                                    {"Maximales Honorar"}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* // */}
                <div className="flex justify-end mr-8 mt-16">
                    <button className="py-[10px] px-[32px] rounded-md text-white bg-[#ED6D05] text-[16px] font-[500]">Speichern</button>
                </div>
            </form>
        </>
    )
}

export default FirstLayout;