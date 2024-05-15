"use client"
import React, { useEffect } from 'react';
import "./FirstLayout.css";
import Input from '../../(Components)/Input/Input';
import { useState } from 'react';
import { Form } from 'react-bootstrap';
//DatePicker imports
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import { Option, Select } from '@mui/joy';
import axios from 'axios';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

const FirstLayout = ({ surname, federal_state, federal_state_id, start_date, expiry_date, status, userId }) => {
    const currentUser = useSelector((state) => state.user.currenUser);
    const userAccessToken = currentUser?.accessToken;
    const URL = process.env.NEXT_PUBLIC_BACK_END_API_URL;
    const startDate = new Date(start_date);
    const expiryDate = new Date(expiry_date);

    // Function to add leading zeros to single-digit numbers
    const addLeadingZero = num => (num < 10 ? `0${num}` : num);

    // Format start_date in the desired format (05-04-2024)
    const formattedStartDate = `${addLeadingZero(startDate.getMonth() + 1)}-${addLeadingZero(startDate.getDate())}-${startDate.getFullYear()}`;

    // Format expiry_date in the desired format (05-04-2025)
    const formattedExpiryDate = `${addLeadingZero(expiryDate.getMonth() + 1)}-${addLeadingZero(expiryDate.getDate())}-${expiryDate.getFullYear()}`;

    const [listOfFederalStates, setListOfFederalStates] = useState([]);
    const [data, setData] = useState({
        surname: surname || "",
        state_id: federal_state_id || "",
        start_date: formattedStartDate || "04-04-2024",
        expiry_date: formattedExpiryDate || "05-04-2024",
        status: (status !== undefined) ? status : ""
    })
    const apiUrl = process.env.NEXT_PUBLIC_BACK_END_API_URL;
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    useEffect(() => {
        const fetchFederalStates = async () => {
            const response = await axios.get(`${apiUrl}/api/v1/federal_states_list`);
            setListOfFederalStates(response.data.data)
        }
        fetchFederalStates();
    }, [apiUrl])
    const handleFederalState = (option) => {
        setData({ ...data, state_id: option });
    };
    const handleStartDate = (newDate) => {
        setData({
            ...data,
            start_date: newDate ? dayjs(newDate).format('DD-MM-YYYY') : '' // Format the date as needed
        });
    };
    const handleEndDate = (newDate) => {
        setData({
            ...data,
            expiry_date: newDate ? dayjs(newDate).format('DD-MM-YYYY') : '' // Format the date as needed
        });
    };
    const handleUpdateServiceAreaInfo = async (e) => {
        e.preventDefault();
        // Convert start_date and expiry_date to the desired format (YYYY-MM-DD)
        const formattedData = {
            ...data,
            start_date: dayjs(data.start_date, 'DD-MM-YYYY').format('YYYY-MM-DD'),
            expiry_date: dayjs(data.expiry_date, 'DD-MM-YYYY').format('YYYY-MM-DD')
        };

        try {
            const response = await axios.patch(
                `${URL}/api/v1/update_service_area_info/${userId}`,
                formattedData,
                {
                    headers: {
                        Authorization: `Bearer ${userAccessToken}`
                    }
                }
            );
            if (response.data.message === "Success") {
                toast.success("Updated Successfully")
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <>
            <main className="users-container-services-2 mt-10">
                <div className="flex gap-2">
                    <p className="font-600">{surname}</p>
                    <p className="">{`(${userId})`}</p>
                </div>
            </main>
            <hr className='' />
            <form className="users-container-services-3" onSubmit={handleUpdateServiceAreaInfo}>
                {/* // */}
                <div className="flex mt-8 justify-between items-center">
                    <div className="">
                        <div className="entryarea">
                            <input
                                className='input-item-k'
                                style={{ width: "716px" }}
                                type={"text"}
                                name={"surname"}
                                value={data.surname}
                                onChange={handleInputChange}
                                required
                                autoComplete="off"
                            />
                            <div className="labelline bg-transparent">
                                {"Name"}
                            </div>
                        </div>
                    </div>
                    <div className="set mt-2">
                        <div className="set z-50">
                            <Select
                                placeholder={federal_state}
                                className="seletedf"
                                name='state_id'
                                sx={{
                                    width: 730,
                                    height: 57,
                                    border: 0,
                                    borderBottom: '2px solid #C0C0C0',
                                    borderRadius: 0,
                                    marginTop: 1,
                                    '&:focus-within': {
                                        borderColor: '#ffbf00',
                                    },
                                    fontWeight: 600,
                                }}
                            >
                                {/* {listOfFederalStates.map((state, i) => (
                                    <Option value={state.id} onClick={() => handleFederalState(state.id)} key={i}>{state}</Option>
                                ))} */}
                                {listOfFederalStates.map((item, i) => {
                                    return (
                                        <Option key={i} value={item.id} onClick={() => handleFederalState(item.id)}>{item.title}</Option>
                                    )
                                })}
                            </Select>
                        </div>
                    </div>
                </div>

                {/* //Second Row starting from here */}
                {/* //Second Row starting from here */}
                {/* //Second Row starting from here */}
                {/* //Second Row starting from here */}
                {/* //Second Row starting from here */}
                {/* //Second Row starting from here */}
                <div className="flex justify-between mt-4">
                    <div className="set">
                        <span className='label-span'>Gültig von</span>
                        <LocalizationProvider dateAdapter={AdapterDayjs} className='tempo-0'>
                            <DemoContainer components={['DesktopDatePicker']} className='tempo'>
                                <DesktopDatePicker
                                    className="w-[730px]"
                                    name='start_date'
                                    onChange={(newDate) => handleStartDate(newDate)}
                                    defaultValue={dayjs(`${data.start_date}`)}
                                    format="DD MM YYYY"
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                    <div className="set">
                        <span className='label-span'>Gültig bis</span>
                        <LocalizationProvider dateAdapter={AdapterDayjs} className='tempo-0'>
                            <DemoContainer components={['DesktopDatePicker']} className='tempo'>
                                <DesktopDatePicker
                                    className="w-[730px]"
                                    name='start_date'
                                    onChange={(newDate) => handleEndDate(newDate)}
                                    defaultValue={dayjs(`${data.expiry_date}`)}
                                    format="DD MM YYYY"
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>
                </div>
                {/* // */}
                <div className="flex justify-end mr-3 mt-16">
                    <button className="py-[10px] px-[32px] rounded-md text-white bg-[#ED6D05] text-[16px] font-[500]">Speichern</button>
                </div>
            </form>
        </>
    )
}

export default FirstLayout;