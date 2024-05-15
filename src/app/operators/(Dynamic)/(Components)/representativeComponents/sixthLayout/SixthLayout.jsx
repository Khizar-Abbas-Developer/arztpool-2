import React, { useEffect, useState } from 'react';
import "./SixthLayout.css";
import { FaPlus } from 'react-icons/fa';
import Form from 'react-bootstrap/Form';
import { ClipLoader } from 'react-spinners';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import DynamicTable from '../DynamicTable/DynamicTable';
import { useSelector } from 'react-redux';
import axios from 'axios';
import toast from 'react-hot-toast';
const SixthLayout = ({ userId, specilization_name, status, url }) => {
    const apiUrl = process.env.NEXT_PUBLIC_BACK_END_API_URL;
    const currentUser = useSelector((state) => state.user?.currentUser);
    // console.log(currentUser);
    const userAccessToken = currentUser?.accessToken;
    // console.log(userId);
    const URL = process.env.NEXT_PUBLIC_BACK_END_API_URL;
    const updateUserDetailsAPI = `${URL}/api/user/v1/update_specialized_doc/${userId}`;
    const [files, setFiles] = useState([]);
    const [data, setData] = useState({
        doc_type: "2"
    })
    const [loading, setLoading] = useState(false);
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
    const handleDownload = (e) => {
        e.preventDefault();
        if (url) {
            // Create an anchor element
            const anchor = document.createElement('a');
            // Set the href attribute to the file URL
            anchor.href = url;
            // Set the download attribute to force download
            anchor.download = url.split('/').pop();
            // Simulate a click event to initiate the download
            anchor.click();
        } else {
            // Handle case where URL is not available
            console.error("URL not available for download.");
        }
    };
    return (
        <>
            <form className="user-table-containerst-22" onSubmit={handleSubmit}>
                <div className="mx-4 my-4 flex flex-col gap-3">
                    <div className="font-[600]">Fachrichtung</div>
                    <div className="">{specilization_name}</div>
                    <div className="">{`${status === 0 ? "Fachrichtung noch nicht bestätigt" : "Fachrichtung bereits verifiziert"}`}</div>
                    <hr className='my-2' />
                    <div className="">Der/die Vertreter*in hat uns bestätigt, dass er/sie sich mind. im 3. Jahr seiner/ihrer Weiterbildung befinden.</div>
                    <hr className='my-2' />
                </div>
                <div className="flex w-full px-4 gap-2">
                    <div className="w-1/2 pb-6 pt-3 flex flex-col gap-2">
                        <p>Approbation bereits hochgeladen</p>
                        <div className="border border-black w-[103px] rounded-[4px]" onClick={handleDownload}>
                            <button className='px-3 py-2 text-[13px]'>DOWNLOAD</button>
                        </div>
                    </div>
                    <div className="w-1/2 pb-6 pt-3">
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
                                                    id="specialist_certificate"
                                                    className="input-item-k text-black"
                                                    type="file"
                                                    name="specialist_certificate"
                                                    accept=".pdf"
                                                    required
                                                    onChange={(e) => handleFileChange(e, 'specialist_certificate')}
                                                />
                                                <div className="labelline">
                                                    {"Facharzturkunde"}
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end mr-8 mt-10">
                    <button className="py-[10px] px-[32px] rounded-md text-white bg-[#ED6D05] text-[16px] font-[500]">Speichern</button>
                </div>
                <hr className='mt-2' />
                <div className="flex w-full px-4 gap-2">
                    <div className="w-1/2 flex flex-col gap-2 my-3">
                        <p className='font-[600] mb-5'>Vertreter verifizieren</p>
                        <div className="">
                            <p>Mit der Verifikation dieses Vertreters, kann dieser von Kunden aus der Bewerberliste ausgewählt werden. Bitte nur verifzieren, wenn vorher eine eingängige Prüfung der Approbation und der Facharzturkunde stattgefunden hat.</p>
                        </div>
                    </div>
                    <div className="w-1/2 my-3">
                        <div className="">{`${status === 0 ? "Fachrichtung noch nicht bestätigt" : "Fachrichtung bereits verifiziert"}`}</div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default SixthLayout;