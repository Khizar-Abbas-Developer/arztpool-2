'use client'
import React from 'react'
import Select from '@mui/joy/Select'
import './services.css'
import Input from '@/app/_components/Input';
import { FaPlusCircle } from 'react-icons/fa'
import Table2 from '@/app/operators/(components)/ServicesTable';
import Datepicker from 'react-datepicker'
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
//select
import Button from '@mui/joy/Button'
import Option from '@mui/joy/Option'

//select
import 'react-datepicker/dist/react-datepicker.css'
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import ServiceModal from '@/app/operators/(components)/modals/ServiceModal'
//
import { useEffect, useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { FaChevronLeft } from 'react-icons/fa'
import { HiSearch } from 'react-icons/hi'

import Link from 'next/link'
import { useSelector } from 'react-redux'
import axios from 'axios';
import toast from 'react-hot-toast'

const ServicePage = () => {
  const [listOfFederalStates, setListOfFederalStates] = useState([]);
  const [isModalOneVisible, setIsModalOneVisible] = useState(false)
  const toggleModalFunction = () => {
    if (isModalOneVisible === false) {
      setIsModalOneVisible(!isModalOneVisible)
    }
  }
  const toggleModal = () => {
    '{'
    setIsModalOneVisible(!isModalOneVisible)
  }
  const [userData, setUserData] = useState({});
  const [data, setData] = useState({
    from_date: "04-04-2024",
    till_date: "05-04-2024",
    federal_state: undefined,
    service_type: 0,
    assigned_status: 0,
    published_status: 0,
    completed_status: 0
  })
  const [fetchedServices, setFetchedServices] = useState([]);
  const [isData, setIsData] = useState(false);
  const url = process.env.NEXT_PUBLIC_BACK_END_API_URL;
  const currentUser = useSelector((state) => state.user?.currentUser);
  // console.log(currentUser);
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
  const records = fetchedServices.slice(firstIndex, lastIndex)
  const npage = Math.ceil(fetchedServices.length / recordPerPage)
  const numbers = [...Array(npage + 1).keys()].slice(1)

  useEffect(() => {
    const fetchFederalStates = async () => {
      const response = await axios.get(`${url}/api/v1/federal_states_list`);
      setListOfFederalStates(response.data.data)
    }
    fetchFederalStates();
  }, [url])
  // const numbers = Array.from({ length: npage }, (_, index) => index + 1); // Generating array of numbers dynamically
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleStartDate = (newDate) => {
    setData({
      ...data,
      from_date: newDate ? dayjs(newDate).format('YYYY-MM-DD') : '' // Format the date as needed
    });
  };
  const handleEndDate = (newDate) => {
    setData({
      ...data,
      till_date: newDate ? dayjs(newDate).format('YYYY-MM-DD') : '' // Format the date as needed
    });
  };
  const handleFederalState = (option) => {
    setData({ ...data, federal_state: option });
  };
  const handleServiceType = (option) => {
    setData({ ...data, service_type: option });
  };
  const handleAssignedStatus = (option) => {
    setData({ ...data, assigned_status: option });
  };
  const handlePublishedStatus = (option) => {
    setData({ ...data, published_status: option });
  };
  const handleCompletedStatus = (option) => {
    setData({ ...data, completed_status: option });
  };

  const handleSearchServices = async (e) => {
    e.preventDefault();
    try {
      console.log(data);
      const userAccessToken = currentUser.accessToken;
      const urlP = `${url}/api/service/v1/services_list?from_date=${data.from_date}&till_date=${data.till_date}&service_type=${data.service_type}&assigned_status=${data.assigned_status}&published_status=${data.published_status}&completed_status=${data.completed_status}&page_no=${currentPage}&page_limit=${recordPerPage}`;
      const response = await axios.get(urlP, { headers: { Authorization: `Bearer ${userAccessToken}` } });
      setFetchedServices(response.data.data.services);
      setIsData(true);
      if (response.data.data.services.length === 0) {
        toast.error("No service found")
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  console.log(fetchedServices);
  const date = new Date(fetchedServices.from_date);
  const formattedDate = `${date.getDate().toString().padStart(2, '0')}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getFullYear()}`;
  return (
    <>
      <div className="over-services">
        <main className="users-container" style={{ width: 'auto' }}>
          <form className="" onSubmit={handleSearchServices}>
            <div className="row">
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 ">
                <span className='label-span'>Dienstbeginn</span>
                <LocalizationProvider dateAdapter={AdapterDayjs} className='tempo-0' style={{ Width: "100%" }}>
                  <DemoContainer components={['DesktopDatePicker']} className='tempo' style={{ Width: "100%" }}>
                    <DesktopDatePicker
                      className="datep w-100"
                      style={{ Width: "100%" }}
                      name='from_date'
                      onChange={(newDate) => handleStartDate(newDate)}
                      defaultValue={dayjs(`${data.from_date}`)}
                      format="DD MM YYYY"
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 ">
                <span className='label-span'>Dienstende</span>
                <LocalizationProvider dateAdapter={AdapterDayjs} style={{ Width: "100%" }}>
                  <DemoContainer components={['DesktopDatePicker']} style={{ Width: "100%" }}>
                    <DesktopDatePicker
                      className="datep w-100"
                      style={{ Width: "100%" }}
                      name='till_date'
                      onChange={(newDate) => handleEndDate(newDate)}
                      defaultValue={dayjs(`${data.till_date}`)}
                      format="DD MM YYYY"
                    />
                  </DemoContainer>
                </LocalizationProvider>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 pe-4 my-2">
                <span className='label-span'>Bundesland</span>
                <Select
                  placeholder="Fahr- und Sitzdienste"
                  className="seletedf me-3 w-100"
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
                  {listOfFederalStates.map((item, i) => {
                    return (
                      <Option key={i} value={item.id} onClick={() => handleFederalState(item.id)}>{item.title}</Option>
                    )
                  })}
                </Select>
              </div>

              {/* </div>
            <div className="row mb-3 mt-3"> */}

              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 flex-col my-2">
                <span className='label-span'>Diensttyp</span>
                <Select
                  placeholder="Fahr- und Sitzdienste"
                  className="seletedf me-3"
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
                  <Option value="0" onClick={() => handleServiceType(0)}>Fahr- und Sitzdienste</Option>
                  <Option value="1" onClick={() => handleServiceType(1)}>Fahrdienst</Option>
                  <Option value="2" onClick={() => handleServiceType(2)}>Sitzdienst</Option>
                </Select>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 flex-col my-2">
                <span className='label-span'>Zugewiesen</span>
                <Select
                  placeholder="Keine Auswahl"
                  className="seletedf me-3"
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
                  <Option value="0" onClick={() => handleAssignedStatus(0)}>Keine Auswahl</Option>
                  <Option value="1" onClick={() => handleAssignedStatus(1)}>Zugewiesene Dienste</Option>
                  <Option value="2" onClick={() => handleAssignedStatus(2)}>Nicht zugewiesene Dienste</Option>
                </Select>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 flex-col my-2">
                <span className='label-span'>Veröffentlicht</span>
                <Select
                  placeholder="Keine Auswahl"
                  className="seletedf me-3"
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
                  <Option value="0" onClick={() => handlePublishedStatus(0)}>Keine Auswahl</Option>
                  <Option value="1" onClick={() => handlePublishedStatus(1)}>Veröffentlichte Dienste</Option>
                  <Option value="2" onClick={() => handlePublishedStatus(2)}>Nicht veröffentlichte Dienste</Option>
                </Select>
              </div>
              <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 flex-col my-2">
                <span className='label-span'>Abgeschlossen</span>
                <Select
                  placeholder="Keine Auswahl"
                  className="seletedf me-3"
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
                  <Option value="0" onClick={() => handleCompletedStatus(0)}>Keine Auswahl</Option>
                  <Option value="1" onClick={() => handleCompletedStatus(1)}>Abgeschlossene Dienste</Option>
                  <Option value="2" onClick={() => handleCompletedStatus(2)}>Nicht abgeschlossene Dienste</Option>
                </Select>
              </div>

            </div>
            <div className="d-flex justify-content-between gap-3 button-containers-alpha">
              <div className="btn-1" onClick={toggleModalFunction}>
                <FaPlusCircle className="plus-icons" />
                <span>Neuen Dienst anlegen</span>
              </div>
              <button className="btn-2">Suchen</button>
            </div>
          </form>
        </main>
        {isModalOneVisible ? <ServiceModal clickFunctionProp={toggleModal} /> : ''}
        {/* //table */}
        <main className="user-table-container">
          {/* //table */}
          <table className="table-container">
            <thead>
              <tr className="special">
                <th>Dienstart</th>
                <th>Kunde</th>
                <th>Kundennummer</th>
                <th>Dienststart</th>
                <th>Dienstende</th>
                <th>Dienstgebiet</th>
                <th>Bundesland</th>
                <th>Status</th>
                <th>Aktionen</th>
              </tr>
            </thead>
            <tbody>
              {isData && fetchedServices && fetchedServices.length > 0 ? (
                fetchedServices.map((service, i) => {
                  const date = new Date(service.from_date);
                  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: true };
                  const formattedDate = date.toLocaleString('en-US', options);

                  const tillDate = new Date(service.till_date);
                  const formattedTillDate = tillDate.toLocaleString('en-US', options);

                  return (
                    <tr key={i}>
                      <td>{service.service_type === 1 ? "Fahrdienst" : "Sitzdienst"}</td>
                      {/* <td>{`${service.user.title} ${service.user.first_name} ${service.user.last_name}`}</td>
                      <td style={{ paddingLeft: "15px" }}>{service.user.customer_number}</td> */}
                      <td>{service.user ? `${service.user.title} ${service.user.first_name} ${service.user.last_name}` : 'No User Data'}</td>
                      <td>{service.user ? service.user.customer_number : 'No Customer Number'}</td>

                      <td>{formattedDate}</td>
                      <td>{formattedTillDate}</td>
                      <td>{service.service_area === null ? "Not available" : service.service_area}</td>
                      <td>{service.federal_state === null ? "Not available" : service.federal_state}</td>
                      <td>Not sure</td>
                      <td className="table-btn-div">
                        <Link href={`/operators/operator_single_service/${service.id}`}>
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
                } - ${lastIndex} of ${fetchedServices.length}`}</span>
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
      </div>
    </>
  )
  function prevPage() {
    if (currentPage !== 1) {
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

export default ServicePage;