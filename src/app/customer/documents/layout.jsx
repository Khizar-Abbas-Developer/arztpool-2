"use client"
import React, { useEffect, useState } from 'react';
import "./globalMessages.css";
import ExtraHeader from './(messagesComponents)/extraHeader copy/extraHeader';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname
//select imports
import Button from '@mui/joy/Button'
import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'
import Stack from '@mui/joy/Stack'
import { BsArrowRight } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import Section1 from "./(documentsComponents)/Section1/Section1";
import { HiSearch } from 'react-icons/hi';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import SampleData from '@/app/operators/(components)/userDummyData';

const Page = ({ children }) => {
    const [userData, setUserData] = useState({});
    const [data, setData] = useState({
        keyword: "",
        role: "1",
    })
    const [fetchedUsers, setFetchedUsers] = useState([]);
    const [isData, setIsData] = useState(false);
    const url = process.env.NEXT_PUBLIC_BACK_END_API_URL;
    const currentUser = useSelector((state) => state.user?.currentUser)
    useEffect(() => {
        if (currentUser) {
            setUserData(currentUser);
        }
    }, [currentUser]);
    // console.log(currentUser);
    const userAccessToken = currentUser.accessToken;
    const [currentPage, setCurrentPage] = useState(1)
    const [recordPerPage, setRecordPerPage] = useState(25)
    const lastIndex = currentPage * recordPerPage
    const firstIndex = lastIndex - recordPerPage
    const records = SampleData.slice(firstIndex, lastIndex)
    const npage = Math.ceil(fetchedUsers.length / recordPerPage)
    const numbers = [...Array(npage + 1).keys()].slice(1)
    // const numbers = Array.from({ length: npage }, (_, index) => index + 1); // Generating array of numbers dynamically
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleSearchData = async (e) => {
        e.preventDefault();
        try {
            console.log(data);
            const urlP = `${url}/api/user/v1/user_list?user_role=${data.role}&keyword=${data.keyword}&page_no=${currentPage}&page_limit=${recordPerPage}`;
            const response = await axios.get(urlP, { headers: { Authorization: `Bearer ${userAccessToken}` } });
            console.log(response);
            setFetchedUsers(response.data.data.users);
            setFetchedUsers(response.data.data.users);
            setIsData(true);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setData({ ...data, role: selectedValue });
    };
    /////////
    /////////
    /////////
    const [firstActive, setFirstActive] = useState(true);
    const [secondActive, setSecondActive] = useState(false);
    const [firstSectionState, setFirstSectionState] = useState('block')
    const [secondSectionState, setSecondSectionState] = useState("none")
    const pathname = usePathname(); // Get current pathname
    const navLinks = [
        { name: "", href: "/representative/services/overview" },
        { name: "", href: "/representative/services/marketplace" },
    ];
    const handleActiveLink1 = () => {
        setFirstActive(true);
        setSecondActive(false);
        setFirstSectionState("block");
        setSecondSectionState("none");
    }
    const handleActiveLink2 = () => {
        setSecondActive(true);
        setFirstActive(false);
        setFirstSectionState("none")
        setSecondSectionState("block")
    }
    const sectionOneTempArray = [1, 2, 3, 4, 5]
    return (
        <>
            <Section1 />
            <div className='h-auto w-screen flex'>
                {/* Left section */}
                <div className="bg-white w-full pr-6">
                    <div className="w-full flex flex-col justify-start items-start pt-[138px] pl-[106px] gap-4">
                        <Link href={"/representative/documents"}>
                            <div onClick={handleActiveLink1} className={`w-full cursor-pointer ${firstActive ? "font-bold text-[rgb(23,85,153)]" : "text-black"} w-full mb-2 flex border-transparent border-b-2 hover:border-orange-500 hover:border-b-2`}>Verträge</div>
                        </Link>
                        <Link href={"/representative/documents"}>
                            <div onClick={handleActiveLink2} className={`w-full cursor-pointer ${secondActive ? "font-bold text-[rgb(23,85,153)]" : "text-black"} w-full mb-2 flex border-transparent border-b-2 hover:border-orange-500 hover:border-b-2`}>Rechnungsvorlage</div>
                        </Link>
                    </div>
                </div>
                {/* Right section */}
                <div className="h-auto bg-white shadow-2xl">
                    {/* //FirstSection */}
                    <div className={`SecondActiveLinkSection`} style={{ display: firstSectionState }}>
                        <div className="pt-20 pb-12 pl-16 pr-28">
                            <div className="text-3xl mb-8 font-[500] text-[#20416E]">Ihre Dienstvertretungsverträge</div>
                            <div className="text-[#173968]">Zu jedem Ihrer Dienste finden Sie hier den entsprechenden Dienstvertretungsvertrag, den Sie sich für Ihre Unterlagen herunterladen können.</div>
                            {/* <div className="flex justify-center items-center py-12">
                                PAGINATION UI HERE
                            </div> */}
                            <main className="user-table-container">
                                {/* //table */}
                                {/* //table */}
                                <main className="user-table-container">
                                    {/* //table */}
                                    <table className="fixed_headers">
                                        <thead>
                                            <tr className="special">
                                                <th>Diensttyp</th>
                                                <th>Dienststart</th>
                                                <th>Dienstende</th>
                                                <th>Dienstgebiet</th>
                                                <th>Bestätigt</th>
                                                <th>Ansehen</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {isData && fetchedUsers && fetchedUsers.length > 0 ? (
                                                fetchedUsers.map((user, i) => {
                                                    return (
                                                        <tr key={i}>
                                                            <td>{user.user_role === 3 ? "customer" : "Doctor"}</td>
                                                            <td>{user.first_name}</td>
                                                            <td>{user.last_name}</td>
                                                            <td>{user.customer_number}</td>
                                                            <td>{user.email}</td>
                                                            <td>{user.verified === true ? 'Verified' : 'Not verified'}</td>
                                                            <td className="table-btn-div">
                                                                <Link href={`/operators/operator_single_userId/${user.id}`}>
                                                                    <button className="table-btn">
                                                                        <HiSearch />
                                                                    </button>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    );
                                                })
                                            ) : (
                                                <tr className='flex justify-center items-center w-full py-16 text-3xl'>
                                                    <td className='empty_container-message'>
                                                        Keine Daten geladen
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>

                                    <div className="pagination-container">
                                        <div className="lines-per-page">
                                            <span className="drop-down-text">Zeilen pro Seite</span>
                                            <select
                                                className="select-pagination"
                                                onChange={(e) => setRecordPerPage(parseInt(e.target.value))}
                                            >
                                                <option
                                                    className="default-select"
                                                    value={recordPerPage}
                                                    disabled
                                                    hidden
                                                >
                                                    {recordPerPage}
                                                </option>
                                                <option value="25">25</option>
                                                <option value="50">50</option>
                                                <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div className="pagination-info">
                                            <span className="drop-down-text">{` ${firstIndex + 1
                                                } - ${lastIndex} of ${SampleData.length}`}</span>
                                        </div>
                                        <nav>
                                            <ul className="pagination">
                                                <li className="page-item-outline">
                                                    <Link href={'#'} className="page-link" onClick={prevPage}>
                                                        <FaChevronLeft className="pagination-arrow" />
                                                    </Link>
                                                </li>
                                                {numbers.map((n, i) => (
                                                    <li
                                                        key={i}
                                                        className={`page-item ${currentPage === n ? 'active-page' : ''
                                                            }`}
                                                    >
                                                        <Link
                                                            href={'#'}
                                                            className="page-link"
                                                            onClick={() => changeCPage(n)}
                                                        >
                                                            {n}
                                                        </Link>
                                                    </li>
                                                ))}
                                                <li className="page-item-outline">
                                                    <Link href={'#'} className="page-link" onClick={nextPage}>
                                                        <FaChevronRight className="pagination-arrow" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    {/* //table */}
                                </main>
                            </main>
                            {/* <Table /> */}
                            {/* //Table of first section */}
                            {/* //Table of first section */}
                            {/* //Table of first section */}
                        </div>
                    </div>
                    {/* //FirstSection */}
                    {/* //SecondSection */}
                    {/* //SecondSection */}
                    {/* //SecondSection */}
                    {/* //SecondSection */}
                    {/* //SecondSection */}
                    <div className={`SecondActiveLinkSection`} style={{ display: secondSectionState }}>
                        <div className="pt-20 pb-12 pl-16 pr-28">
                            <div className="text-3xl mb-8 font-[500] text-[#20416E]">Ihre Rechnungsvorlagen</div>
                            <div className="text-[#173968]">Zu jedem Dienst, den Sie über arztpool vermittelt bekommen und der vom Kunden abgeschlossen wurde, finden Sie hier eine Rechnungsvorlage mit allen relevanten Daten für den Dienst.</div>
                            {/* <div className="flex justify-center items-center py-12">
                                PAGINATION UI HERE
                            </div> */}
                            <main className="user-table-container">
                                {/* //table */}
                                {/* //table */}
                                <main className="user-table-container">
                                    {/* //table */}
                                    <table className="fixed_headers">
                                        <thead>
                                            <tr className="special">
                                                <th>Diensttyp</th>
                                                <th>Dienststart</th>
                                                <th>Dienstende</th>
                                                <th>Dienstgebiet</th>
                                                <th>Bestätigt</th>
                                                <th>Ansehen</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {isData && fetchedUsers && fetchedUsers.length > 0 ? (
                                                fetchedUsers.map((user, i) => {
                                                    return (
                                                        <tr key={i}>
                                                            <td>{user.user_role === 3 ? "customer" : "Doctor"}</td>
                                                            <td>{user.first_name}</td>
                                                            <td>{user.last_name}</td>
                                                            <td>{user.customer_number}</td>
                                                            <td>{user.email}</td>
                                                            <td>{user.verified === true ? 'Verified' : 'Not verified'}</td>
                                                            <td className="table-btn-div">
                                                                <Link href={`/operators/operator_single_userId/${user.id}`}>
                                                                    <button className="table-btn">
                                                                        <HiSearch />
                                                                    </button>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    );
                                                })
                                            ) : (
                                                <tr className='flex justify-center items-center w-full py-16 text-3xl'>
                                                    <td className='empty_container-message'>
                                                        Keine Daten geladen
                                                    </td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>

                                    <div className="pagination-container">
                                        <div className="lines-per-page">
                                            <span className="drop-down-text">Zeilen pro Seite</span>
                                            <select
                                                className="select-pagination"
                                                onChange={(e) => setRecordPerPage(parseInt(e.target.value))}
                                            >
                                                <option
                                                    className="default-select"
                                                    value={recordPerPage}
                                                    disabled
                                                    hidden
                                                >
                                                    {recordPerPage}
                                                </option>
                                                <option value="25">25</option>
                                                <option value="50">50</option>
                                                <option value="100">100</option>
                                            </select>
                                        </div>
                                        <div className="pagination-info">
                                            <span className="drop-down-text">{` ${firstIndex + 1
                                                } - ${lastIndex} of ${SampleData.length}`}</span>
                                        </div>
                                        <nav>
                                            <ul className="pagination">
                                                <li className="page-item-outline">
                                                    <Link href={'#'} className="page-link" onClick={prevPage}>
                                                        <FaChevronLeft className="pagination-arrow" />
                                                    </Link>
                                                </li>
                                                {numbers.map((n, i) => (
                                                    <li
                                                        key={i}
                                                        className={`page-item ${currentPage === n ? 'active-page' : ''
                                                            }`}
                                                    >
                                                        <Link
                                                            href={'#'}
                                                            className="page-link"
                                                            onClick={() => changeCPage(n)}
                                                        >
                                                            {n}
                                                        </Link>
                                                    </li>
                                                ))}
                                                <li className="page-item-outline">
                                                    <Link href={'#'} className="page-link" onClick={nextPage}>
                                                        <FaChevronRight className="pagination-arrow" />
                                                    </Link>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    {/* //table */}
                                </main>
                            </main>
                            {/* //Table of first section */}
                            {/* //Table of first section */}
                            {/* //Table of first section */}
                        </div>
                    </div>
                    {/* //SecondSection */}
                </div>
            </div>
        </>
    )
    function prevPage() {
        if (changeCPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    function changeCPage(id) {
        setCurrentPage(id)
    }
    function nextPage() {
        if (changeCPage !== npage) {
            setCurrentPage(currentPage + 1)
        }
    }
}

export default Page;
