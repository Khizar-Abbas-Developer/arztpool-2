'use client'
import { ImCross } from 'react-icons/im'
import React, { useEffect, useState } from 'react'
import './ServiceArea.css';
import Input from '@/app/(Operator_layout)/components/Input/Input'
import Link from 'next/link'
import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'
import { ClipLoader, FadeLoader, HashLoader } from 'react-spinners'
import { FaCar } from 'react-icons/fa'
import { Form } from 'react-bootstrap'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import { PiOfficeChair } from "react-icons/pi";
import { useSelector } from 'react-redux'
import axios from 'axios'
import toast from 'react-hot-toast'

const ServiceAreaModal = ({ clickFunctionProp }) => {
    const [listOfFederalStates, setListOfFederalStates] = useState([]);
    const currentUser = useSelector((state) => state.user?.currentUser);
    const userAccessToken = currentUser.accessToken;
    const url = process.env.NEXT_PUBLIC_BACK_END_API_URL;
    const [data, setData] = useState({
        surname: "",
        state_id: "",
        start_date: "04-04-2024",
        expiry_date: "05-04-2024",
    })
    useEffect(() => {
        const fetchFederalStates = async () => {
            const response = await axios.get(`${url}/api/v1/federal_states_list`);
            setListOfFederalStates(response.data.data)
        }
        fetchFederalStates();
    }, [url])
    const [modalVisible, setModalVisible] = useState(true);
    const [hideSection, setHideSection] = useState(true);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleFederalState = (event) => {
        const selectedValue = parseInt(event.target.value, 10);
        setData({ ...data, state_id: selectedValue });
    }
    const handleFromDate = (newDate) => {
        setData({
            ...data,
            start_date: newDate ? dayjs(newDate).format('DD-MM-YYYY') : '' // Format the date as needed
        });
    };
    const handleTillDate = (newDate) => {
        setData({
            ...data,
            expiry_date: newDate ? dayjs(newDate).format('DD-MM-YYYY') : '' // Format the date as needed
        });
    };
    const handleCreateServiceArea = async (e) => {
        e.preventDefault();
        console.log(data);
        try {
            console.log(data);
            const urlP = `${url}/api/v1/add_service_area`;
            const response = await axios.post(urlP, data, { headers: { Authorization: `Bearer ${userAccessToken}` } });
            console.log(response);
            if (response.data.message === "Success") {
                clickFunctionProp();
                toast.success("Service Area created successfully")
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    return (
        <>
            {modalVisible && (
                <>
                    <div className="modal-container">
                        <div className="modal-contents22" style={{ width: `65%` }}>
                            <span className="close" onClick={clickFunctionProp}>
                                <span>Schließen</span>
                                <ImCross className="cross-icon" />
                            </span>
                            <div className="flex flex-col justify-start gap-8">
                                <div className="flex flex-col justify-start gap-8 px-3 py-8">
                                    <h2 className='text-[30px] text-[#173968] font-[500]'>Neuen Dienst eintragen</h2>
                                </div>
                                <form className=" form-classical rounded-md px-5 py-4" style={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }} onSubmit={handleCreateServiceArea}>
                                    <div className="flex justify-between items-center">
                                        <div className="set-input">
                                            <div className="sub-container" style={{ width: "490px" }}>
                                                <div className="entryarea">
                                                    <input
                                                        className='input-item-k'
                                                        type="text"
                                                        name="surname" // Change 'surname' to 'name'
                                                        value={data.surname} // Update to 'data.name' instead of 'data.surname'
                                                        onChange={handleInputChange}
                                                        required
                                                        autoComplete="off"
                                                    />
                                                    <div className="labelline bg-transparent">
                                                        {"Name"}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-[78px] w-[490px] flex justify-center items-center">
                                            <div className="h-[18px] w-[18px]">
                                                <svg className="w-full h-full text-[#173968] svg-inline--fa fa-map-marker-alt fa-w-12 mdi v-icon notranslate v-theme--light v-icon--size-default" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="map-marker-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M192 96c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 160c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64zm0-256C85.961 0 0 85.961 0 192c0 77.413 26.97 99.031 172.268 309.67 9.534 13.772 29.929 13.774 39.465 0C357.03 291.031 384 269.413 384 192 384 85.961 298.039 0 192 0zm0 473.931C52.705 272.488 32 256.494 32 192c0-42.738 16.643-82.917 46.863-113.137S149.262 32 192 32s82.917 16.643 113.137 46.863S352 149.262 352 192c0 64.49-20.692 80.47-160 281.931z"></path></svg>
                                            </div>
                                            <Form.Select
                                                aria-label="Default select example"
                                                className='w-[465px] border-none border-bottom rounded-none'
                                                name='state_id'
                                                value={data.state_id}
                                                onChange={handleFederalState}
                                            >
                                                <option value={""}>Bundesland</option>
                                                {listOfFederalStates.map((item, i) => (
                                                    <option value={item.id || ""} key={item.id}>{item.title}</option>
                                                ))}
                                            </Form.Select>
                                        </div>
                                    </div>
                                    <div className="flex justify-center items-center gap-[80px] my-16" style={{ paddingLeft: "5px", paddingRight: "20px", paddingTop: "50px", paddingBottom: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <div className="set">
                                            <span className='label-span'>Dienstbeginn</span>
                                            <LocalizationProvider dateAdapter={AdapterDayjs} className='tempo-0'>
                                                <DemoContainer components={['DesktopDatePicker']} className='tempo'>
                                                    <DesktopDatePicker
                                                        className="datep"
                                                        name='start_date'
                                                        onChange={(newDate) => handleFromDate(newDate)}
                                                        defaultValue={dayjs(`${data.start_date}`)}
                                                        format="DD MM YYYY"
                                                    />
                                                </DemoContainer>
                                            </LocalizationProvider>
                                        </div>
                                        <div className="set">
                                            <span className='label-span'>Dienstbeginn</span>
                                            <LocalizationProvider dateAdapter={AdapterDayjs} className='tempo-0'>
                                                <DemoContainer components={['DesktopDatePicker']} className='tempo'>
                                                    <DesktopDatePicker
                                                        className="datep"
                                                        name='end_date'
                                                        onChange={(newDate) => handleTillDate(newDate)}
                                                        defaultValue={dayjs(`${data.expiry_date}`)}
                                                        format="DD MM YYYY"
                                                    />
                                                </DemoContainer>
                                            </LocalizationProvider>
                                        </div>
                                    </div>
                                    {/* //Input and Date Fields */}
                                    <div className="flex justify-end my-4 mr-8">
                                        <button className="button">Speichern</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
export default ServiceAreaModal;