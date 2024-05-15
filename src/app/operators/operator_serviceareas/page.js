'use client'
import './ServiceArea.css'
import Input from '@/app/_components/Input'
import Table2 from '@/app/operators/(components)/ServicesTable';
//select
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
import dayjs from 'dayjs'
import { FaChevronLeft, FaChevronRight, FaPlusCircle } from 'react-icons/fa'
import Link from 'next/link'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import SampleData from "@/app/operators/(components)/userDummyData";
import { HiSearch } from 'react-icons/hi'
import ServiceAreaModal from '@/app/operators/(components)/modals/ServiceAreaModal'
import axios from 'axios'
import toast from 'react-hot-toast'

const ServiceArea = () => {
  const [listOfFederalStates, setListOfFederalStates] = useState([]);
  const [isModalOneVisible, setIsModalOneVisible] = useState(false)
  const [userData, setUserData] = useState({});
  const url = process.env.NEXT_PUBLIC_BACK_END_API_URL;
  const [data, setData] = useState({
    state_id: "",
  })
  useEffect(() => {
    const fetchFederalStates = async () => {
      const response = await axios.get(`${url}/api/v1/federal_states_list`);
      setListOfFederalStates(response.data.data)
    }
    fetchFederalStates();
  }, [url])
  const toggleModalFunction = () => {
    if (isModalOneVisible === false) {
      setIsModalOneVisible(!isModalOneVisible)
    }
  }
  const toggleModal = () => {
    setIsModalOneVisible(!isModalOneVisible)
  }
  const [fetchedServicesAreas, setFetchedServicesAreas] = useState([]);
  const [isData, setIsData] = useState(false);
  const currentUser = useSelector((state) => state.user?.currentUser)
  useEffect(() => {
    if (currentUser) {
      setUserData(currentUser);
    }
  }, [currentUser]);
  const userAccessToken = currentUser?.accessToken;
  const [currentPage, setCurrentPage] = useState(1)
  const [recordPerPage, setRecordPerPage] = useState(25)
  const lastIndex = currentPage * recordPerPage
  const firstIndex = lastIndex - recordPerPage
  const records = SampleData.slice(firstIndex, lastIndex)
  const npage = Math.ceil(fetchedServicesAreas.length / recordPerPage)
  const numbers = Array.from({ length: npage }, (_, index) => index + 1); // Generating array of numbers dynamically
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleSearchData = async (e) => {
    e.preventDefault();
    if (!data.state_id && data.state_id !== 0) {
      return toast.error("Please select a state first");
    }
    try {
      const urlP = `${url}/api/v1/service_area_list?state_id=${data.state_id}&page_no=${currentPage}&page_limit=${recordPerPage}`;
      const response = await axios.get(urlP, { headers: { Authorization: `Bearer ${userAccessToken}` } });
      setFetchedServicesAreas(response.data.data?.service_areas);
      setIsData(true);
    } catch (error) {
      console.error('Error fetching data:', error);
      console.log(error);
    }
  }
  const handleSelectChange = (option) => {
    setData({ ...data, state_id: option });
  };
  return (
    <>
      <form className="users-container" style={{ width: 'auto' }} onSubmit={handleSearchData}>
        <div className="sevices-fields-container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12">
              <Select
                placeholder="Bundesland"
                className="seletedf w-100"
                name='state_id'
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
                <Option value={""} onClick={() => handleSelectChange("")}>Bundesland</Option>

                {listOfFederalStates && listOfFederalStates.map((state, i) => (
                  <Option value={state.id} onClick={() => handleSelectChange(state.id)} key={i}>{state.title}</Option>
                ))}
              </Select>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between hm-button-row mt-4">
          <div className="btn-1 cursor-pointer" onClick={toggleModalFunction}>
            <FaPlusCircle className="plus-icons" />
            <span>Neues Dienstgebiet anlegen</span>
          </div>
          <button className="btn-2">Suchen</button>
        </div>
      </form>
      {isModalOneVisible ? <ServiceAreaModal clickFunctionProp={toggleModal} /> : ''}

      {/* //table */}
      <main className="user-table-container">
        {/* //table */}
        <table className="table-container">
          <thead>
            <tr className="special">
              <th>Name</th>
              <th>Bundesland</th>
              <th>Sitzdienste</th>
              <th>Fahrdienste</th>
              <th>Aktionen</th>
            </tr>
          </thead>
          <tbody>
            {isData && fetchedServicesAreas && fetchedServicesAreas.length > 0 ? (
              fetchedServicesAreas.map((serviceArea, i) => {
                return (
                  <tr key={i}>
                    <td>{serviceArea.surname}</td>
                    <td>{serviceArea.federal_state}</td>
                    <td>{serviceArea.seatingCount}</td>
                    <td>{serviceArea.drivingCount}</td>
                    <td className="table-btn-div">
                      <Link href={`/operators/operator_single_service_area/${serviceArea.id}`}>
                        <button className="table-btn">
                          <HiSearch />
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              })
            ) : (
              <div className='d-flex justify-content-center py-5 w-100'>
                Keine Daten geladen
              </div>

            )}
          </tbody>
        </table>
        <div className="paginations-container">
          <div className="liness-per-page">
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
              } - ${lastIndex} of ${fetchedServicesAreas.length}`}</span>
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
                  key={i + 1}
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
        {/* <Table2 /> */}
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

export default ServiceArea
