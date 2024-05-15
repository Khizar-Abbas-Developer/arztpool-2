import React, { useEffect, useState } from 'react';
import "./firstLayout.css";
// import "./Input.css";
import { IoMdCloseCircle } from 'react-icons/io';
import Input from '../Input/Input';
import moment from 'moment';
//DatePicker imports
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import { useSelector } from 'react-redux';
import axios from 'axios';
import toast from 'react-hot-toast';
import { ClipLoader } from 'react-spinners';

const FirstLayout = ({ userId, title, first_name, last_name, email, land_line, cell_phone_1, birth_date, cell_phone_2, fax_number, customer_number, id, created_at, name, label, value, onChange, type = "text" }) => {
    const [loading, setLoading] = useState(false);
    const currentUser = useSelector((state) => state.user?.currentUser);
    // console.log(currentUser);
    const userAccessToken = currentUser?.accessToken;
    // console.log(userId);
    const URL = process.env.NEXT_PUBLIC_BACK_END_API_URL;
    const fetchUserDetailAPI = `${URL}/api/user/v1/user_detail?user_id=${userId}`;
    const updateUserDetailsAPI = `${URL}/api/user/v1/update_user_info/${userId}`;
    const [data, setData] = useState({
        title: title || "",
        first_name: first_name || "",
        last_name: last_name || "",
        email: email || "",
        land_line: land_line || "",
        cell_phone_1: cell_phone_1 || "",
        birth_date: birth_date || "",
        birth_date: birth_date || "2024-04-04",
        cell_phone_2: cell_phone_2 || "",
        fax_number: fax_number || "",
        customer_number: customer_number || "",
        id: id || "",
        created_at: created_at || ""
    });
    const date = new Date(data.created_at);
    // Format the date using moment.js
    const formattedDateToShow2 = moment(date).format('MMMM DD, YYYY');
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleUpdateForm = async (e) => {
        e.preventDefault();
        // Remove specified key-value pairs
        const { created_at, email, id, ...updatedData } = data;
        const config = {
            headers: {
                Authorization: `Bearer ${userAccessToken}`,
                'Content-Type': 'application/json', // Specify content type as JSON
            },
        };
        try {
            console.log(updatedData);
            const responseTwo = await axios.patch(updateUserDetailsAPI, updatedData, config);
            if (responseTwo.data.success === true) {
                toast.success("Updated successfully");
                // Update the data object with the updated data
                setData({
                    ...data,
                    ...updatedData
                });
            } else {
                if (responseTwo.data.success === false) {
                    toast.error("Can't update user")
                } else {
                    toast.error("Internal Server Error!")
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleBirthDateChange = (newDate) => {
        const formattedDate = newDate ? dayjs(newDate).format('YYYY-MM-DD') : ''; // Format the date as needed
        setData({
            ...data,
            birth_date: formattedDate
        });
    };
    return (
        <>
            {loading ?
                (
                    <>
                        <ClipLoader color="#36d7b7" />
                    </>
                ) : (
                    <>
                        <div className="header-containerst">
                            <form className="second-containerst" onSubmit={handleUpdateForm}>
                                <div className="top-info-container-dynamic">
                                    <div className="font-[600]">{`${data.first_name} ${data.last_name}`}</div>
                                    <div className="first-container">
                                        {/* <span>Registered: October</span>
                                        <span>10, 2022</span> */}
                                        <span>Registered: {`${formattedDateToShow2}`}</span>
                                    </div>
                                    <div className="flex justify-center items-center gap-2">
                                        <span>Customer number:</span>
                                        <span>{data.customer_number}</span>
                                    </div>
                                    {/* <div className="">User ID: 4d2ab854-9e26-469b-b233-f84559992d5e</div> */}
                                    <div className="">{`User ID: ${data.id}`}</div>
                                </div>
                                {/* // */}
                                <div className="row justify-content-between mt-6">
                                    <div className="col-lg-4 col-md-6 col-sm-12 mt-6">
                                        <div className="sub-container" style={{ width: "300px" }}>
                                            <div className="entryarea">
                                                <input
                                                    className='input-item-k'
                                                    type={"text"}
                                                    name={"title"}
                                                    value={data.title}
                                                    onChange={handleInputChange}
                                                    required
                                                    autoComplete="off"
                                                />
                                                <div className="labelline bg-transparent">
                                                    {"Titel"}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 mt-6">
                                        <div className="sub-container" style={{ width: "300px" }}>
                                            <div className="entryarea">
                                                <input
                                                    className='input-item-k'
                                                    type="text"
                                                    name={"first_name"}
                                                    value={data.first_name}
                                                    onChange={handleInputChange}
                                                    required
                                                    autoComplete="off"
                                                />
                                                <div className="labelline bg-transparent">
                                                    {"Vorname"}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 mt-6">
                                        <div className="sub-container" style={{ width: "300px" }}>
                                            <div className="entryarea">
                                                <input
                                                    className='input-item-k'
                                                    type="text"
                                                    name="last_name"
                                                    value={data.last_name}
                                                    onChange={handleInputChange}
                                                    required
                                                    autoComplete="off"
                                                />
                                                <div className="labelline bg-transparent">
                                                    {"Nachname"}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 2nd Container of input fields */}
                                    <div className="col-lg-4 col-md-6 col-sm-12 mt-20">
                                        <div className="sub-container" style={{ width: "300px" }}>
                                            <div className="entryarea">
                                                <input
                                                    className='input-item-k'
                                                    type="email"
                                                    name={"email"}
                                                    value={data.email}
                                                    onChange={handleInputChange}
                                                    required
                                                    autoComplete="off"
                                                />
                                                <div className="labelline bg-transparent">
                                                    {"eMail"}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 mt-20">
                                        <div className="sub-container" style={{ width: "300px" }}>
                                            <div className="entryarea">
                                                <input
                                                    className='input-item-k'
                                                    type="text"
                                                    name={"land_line"}
                                                    value={data.land_line}
                                                    onChange={handleInputChange}
                                                    required
                                                    autoComplete="off"
                                                />
                                                <div className="labelline bg-transparent">
                                                    {"Festnetz"}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 mt-20">
                                        <div className="sub-container" style={{ width: "300px" }}>
                                            <div className="entryarea">
                                                <input
                                                    className='input-item-k'
                                                    type={"number"}
                                                    name={"cell_phone_1"}
                                                    value={data.cell_phone_1}
                                                    onChange={handleInputChange}
                                                    required
                                                    autoComplete="off"
                                                />
                                                <div className="labelline bg-transparent">
                                                    {"Handy 1"}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* 3rd Container of input fields */}
                                    <div className="col-lg-4 col-md-6 col-sm-12 mt-14">
                                        {/* //Input and Date Fields */}
                                        <div className="flex justify-start items-center">
                                            <div className="sub-containers">
                                                <span className="label-spans">Geburtsdatum</span>
                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DemoContainer components={['DesktopDatePicker']}>
                                                        <DesktopDatePicker
                                                            className="datepp z-50"
                                                            name='insurance_valid_date'
                                                            onChange={(newDate) => handleBirthDateChange(newDate)}
                                                            defaultValue={dayjs(`${data.birth_date}`)}
                                                            format="DD MM YYYY"
                                                        />
                                                    </DemoContainer>
                                                </LocalizationProvider>
                                            </div>
                                        </div>
                                        {/* //Input and Date Fields */}
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 mt-24">
                                        <div className="sub-container" style={{ width: "300px" }}>
                                            <div className="entryarea">
                                                <input
                                                    className='input-item-k'
                                                    type="number"
                                                    name="cell_phone_2"
                                                    value={data.cell_phone_2} // Ensure the value prop is applied here
                                                    onChange={handleInputChange}
                                                    required
                                                    autoComplete="off"
                                                />
                                                <div className="labelline bg-transparent">
                                                    {"Handy 2"}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-6 col-sm-12 mt-24">
                                        <div className="sub-container" style={{ width: "300px" }}>
                                            <div className="entryarea">
                                                <input
                                                    className='input-item-k'
                                                    type="number"
                                                    name="fax_number"
                                                    value={data.fax_number} // Ensure the value prop is applied here
                                                    onChange={handleInputChange}
                                                    required
                                                    autoComplete="off"
                                                />
                                                <div className="labelline bg-transparent">
                                                    {"Faxnummer"}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* // */}
                                <div className="flex justify-end mr-8 mt-6">
                                    <button className="py-[10px] px-[32px] rounded-md text-white bg-[#ED6D05] text-[16px] font-[500]">Speichern</button>
                                </div>
                            </form>
                        </div>
                    </>
                )}
        </>
    )
}

export default FirstLayout