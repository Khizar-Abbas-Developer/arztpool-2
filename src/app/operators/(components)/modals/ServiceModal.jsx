'use client'
import { ImCross } from 'react-icons/im'
import React, { useEffect, useState } from 'react'
import './serviceModal.css'
import Input from '@/app/_components/Input'
import Link from 'next/link'
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

const Modal = ({ clickFunctionProp }) => {
    const [representativeId, setRepresentativeId] = useState(null);
    const [loading, setLoading] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [keyword, setKeyword] = useState("");
    const [searchedUserData, setSearchedUserData] = useState([]);
    const [listOfTypeOfServices, setListOfTypeOfServices] = useState([]);
    const currentUser = useSelector((state) => state.user?.currentUser);
    const userAccessToken = currentUser?.accessToken;
    const user_applicant_id = currentUser?.id;
    const url = process.env.NEXT_PUBLIC_BACK_END_API_URL;
    useEffect(() => {
        const fetchTypeOfServicesList = async () => {
            const responseTwo = await axios.get(`${url}/api/v1/type_of_service_list`, { headers: { Authorization: `Bearer ${userAccessToken}` } });
            setListOfTypeOfServices(responseTwo.data.data)
        }
        fetchTypeOfServicesList();
    }, [url, userAccessToken])
    const [data, setData] = useState({
        applicant_id: user_applicant_id,
        representative_id: representativeId,
        transport_service: 1,
        permanent_establishment: "",
        physician: "",
        type_of_service_id: null,
        service_type: undefined,
        from_date: "04-04-2024",
        till_date: "05-04-2024",
        maximum_fee: null,
        emergency_fee: null,
        is_instant_activate: false,
        is_priority_listing: false,
        is_care_free_package_activate: false,
    });

    const [modalVisible, setModalVisible] = useState(true);
    const [hideSection, setHideSection] = useState(true);
    const array = [1, 2, 3];
    const handleHideSection = async (user) => {
        console.log(user);
        console.log(user.id);
        try {
            // Set loading state to true
            setLoading(true);
            if (user && user.id) {
                setSelectedUser(user);
                setRepresentativeId(user.id);
                await setSelectedUser(user);
                console.log(representativeId); // This might still log null due to async nature
                setLoading(false);
                setHideSection(false);
            } else {
                toast.error("id of the user isn't available!");
                // Set loading state back to false if user id is not available
                setLoading(false);
            }
        } catch (error) {
            console.error("Error occurred:", error);
            // Set loading state back to false in case of an error
            setLoading(false);
        }
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    const handlePermanentEstablishment = (event) => {
        const selectedValue = event.target.value;
        setData({ ...data, permanent_establishment: selectedValue });
    };
    const handlePhysician = (event) => {
        const selectedValue = event.target.value;
        setData({ ...data, physician: selectedValue });
    };
    const handleTypeOfServiceId = (event) => {
        const selectedValue = parseInt(event.target.value); // Parse the value as an integer
        setData({ ...data, type_of_service_id: selectedValue });
    };
    const handleServiceType = (event) => {
        const selectedValue = parseInt(event.target.value, 10);
        setData({ ...data, service_type: selectedValue });
    }
    const handleEmergencyFee = (event) => {
        const selectedValue = event.target.value;
        setData({ ...data, emergency_fee: selectedValue });
    }
    const handleFromDate = (newDate) => {
        setData({
            ...data,
            from_date: newDate ? dayjs(newDate).format('DD-MM-YYYY') : '' // Format the date as needed
        });
    };
    const handleTillDate = (newDate) => {
        setData({
            ...data,
            till_date: newDate ? dayjs(newDate).format('DD-MM-YYYY') : '' // Format the date as needed
        });
    };
    // const handleCheckboxes = (e) => {
    //     data.is_instant_activate = e.target.checked ? true : false
    // }
    // Function to handle checkbox changes
    const handleCheckboxes = (e) => {
        const { name, checked } = e.target;

        // Update the data state based on the checkbox name
        setData(prevData => ({
            ...prevData,
            [name]: checked ? true : null,
        }));
    };
    const handleCreateService = async (e) => {
        e.preventDefault();
        const updatedData = {
            ...data,
            representative_id: representativeId // Use the representativeId state here
        };
        console.log(updatedData); // Check the updated data object
        try {
            console.log(representativeId);
            const urlP = `${url}/api/service/v1/create_service`;
            const response = await axios.post(urlP, updatedData, {
                headers: { Authorization: `Bearer ${userAccessToken}` }
            });
            console.log(response);
            if (response.data.message === "Success") {
                clickFunctionProp();
                toast.success("Service created successfully")
            }

        } catch (error) {
            console.error(error);
        }
    }
    const handleSearchKeyword = (event) => {
        const { value } = event.target;
        setKeyword(value);
    }
    const handleSearchUser = async (e) => {
        e.preventDefault();
        try {
            const urlP = `${url}/api/user/v1/user_list?user_role=${currentUser.role}&keyword=${keyword}&page_no=1&page_limit=1`;
            const response = await axios.get(urlP, { headers: { Authorization: `Bearer ${userAccessToken}` } });
            setSearchedUserData(response.data.data.users);
        } catch (error) {
            if (error.message === "Request failed with status code 401") {
                toast.error("UnAuthorized error Login first");
            }
            console.error('Error fetching data:', error);
        }
    }
    return (
        <>
            {modalVisible && (
                <>
                    <div className="modal-container">
                        <div className="modal-contents22" style={{ width: `59%` }}>
                            <span className="close" onClick={clickFunctionProp}>
                                <span>Schließen</span>
                                <ImCross className="cross-icon" />
                            </span>
                            <div className="flex flex-col justify-start mt-16 gap-8">
                                <h2 className='text-[25px] text-[#173968] font-[500]'>Neuen Dienst eintragen</h2>
                                <p className='font-[600]'>Kunden suchen, für den der Dienst eingetragen werden soll</p>
                                <form className="flex mt-6" onSubmit={handleSearchUser}>
                                    <div className="">
                                        <div className="sub-container" style={{ width: "490px" }}>
                                            <div className="entryarea" style={{ height: "51px" }}>
                                                <input
                                                    className='input-item-k'
                                                    type="text"
                                                    name={"keyword"}
                                                    value={keyword}
                                                    onChange={handleSearchKeyword}
                                                    required
                                                    autoComplete="off"
                                                />
                                                <div className="labelline bg-transparent">
                                                    {"Suche in Vorname, Nachname, E-Mail und Kundennummer..."}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="">
                                        <button className="btn-2">Suchen</button>
                                    </div>
                                </form>
                                {hideSection && (
                                    <div className="flex flex-col gap-3">
                                        {searchedUserData && searchedUserData.map((user, i) => {
                                            return (
                                                <div key={i}>
                                                    <div className="flex justify-between items-center mx-7">
                                                        <p>{i + 1}.</p>
                                                        <p className='font-semibold'>{user.customer_number}</p>
                                                        <p className='text-[#33AACA]'>{user.email}</p>
                                                        <div className="flex gap-2">
                                                            <div className="flex justify-center items-center gap-2 border border-black px-3 py-[6px] rounded-md cursor-pointer" onClick={() => handleHideSection(user)}>
                                                                <div className="w-3 h-3">
                                                                    <svg data-v-ec326733="" className="w-full text-[#173968] h-full svg-inline--fa fa-check-square fa-w-14" aria-hidden="true" focusable="false" data-prefix="far" data-icon="check-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M400 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zm0 400H48V80h352v352zm-35.864-241.724L191.547 361.48c-4.705 4.667-12.303 4.637-16.97-.068l-90.781-91.516c-4.667-4.705-4.637-12.303.069-16.971l22.719-22.536c4.705-4.667 12.303-4.637 16.97.069l59.792 60.277 141.352-140.216c4.705-4.667 12.303-4.637 16.97.068l22.536 22.718c4.667 4.706 4.637 12.304-.068 16.971z"></path></svg>
                                                                </div>
                                                                <div className="">
                                                                    <p className='text-[14px]'>{loading ? "Loading..." : "Kunden wählen"}</p>
                                                                </div>
                                                            </div>
                                                            <div className="flex justify-center items-center gap-2 border border-black px-3 py-[6px] rounded-md" >
                                                                <Link href={`/operators/operator_single_userId/representative/${user.id}`}>
                                                                    <div className="w-3 h-3">
                                                                        <svg data-v-ec326733="" className="w-full h-full svg-inline--fa fa-search fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )}
                                {/* /////////////// */}
                                {/* /////////////// */}
                                {!hideSection && selectedUser && (
                                    <div className="">
                                        <form className="" onSubmit={handleCreateService}>
                                            <hr className='mt-7 mb-2' />
                                            <div className="flex gap-3 mb-4">
                                                <p>{selectedUser.customer_number}</p>
                                                <p>-</p>
                                                <p>{`Praxis für Anästhesie - ${selectedUser.first_name} ${selectedUser.last_name}`}</p>
                                            </div>
                                            {/* /////////////////// */}
                                            {/* Every single section */}
                                            <div className="text-[16px] font-[600] text-[#173968]">Dienst bestimmen</div>
                                            <div className="mt-1 mb-4 flex gap-16 justify-start items-center">
                                                <div className="flex justify-start items-center gap-12">
                                                    <div className="z-50 mt-[35px] flex justify-center items-center gap-2">
                                                        <div className="h-[18px] w-[18px]">
                                                            <svg data-v-2d557568="" className="w-full text-[#173968] h-full svg-inline--fa fa-clinic-medical fa-w-18 mdi v-icon notranslate v-theme--light v-icon--size-default pa-1 mr-1 mt-n2 color-marine" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clinic-medical" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M288 115L69.47 307.71c-1.62 1.46-3.69 2.14-5.47 3.35V496a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V311.1c-1.7-1.16-3.72-1.82-5.26-3.2zm96 261a8 8 0 0 1-8 8h-56v56a8 8 0 0 1-8 8h-48a8 8 0 0 1-8-8v-56h-56a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8h56v-56a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8v56h56a8 8 0 0 1 8 8zm186.69-139.72l-255.94-226a39.85 39.85 0 0 0-53.45 0l-256 226a16 16 0 0 0-1.21 22.6L25.5 282.7a16 16 0 0 0 22.6 1.21L277.42 81.63a16 16 0 0 1 21.17 0L527.91 283.9a16 16 0 0 0 22.6-1.21l21.4-23.82a16 16 0 0 0-1.22-22.59z"></path></svg>
                                                        </div>
                                                        <Form.Select
                                                            aria-label="Default select example"
                                                            className='w-96 border-none border-bottom rounded-none'
                                                            value={data.permanent_establishment || ""}
                                                            onChange={handlePermanentEstablishment}
                                                        >
                                                            <option>Betriebsstätte</option>
                                                            <option value="permanent_establishment">permanent_establishment</option>
                                                        </Form.Select>
                                                    </div>
                                                    <div className="z-50 mt-[35px] flex justify-center items-center gap-2">
                                                        <div className="h-[18px] w-[18px]">
                                                            <svg className="w-full text-[#173968] h-full svg-inline--fa fa-user-md fa-w-14 mdi v-icon notranslate v-theme--light v-icon--size-default" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-md" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zM104 424c0 13.3 10.7 24 24 24s24-10.7 24-24-10.7-24-24-24-24 10.7-24 24zm216-135.4v49c36.5 7.4 64 39.8 64 78.4v41.7c0 7.6-5.4 14.2-12.9 15.7l-32.2 6.4c-4.3.9-8.5-1.9-9.4-6.3l-3.1-15.7c-.9-4.3 1.9-8.6 6.3-9.4l19.3-3.9V416c0-62.8-96-65.1-96 1.9v26.7l19.3 3.9c4.3.9 7.1 5.1 6.3 9.4l-3.1 15.7c-.9 4.3-5.1 7.1-9.4 6.3l-31.2-4.2c-7.9-1.1-13.8-7.8-13.8-15.9V416c0-38.6 27.5-70.9 64-78.4v-45.2c-2.2.7-4.4 1.1-6.6 1.9-18 6.3-37.3 9.8-57.4 9.8s-39.4-3.5-57.4-9.8c-7.4-2.6-14.9-4.2-22.6-5.2v81.6c23.1 6.9 40 28.1 40 53.4 0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.3 16.9-46.5 40-53.4v-80.4C48.5 301 0 355.8 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-72-56.8-130.3-128-133.8z"></path></svg>
                                                        </div>
                                                        <Form.Select
                                                            aria-label="Default select example"
                                                            className='w-96 border-none border-bottom rounded-none'
                                                            name='physician'
                                                            value={data.physician || ""}
                                                            onChange={handlePhysician}
                                                        >
                                                            <option>Arzt</option>
                                                            <option value="physician">Physician</option>
                                                        </Form.Select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-1 mb-4 flex gap-16 justify-start items-center">
                                                <div className="flex justify-start items-center gap-12">
                                                    <div className="z-50 mt-[35px] flex justify-center items-center gap-2">
                                                        <div className="h-[18px] w-[18px]">
                                                            <svg className="w-full text-[#173968] h-full svg-inline--fa fa-notes-medical fa-w-12 mdi v-icon notranslate v-theme--light v-icon--size-default" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="notes-medical" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm96 304c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48zm0-192c0 4.4-3.6 8-8 8H104c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h176c4.4 0 8 3.6 8 8v16z"></path></svg>
                                                        </div>
                                                        <Form.Select
                                                            aria-label="Default select example"
                                                            className='w-96 border-none border-bottom rounded-none'
                                                            name='type_of_service_id'
                                                            value={data.type_of_service_id || ""}
                                                            onChange={handleTypeOfServiceId}
                                                        >
                                                            <option>Dienstart</option>
                                                            {listOfTypeOfServices.map((item, i) => {
                                                                return (
                                                                    <option value={item.id || ""} key={item.id}>{item.title}</option>
                                                                )
                                                            })}
                                                        </Form.Select>
                                                    </div>
                                                    <div className="z-50 mt-[35px] flex justify-center items-center gap-2">
                                                        <div className="h-[18px] w-[18px]">
                                                            <svg className="w-full text-[#173968] h-full svg-inline--fa fa-notes-medical fa-w-12 mdi v-icon notranslate v-theme--light v-icon--size-default" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="notes-medical" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm96 304c0 4.4-3.6 8-8 8h-56v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56h-56c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h56v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56h56c4.4 0 8 3.6 8 8v48zm0-192c0 4.4-3.6 8-8 8H104c-4.4 0-8-3.6-8-8v-16c0-4.4 3.6-8 8-8h176c4.4 0 8 3.6 8 8v16z"></path></svg>
                                                        </div>
                                                        <Form.Select
                                                            aria-label="Default select example"
                                                            className='w-96 border-none border-bottom rounded-none'
                                                            name='service_type'
                                                            value={data.service_type || ""}
                                                            onChange={handleServiceType || ""}
                                                        >
                                                            <option>Diensttyp</option>
                                                            <option value="1">Fahrdienst</option>
                                                            <option value="2">Sitzdienst</option>
                                                        </Form.Select>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* //Every single section */}
                                            {/* Every single section */}
                                            <div className="my-10 gap-2">
                                                <div className="text-[16px] font-[600] text-[#173968]">Rahmendaten des Dienstes</div>
                                                <div className="mt-1 mb-4 flex gap-16 justify-start items-center">
                                                    <div className="flex justify-start items-center gap-12">
                                                        <div className="set z-[999999999999]">
                                                            <span className="label-span">von (Datum)</span>
                                                            <LocalizationProvider dateAdapter={AdapterDayjs} className="z-50">
                                                                <DemoContainer components={['DesktopDatePicker']} className="z-50">
                                                                    <DesktopDatePicker
                                                                        className="w-96 z-[9999999]"
                                                                        name='from_date'
                                                                        onChange={(newDate) => handleFromDate(newDate)}
                                                                        defaultValue={dayjs(`${data.from_date}`) || ""}
                                                                        format="DD MM YYYY"
                                                                    />
                                                                </DemoContainer>
                                                            </LocalizationProvider>
                                                        </div>
                                                        <div className="set">
                                                            <span className="label-span">bis (Datum)</span>
                                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                <DemoContainer components={['DesktopDatePicker']}>
                                                                    <DesktopDatePicker
                                                                        className="w-96"
                                                                        name='till_date'
                                                                        onChange={(newDate) => handleTillDate(newDate)}
                                                                        defaultValue={dayjs(`${data.till_date}`) || ""}
                                                                        format="DD MM YYYY"
                                                                    />
                                                                </DemoContainer>
                                                            </LocalizationProvider>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* //Every single section */}
                                            {/* Every single section */}
                                            <div className="text-[16px] font-[600] text-[#173968]">Honorar und Beteiligung</div>
                                            <div className="mt-1 mb-4 flex gap-16 justify-start items-center">
                                                <div className="flex justify-start items-center gap-12">
                                                    <div className="z-50 mt-[35px] flex justify-center items-center">
                                                        <div className="h-[10px w-[10px]">
                                                            <svg className="w-full text-[#A7B4C6] h-full svg-inline--fa fa-map-pin fa-w-9 mdi v-icon notranslate v-theme--light v-icon--size-default" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-pin" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 512" data-fa-i2svg=""><path fill="currentColor" d="M112 316.94v156.69l22.02 33.02c4.75 7.12 15.22 7.12 19.97 0L176 473.63V316.94c-10.39 1.92-21.06 3.06-32 3.06s-21.61-1.14-32-3.06zM144 0C64.47 0 0 64.47 0 144s64.47 144 144 144 144-64.47 144-144S223.53 0 144 0zm0 76c-37.5 0-68 30.5-68 68 0 6.62-5.38 12-12 12s-12-5.38-12-12c0-50.73 41.28-92 92-92 6.62 0 12 5.38 12 12s-5.38 12-12 12z"></path></svg>
                                                        </div>
                                                        <Form.Select
                                                            aria-label="Default select example"
                                                            className='w-96 border-none border-bottom rounded-none'
                                                            name='emergency_fee'
                                                            value={data.emergency_fee || ""}
                                                            onChange={handleEmergencyFee}
                                                        >
                                                            <option>Maximales Honorar</option>
                                                            <option value="5">5€</option>
                                                            <option value="10">10€</option>
                                                            <option value="15">15€</option>
                                                            <option value="0">0€</option>
                                                        </Form.Select>
                                                    </div>
                                                    <div className="set-input" style={{ width: "390px" }}>
                                                        <Input name="maximum_fee" label={'Maximales Honorar'} value={data.maximum_fee || ""} onChange={handleInputChange} />
                                                    </div>
                                                </div>
                                            </div>
                                            {/* //Every single section */}
                                            {/* Every single section */}
                                            <div className="text-[16px] font-[600] text-[#173968]">Zusatzoptionen</div>
                                            <div className="my-8 flex gap-16 justify-start items-center">
                                                <div className="flex justify-start items-center gap-4">
                                                    <div className="flex justify-center items-center">
                                                        <input type="checkbox" name="is_instant_activate" className='w-4 h-4' onChange={handleCheckboxes} />
                                                    </div>
                                                    <div className="flex justify-center items-center">
                                                        <span className=' text-[#173968]'>Sofortzusage aktivieren</span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-start items-center gap-4">
                                                    <div className="flex justify-center items-center">
                                                        <input type="checkbox" className='w-4 h-4' name="is_priority_listing" onChange={handleCheckboxes} />
                                                    </div>
                                                    <div className="flex justify-center items-center">
                                                        <span className=' text-[#173968]'>Sofortzusage aktivieren</span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-start items-center gap-4">
                                                    <div className="flex justify-center items-center">
                                                        <input type="checkbox" className='w-4 h-4' name="is_care_free_package_activate" onChange={handleCheckboxes} />
                                                    </div>
                                                    <div className="flex justify-center items-center">
                                                        <span className=' text-[#173968]'>Sofortzusage aktivieren</span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* //Every single section */}
                                            {/* //Input and Date Fields */}
                                            <div className="flex justify-end mr-8">
                                                <button className="py-[10px] px-[32px] rounded-md text-white bg-[#ED6D05] text-[16px] font-[500]">Speichern</button>
                                            </div>
                                        </form>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
export default Modal;