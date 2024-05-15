'use client'
import './users.css'
// import Table from '@/app/(Operator_layout)/components/TABLES/Table/Table'
import Input from '@/app/_components/Input';
import * as React from 'react'
import Button from '@mui/joy/Button'
import Select from '@mui/joy/Select'
import Option from '@mui/joy/Option'
import Stack from '@mui/joy/Stack'
//select
import 'react-datepicker/dist/react-datepicker.css'
import inputIcon from '@/../public/icons/2.png'
import Image from 'next/image'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs';
//
import axios from 'axios';
import { useSelector } from 'react-redux'
import { FaChevronRight } from 'react-icons/fa'
import { FaChevronLeft } from 'react-icons/fa'
import { HiSearch } from 'react-icons/hi'
import SampleData from "../../operators/(components)/userDummyData";
import Link from 'next/link'
import { useState } from 'react'
import { useEffect } from 'react'
import { Form } from 'react-bootstrap';
import { ClipLoader } from 'react-spinners';
import toast from 'react-hot-toast';

const UserManagement = () => {
  const [loading, setLoading] = useState(true);
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
  const userAccessToken = currentUser?.accessToken;
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
      const urlP = `${url}/api/user/v1/user_list?user_role=${data.role}&keyword=${data.keyword}&page_no=${currentPage}&page_limit=${recordPerPage}`;
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
  const handleSelectChange = (option) => {
    setData({ ...data, role: option });
  };
  return (
    <>
      <main className="users-container">
        <form className="sevices-fields-container" onSubmit={handleSearchData}>
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 my-3">
              <div className="sub-container" style={{ width: "100%" }}>
                <div className="entryarea">
                  <input
                    className='input-item-k'
                    type="text"
                    name={"keyword"}
                    value={data.keyword}
                    onChange={handleInputChange}
                    required
                    autoComplete="off"
                  />
                  <div className="labelline bg-transparent">
                    {"Suche in Vorname, Nachname, E-Mail und Kundennummer..."}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 my-3">
              <div className="set z-50">
                <Select
                  placeholder="All"
                  className="seletedf w-100"
                  sx={{
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
                  <Option value="1" onClick={() => handleSelectChange(1)}>Alle</Option>
                  <Option value="2" onClick={() => handleSelectChange(2)}>Kunden</Option>
                  <Option value="3" onClick={() => handleSelectChange(3)}>Vertreter</Option>
                </Select>
              </div>
            </div>
          </div>
          <div className="button-containers">
            <button className="btn">
              Suchen
            </button>
          </div>
        </form>
      </main>
      {/* //table */}
      <main className="user-table-containerkk">
        {/* //table */}
        <table className="fixed_headers11">
          <thead>
            <tr className="special">
              <th>Rollen</th>
              <th>Vorname</th>
              <th>Nachname</th>
              <th>Kundennummer</th>
              <th>E-Mail</th>
              <th>Verifiziert</th>
              <th>Aktionen</th>
            </tr>
          </thead>
          <tbody>
            {isData && fetchedUsers && fetchedUsers.length > 0 ? (
              fetchedUsers.map((user, i) => {
                return (
                  <tr key={i}>
                    <td>{user.user_role === 2 ? "customer" : "Representative"}</td>
                    <td>{user.first_name}</td>
                    <td>{user.last_name}</td>
                    <td>{user.customer_number}</td>
                    <td>{user.email}</td>
                    <td>{user.status === 1 ? 'Verified' : 'Not verified'}</td>
                    <td className="table-btn-div">
                      {user.user_role === 2 ? (
                        <>
                          <Link href={`/operators/operator_single_userId/customer/${user.id}`}>
                            <button className="table-btn">
                              <HiSearch />
                            </button>
                          </Link>
                        </>
                      ) : (
                        <>
                          <Link href={`/operators/operator_single_userId/representative/${user.id}`}>
                            <button className="table-btn">
                              <HiSearch />
                            </button>
                          </Link>
                        </>
                      )}
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
              } - ${lastIndex} of ${fetchedUsers.length}`}</span>
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
        {/* <Table /> */}
      </main>
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

export default UserManagement
