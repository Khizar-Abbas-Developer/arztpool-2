"use client"
import React from 'react';
import "./secondLayout.css";
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import toast from 'react-hot-toast';

const SecondLayout = ({ userId, memos }) => {
    const currentUser = useSelector((state) => state.user?.currentUser);
    // console.log(currentUser);
    const userAccessToken = currentUser?.accessToken;
    const URL = process.env.NEXT_PUBLIC_BACK_END_API_URL;
    const updateUserDetailsAPI = `${URL}/api/user/v1/update_user_info/${userId}`;
    const [listOfFederalStates, setListOfFederalStates] = useState([]);
    const [data, setData] = useState({
        memos: memos || ""
    })
    const [selected, setSelected] = useState(null);
    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }
        setSelected(i)
    }
    const apiUrl = process.env.NEXT_PUBLIC_BACK_END_API_URL;
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleUpdateMemos = async (e) => {
        e.preventDefault();
        // Remove specified key-value pairs
        const config = {
            headers: {
                Authorization: `Bearer ${userAccessToken}`,
                'Content-Type': 'application/json', // Specify content type as JSON
            },
        };
        try {
            const responseTwo = await axios.patch(updateUserDetailsAPI, data, config);
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
    return (
        <>
            <form className="users-container-servicest-main" onSubmit={handleUpdateMemos}>
                <div className="heading-container">Memo (internal)</div>
                <main className="users-container-servicest">
                    <div className="sub-containerst-1">
                        <div className="entryarea-1">
                            <textarea
                                className='input-item-kl pt-2'
                                type="text"
                                name={"memos"}
                                required
                                value={data.memos}
                                onChange={handleInputChange}
                                autoComplete="off"
                            />
                            <div className="labelline">
                                {"Memo - this is an internal field and is not displayed to the user"}
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
