import React, { useEffect, useState } from 'react';
import "./FifthLayout.css";
import { FaSearch } from "react-icons/fa";
import Input from '../../(Components)/Input/Input';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Link from 'next/link';

const FifthLayout = ({ userInfo }) => {
    const [listOfAddedUsers, setListOfAddedUsers] = useState([]);
    useEffect(() => {
        const addUserInfo = (userInfo) => {
            setListOfAddedUsers(prevList => {
                const id = prevList.length + 1;
                const userInfoWithId = { ...userInfo, id };
                return [...prevList, userInfoWithId];
            });
        };

        if (userInfo) {
            addUserInfo(userInfo);
        }
    }, [userInfo]);
    const [fetchedUsers, setFetchedUsers] = useState([]);
    const [isData, setIsData] = useState(false);
    const url = process.env.NEXT_PUBLIC_BACK_END_API_URL;
    const currentUser = useSelector((state) => state.user?.currentUser);
    const userAccessToken = currentUser.accessToken;
    const [data, setData] = useState({
        keyword: "",
        role: "1",
    })

    const handleSearchData = async (e) => {
        e.preventDefault();
        try {
            const urlP = `${url}/api/user/v1/user_list?user_role=${data.role}&keyword=${data.keyword}&page_no=1&page_limit=1`;
            const response = await axios.get(urlP, { headers: { Authorization: `Bearer ${userAccessToken}` } });
            setFetchedUsers(response.data.data.users);
            setFetchedUsers(response.data.data.users);
            setIsData(true);
        } catch (error) {
            if (error.message === "Request failed with status code 401") {
                toast.error("UnAuthorized error Login first");
            }
            console.error('Error fetching data:', error);
        }
    }
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleAddUser = (id) => {
        // Find the user object from fetchedUsers based on id
        const userToAdd = fetchedUsers.find(user => user.id === id);

        // Check if the userToAdd is not null
        setListOfAddedUsers(prevList => [...prevList, userToAdd]);
    };
    return (
        <>
            <main className="users-container-servicest-main">
                <div className="heading-container">Kunde</div>
                <hr className='my-4' />

                <div className="">
                    <div className="">
                        <p>Nach Bewerbern suchen, um sie hinzuzufügen.</p>
                    </div>
                    <form className="flex flex-col" onSubmit={handleSearchData}>
                        <div className="row justify-content-between my-4">
                            <div className="col-lg-6 col-md-6 col-sm-12 mt-6">
                                <div className="sub-container">
                                    <div className="entryarea">
                                        <input
                                            className='input-item-k'
                                            type={"text"}
                                            required
                                            autoComplete="off"
                                            name={"keyword"}
                                            value={data.keyword}
                                            onChange={handleInputChange}
                                        />
                                        <div className="labelline bg-transparent">
                                            Suche in Vorname, Nachname, E-Mail und Kundennummer...
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* // */}
                        <div className="flex justify-center ml-28 -mt-8">
                            <button className="py-[10px] px-[26px] rounded-md text-white bg-[#ED6D05] text-[16px] font-[500]">Speichern</button>
                        </div>
                    </form>
                </div>
                <div className="mt-4">
                    <div className="flex justify-between items-center my-2 flex-col mb-6">
                        {fetchedUsers && fetchedUsers.map((user, i) => (
                            <div className="flex gap-16 justify-start items-center" key={i}>
                                <div className="flex gap-[120px] justify-center items-center text-[16px] ml-4" key={i}>
                                    <p>{user.id}</p>
                                    <p>{`${user.first_name} ${" "} ${user.last_name}`}</p>
                                    <p className='ml-2'>{user.customer_number}</p>
                                    <p className='ml-2'>{user.email}</p>
                                    <p>65€/Std.</p>
                                </div>
                                <div className="flex justify-end gap-4 mt-6 mb-3 mx-4 items-center">
                                    <div className="flex justify-end items-center" onClick={() => handleAddUser(user.id)}>
                                        <div className="flex justify-center items-center border h-8 w-14 py-2 cursor-pointer rounded-md border-black">
                                            <svg data-v-d77c810e="" className="w-full h-full text-black svg-inline--fa fa-check fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                                        </div>
                                    </div>
                                    <div className="flex justify-end items-center" onClick={() => handleDeleteUser(user.id)}>
                                        <div className="flex justify-center items-center border h-8 w-14 py-2 cursor-pointer rounded-md border-black">
                                            <svg data-v-d77c810e="" className="w-full h-full text-black svg-inline--fa fa-times fa-w-11" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" data-fa-i2svg=""><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
                                        </div>
                                    </div>
                                    <div className="flex justify-end items-center">
                                        <div className="flex justify-center items-center border h-8 w-14 py-2 cursor-pointer rounded-md border-black">
                                            <svg data-v-d77c810e="" className="w-full h-full text-black svg-inline--fa fa-search fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <hr />

                    <div className="flex justify-between items-center my-2 flex-col">
                        {listOfAddedUsers.map((user, i) => (
                            <div className="flex gap-24 justify-center items-center" key={i}>
                                <div className="flex gap-[170px] justify-center items-center text-[16px] ml-5" key={i}>
                                    <p>{i + 1}</p>
                                    <p>{`${user.title ? user.title : ""} ${user.first_name} ${" "} ${user.last_name}`}</p>
                                    <p>{user.customer_number}</p>
                                    <p>{user.email}</p>
                                    <p>65€/Std.</p>
                                </div>
                                <div className="flex justify-end gap-4 mt-6 mb-3 mx-4 items-center">
                                    <div className="flex justify-end items-center">
                                        <div className="flex justify-center items-center border h-8 w-14 py-2 cursor-pointer rounded-md border-black">
                                            <svg data-v-d77c810e="" className="w-full h-full text-black svg-inline--fa fa-check fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
                                        </div>
                                    </div>
                                    <div className="flex justify-end items-center" onClick={() => handleDeleteUser(user.id)}>
                                        <div className="flex justify-center items-center border h-8 w-14 py-2 cursor-pointer rounded-md border-black">
                                            <svg data-v-d77c810e="" className="w-full h-full text-black svg-inline--fa fa-times fa-w-11" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" data-fa-i2svg=""><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
                                        </div>
                                    </div>
                                    <Link href={`/operators/operator_single_userId/${user.user_role === 2 ? "customer" : "representative"}/${user.id}`}>
                                        <div className="flex justify-end items-center">
                                            <div className="flex justify-center items-center border h-8 w-14 py-2 cursor-pointer rounded-md border-black">
                                                <svg data-v-d77c810e="" className="w-full h-full text-black svg-inline--fa fa-search fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}

export default FifthLayout;