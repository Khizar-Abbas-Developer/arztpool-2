"use client"
import React, { useState } from 'react';
import "./SecondLayout.css";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

const SecondLayout = ({ serviceId, comments, memos }) => {
    const [data, setData] = useState({
        comments: comments || "",
    })
    const [data2, setData2] = useState({
        memos: memos || ""
    })
    const currentUser = useSelector((state) => state.user?.currentUser);
    const userAccessToken = currentUser?.accessToken;
    const URL = process.env.NEXT_PUBLIC_BACK_END_API_URL;
    const updateService = `${URL}/api/service/v1/update_service/${serviceId}`;


    const handleUpdateComment = async (e) => {
        e.preventDefault();
        console.log(data);
        const config = {
            headers: {
                Authorization: `Bearer ${userAccessToken}`,
                'Content-Type': 'application/json', // Specify content type as JSON
            },
        };
        try {
            const response = await axios.patch(updateService, data, config);
            console.log(response);
            if (response.data.message === "Success") {
                toast.success("Services Info updated successfully")
            }
        } catch (error) {
            console.log(error);
        }
    }
    const handleUpdateMemo = async (e) => {
        e.preventDefault();
        console.log(data2);
        const config = {
            headers: {
                Authorization: `Bearer ${userAccessToken}`,
                'Content-Type': 'application/json', // Specify content type as JSON
            },
        };
        try {
            const response = await axios.patch(updateService, data2, config);
            console.log(response);
            if (response.data.message === "Success") {
                toast.success("Services Info updated successfully")
            }
        } catch (error) {
            console.log(error);
        }
    }
    const handleInputFields = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData(prevState => ({
            ...prevState,
            [name]: value
        }));

    }
    const handleMemoField = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setData2(prevState => ({
            ...prevState,
            [name]: value
        }));

    }
    return (
        <>
            <form className="users-container-servicest-main" onSubmit={handleUpdateComment}>
                <div className="heading-container">Kommentar (öffentlich)</div>
                <main className="users-container-servicest">
                    <div className="sub-containerst-1">
                        <div className="entryarea-1">
                            <textarea
                                className='input-item-kl'
                                type="text"
                                name={"comments"}
                                value={data.comments}
                                required
                                autoComplete="off"
                                onChange={handleInputFields}
                            />
                            <div className="labelline">
                                {"Kommentar (öffentlich)"}
                            </div>
                        </div>
                    </div>
                </main>
                {/* // */}
                <div className="flex justify-end mr-8 my-6">
                    <button className="py-[10px] px-[32px] rounded-md text-white bg-[#ED6D05] text-[16px] font-[500]">Speichern</button>
                </div>
            </form>
            {/* /// */}
            {/* /// */}
            {/* /// */}
            {/* /// */}
            <form className="users-container-servicest-main" onSubmit={handleUpdateMemo}>
                <div className="heading-container">Memo (intern)</div>
                <main className="users-container-servicest">
                    <div className="sub-containerst-1">
                        <div className="entryarea-1">
                            <textarea
                                className='input-item-kl'
                                type="text"
                                value={data2.memos}
                                name={"memos"}
                                required
                                onChange={handleMemoField}
                                autoComplete="off"
                            />
                            <div className="labelline">
                                {"Kommentar (öffentlich)"}
                            </div>
                        </div>
                    </div>
                </main>
                {/* // */}
                <div className="flex justify-end mr-8 my-6">
                    <button className="py-[10px] px-[32px] rounded-md text-white bg-[#ED6D05] text-[16px] font-[500]">Speichern</button>
                </div>
            </form>
        </>
    )
}

export default SecondLayout;
