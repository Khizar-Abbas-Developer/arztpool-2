import React, { useState } from 'react';
import "./FifthLayout.css";
import { FaPlus } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';
import { ClipLoader } from 'react-spinners';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import DynamicTable from '../DynamicTable/DynamicTable';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import axios from 'axios';

const SeventhLayout = ({ userId, company_name, policy_number, start_date, expiry_date, file_file_url }) => {
    const currentUser = useSelector((state) => state.user?.currentUser);
    // console.log(currentUser);
    const userAccessToken = currentUser?.accessToken;
    // console.log(userId);
    const URL = process.env.NEXT_PUBLIC_BACK_END_API_URL;
    const updateUserDetailsAPI = `${URL}/api/user/v1/update_insurance/${userId}`;
    const [files, setFiles] = useState([]);
    const [listOfFederalStates, setListOfFederalStates] = useState([]);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        company_name: company_name || "",
        policy_number: policy_number || "",
        start_date: start_date || "2024-04-04",
        expiry_date: expiry_date || "2024-04-04",
    })
    const [selected, setSelected] = useState(null);
    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    const apifile_url = process.env.NEXT_PUBLIC_BACK_END_API_file_url;
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setData({ ...data, federal_state: selectedValue });
    };
    const handleEndDate = (newDate, inputName) => {
        const formattedDate = newDate ? dayjs(newDate).format('YYYY-MM-DD') : ''; // Format the date as needed
        setData({
            ...data,
            inputName: formattedDate
        });
    };
    const handleDownload = (e) => {
        e.preventDefault();
        if (file_file_url) {
            // Create an anchor element
            const anchor = document.createElement('a');
            // Set the href attribute to the file file_url
            anchor.href = file_url;
            // Set the download attribute to force download
            anchor.download = file_url.split('/').pop();
            // Simulate a click event to initiate the download
            anchor.click();
        } else {
            // Handle case where file_url is not available
            toast.error("there is no file to download!");
            // console.error("file_url not available for download.");
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Remove specified key-value pairs
        const config = {
            headers: {
                Authorization: `Bearer ${userAccessToken}`,
                'Content-Type': 'multipart/form-data', // Set content type as multipart/form-data
            },
        };
        try {
            const formData = new FormData();
            for (const key in data) {
                formData.append(key, data[key]);
            }
            // Append files to FormData
            files.forEach((file, index) => {
                formData.append('file', file.file); // Append the file itself
            });
            const responseTwo = await axios.patch(updateUserDetailsAPI, formData, config);
            console.log(responseTwo);
            if (responseTwo.data.success === true) {
                toast.success("Updated successfully");
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
    const handleFileChange = (e, fileName) => {
        // Convert the FileList object to an array
        const selectedFiles = Array.from(e.target.files); // Get all selected files

        // Iterate over each selected file
        selectedFiles.forEach(selectedFile => {
            // Check if a file with the same name already exists in the files array
            const existingFileIndex = files.findIndex(file => file.name === selectedFile.name);

            if (existingFileIndex !== -1) {
                // If a file with the same name exists, append a unique identifier to the new file's name
                const newFileName = `${fileName}_${Date.now()}_${selectedFile.name}`;

                // Create a new File object with the modified name and the selected file's content
                const newFile = new File([selectedFile], newFileName, { type: selectedFile.type });

                // Add the new file to the array with the modified name
                setFiles(prevFiles => [
                    ...prevFiles,
                    { file: newFile, name: newFileName }
                ]);

            } else {
                // If no file with the same name exists, add the new file to the array
                setFiles(prevFiles => [
                    ...prevFiles,
                    { file: selectedFile, name: selectedFile.name }
                ]);
            }
        });
    };
    return (
        <>
            <div className="user-table-containerst-2">
                <div className="text-business-heading">Versicherungen</div>
                <main className="user-table-containerst" >
                    <div className="accordion-kk">
                        <div className="accordions">
                            <div className="item" key={0} >
                                <div className="title" onClick={() => toggle(0)}>
                                    <div className="flex justify-between w-full">
                                        <h2 className='question-heading'>Migrated insurance - please add name ( Migrated insurance - please add insurance number )</h2>
                                        <div className="w-5 h-5">
                                            <svg data-v-c63edf92="" className="w-full text-red-700 h-full svg-inline--fa fa-exclamation-circle fa-w-16 mdi v-icon notranslate v-theme--light v-icon--size-default text-error" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="exclamation-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"></path></svg>
                                        </div>
                                    </div>
                                    {/* <span>{selected == i ? <FaPlus /> : <FaPlus />}</span> */}
                                </div>
                                <hr className='horizontal-line' />
                                <div className={selected == 0 ? "content show" : "content"}>
                                    <form className="">
                                        <div className="mt-10">ID: e928f4d3-bd24-4d9d-bec4-41cd1fa6057c</div>
                                        <div className="row justify-content-between mt-6">
                                            <div className="col-lg-6 col-md-6 col-sm-12 mt-6">
                                                <div className="sub-container" style={{ width: "600px" }}>
                                                    <div className="entryarea">
                                                        <input
                                                            className='input-item-k'
                                                            type={"text"}
                                                            name={"company_name"}
                                                            value={data.company_name}
                                                            onChange={handleInputChange}
                                                            required
                                                            autoComplete="off"
                                                        />
                                                        <div className="labelline bg-transparent">
                                                            {"Name der Versicherung"}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-12 mt-6">
                                                <div className="sub-container" style={{ width: "600px" }}>
                                                    <div className="entryarea">
                                                        <input
                                                            className='input-item-k'
                                                            type="text"
                                                            name={"policy_number"}
                                                            value={data.policy_number}
                                                            onChange={handleInputChange}
                                                            required
                                                            autoComplete="off"
                                                        />
                                                        <div className="labelline bg-transparent">
                                                            {"Nummer der Police"}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* 2nd Container of input fields */}
                                            <div className="flex justify-start items-center my-8 gap-4">
                                                <div className="col-lg-4 col-md-6 col-sm-12 mt-6">
                                                    <div className="set">
                                                        <span className='label-span'>Gültig von</span>
                                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                            <DemoContainer components={['DesktopDatePicker']}>
                                                                <DesktopDatePicker
                                                                    className="datep22"
                                                                    name='start_date'
                                                                    onChange={(newDate) => handleEndDate(newDate, "start_date")}
                                                                    defaultValue={dayjs(`${data.start_date}`)}
                                                                    format="DD MM YYYY"
                                                                />
                                                            </DemoContainer>
                                                        </LocalizationProvider>
                                                    </div>
                                                </div>
                                                {/* ///////////// */}
                                                <div className="flex col-lg-4 col-md-6 col-sm-12 mt-6">
                                                    <div className="set">
                                                        <span className='label-span'>Gültig bis</span>
                                                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                            <DemoContainer components={['DesktopDatePicker']}>
                                                                <DesktopDatePicker
                                                                    className="datep26"
                                                                    name='expiry_date'
                                                                    onChange={(newDate) => handleEndDate(newDate, "expiry_date")}
                                                                    defaultValue={dayjs(`${data.expiry_date}`)}
                                                                    format="DD MM YYYY"
                                                                />
                                                            </DemoContainer>
                                                        </LocalizationProvider>
                                                    </div>
                                                    {/* /////// */}
                                                </div>
                                                <div className="flex col-lg-4 col-md-6 col-sm-12 mt-10
                                                ">
                                                    <div className="flex flex-col justify-start items-center">
                                                        <div className="">Police herunterladen</div>
                                                        <div className="border border-black rounded-sm" onClick={handleDownload}>
                                                            <button className='px-3 py-1 text-[12px]'>DOWNLOAD</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* /// */}
                                        {/* /// */}
                                        {/* //////////// */}
                                        {/* //////////// */}
                                        <div className="flex justify-end mr-8 my-4">
                                            <button className="py-[10px] px-[32px] rounded-md text-white bg-[#ED6D05] text-[16px] font-[500]">Speichern</button>
                                        </div>
                                    </form>
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                    {/* //////////////////////////////// */}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <div className="flex justify-start items-center ml-4">
                    <div className="">
                        <>
                            {loading ?
                                (
                                    <>
                                        <ClipLoader color="#36d7b7" />
                                    </>
                                ) : (
                                    <>
                                        <div className="">
                                            <form className="" onSubmit={handleSubmit}>
                                                <div className="my-3">
                                                    <p className='text-[18px] font-[600]'>Neue Versicherung eintragen</p>
                                                </div>
                                                {/* // */}
                                                <div className="row justify-content-between mt-6">
                                                    <div className="col-lg-6 col-md-6 col-sm-12 mt-6">
                                                        <div className="sub-container" style={{ width: "600px" }}>
                                                            <div className="entryarea">
                                                                <input
                                                                    className='input-item-k'
                                                                    type={"text"}
                                                                    name={"company_name"}
                                                                    value={data.company_name}
                                                                    onChange={handleInputChange}
                                                                    required
                                                                    autoComplete="off"
                                                                />
                                                                <div className="labelline bg-transparent">
                                                                    {"Name der Versicherung"}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-6 col-sm-12 mt-6">
                                                        <div className="sub-container" style={{ width: "600px" }}>
                                                            <div className="entryarea">
                                                                <input
                                                                    className='input-item-k'
                                                                    type="text"
                                                                    name={"policy_number"}
                                                                    value={data.policy_number}
                                                                    onChange={handleInputChange}
                                                                    required
                                                                    autoComplete="off"
                                                                />
                                                                <div className="labelline bg-transparent">
                                                                    {"Nummer der Police"}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* 2nd Container of input fields */}
                                                    <div className="flex justify-start items-center my-8">
                                                        <div className="col-lg-6 col-md-6 col-sm-12 mt-6">
                                                            <div className="set">
                                                                <span className='label-span'>Gültig von</span>
                                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                    <DemoContainer components={['DesktopDatePicker']}>
                                                                        <DesktopDatePicker
                                                                            className="datep26 z-50"
                                                                            name='start_date'
                                                                            onChange={(newDate) => handleEndDate(newDate, "start_date")}
                                                                            defaultValue={dayjs(`${data.start_date}`)}
                                                                            format="DD MM YYYY"
                                                                        />
                                                                    </DemoContainer>
                                                                </LocalizationProvider>
                                                            </div>
                                                        </div>
                                                        {/* ///////////// */}
                                                        <div className="col-lg-6 col-md-6 col-sm-12 mt-6">
                                                            <div className="set">
                                                                <span className='label-span'>Gültig bis</span>
                                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                                    <DemoContainer components={['DesktopDatePicker']}>
                                                                        <DesktopDatePicker
                                                                            className="datep26"
                                                                            name='expiry_date'
                                                                            onChange={(newDate) => handleEndDate(newDate, "expiry_date")}
                                                                            defaultValue={dayjs(`${data.expiry_date}`)}
                                                                            format="DD MM YYYY"
                                                                        />
                                                                    </DemoContainer>
                                                                </LocalizationProvider>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* 3rd Container of input fields */}
                                                    <div className="">
                                                        {/* //File Input field */}
                                                        <div>                                                            {/* //Upload Document Field */}
                                                            <div className="flex gap-3 justify-start items-center my-2">
                                                                <div className="mb-3">
                                                                    <div className="h-10 w-10">
                                                                        <svg className="h-full w-full text-[#173968] svg-inline--fa fa-file-pdf fa-w-12 mdi v-icon notranslate v-theme--light v-icon--size-default v-icon--clickable" role="button" aria-hidden="true" aria-label="Haftpflichtversicherungsurkunde vorangestellte Aktion" focusable="false" data-prefix="fal" data-icon="file-pdf" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M369.9 97.9L286 14C277 5 264.8-.1 252.1-.1H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V131.9c0-12.7-5.1-25-14.1-34zm-22.6 22.7c2.1 2.1 3.5 4.6 4.2 7.4H256V32.5c2.8.7 5.3 2.1 7.4 4.2l83.9 83.9zM336 480H48c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16h176v104c0 13.3 10.7 24 24 24h104v304c0 8.8-7.2 16-16 16zm-22-171.2c-13.5-13.3-55-9.2-73.7-6.7-21.2-12.8-35.2-30.4-45.1-56.6 4.3-18 12-47.2 6.4-64.9-4.4-28.1-39.7-24.7-44.6-6.8-5 18.3-.3 44.4 8.4 77.8-11.9 28.4-29.7 66.9-42.1 88.6-20.8 10.7-54.1 29.3-58.8 52.4-3.5 16.8 22.9 39.4 53.1 6.4 9.1-9.9 19.3-24.8 31.3-45.5 26.7-8.8 56.1-19.8 82-24 21.9 12 47.6 19.9 64.6 19.9 27.7.1 28.9-30.2 18.5-40.6zm-229.2 89c5.9-15.9 28.6-34.4 35.5-40.8-22.1 35.3-35.5 41.5-35.5 40.8zM180 175.5c8.7 0 7.8 37.5 2.1 47.6-5.2-16.3-5-47.6-2.1-47.6zm-28.4 159.3c11.3-19.8 21-43.2 28.8-63.7 9.7 17.7 22.1 31.7 35.1 41.5-24.3 4.7-45.4 15.1-63.9 22.2zm153.4-5.9s-5.8 7-43.5-9.1c41-3 47.7 6.4 43.5 9.1z"></path></svg>
                                                                    </div>
                                                                </div>
                                                                {/* //Input Fields */}
                                                                <div className="flex mb-4 justify-center items-center">
                                                                    <div className="sub-containers">
                                                                        <div className="entryarea" style={{ width: "500px" }}>
                                                                            <label htmlFor="medical_license" className="custom-file-upload">
                                                                                <input
                                                                                    id="medical_license"
                                                                                    className="input-item-k text-black"
                                                                                    type="file"
                                                                                    name="medical_license"
                                                                                    accept=".pdf"
                                                                                    required
                                                                                    onChange={(e) => handleFileChange(e, 'medical_license')}
                                                                                />
                                                                                <div className="labelline">
                                                                                    {"Haftpflichtversicherungsurkunde"}
                                                                                </div>
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* // */}
                                                <div className="flex justify-end mr-8 mt-10">
                                                    <button className="py-[10px] px-[32px] rounded-md text-white bg-[#ED6D05] text-[16px] font-[500]">Speichern</button>
                                                </div>
                                            </form>
                                        </div>
                                    </>
                                )}
                        </>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SeventhLayout;