'use client'
import React, { useEffect, useState } from 'react'
import './DynamicTable.css'
import { FaChevronRight } from 'react-icons/fa'
import { FaChevronLeft } from 'react-icons/fa'
import { HiSearch } from 'react-icons/hi'
// import SampleServices from '../../DATAA/ServicesData/ServicesData'
import SampleServices from '@/app/operators/(components)/ServicesData'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import axios from 'axios'

const DynamicTable = ({ sendProp, DatesData }) => {
  // console.log(DatesData);
  const [currentPage, setCurrentPage] = useState(1)
  const [recordPerPage, setRecordPerPage] = useState(25)
  const lastIndex = currentPage * recordPerPage
  const firstIndex = lastIndex - recordPerPage
  const records = SampleServices.slice(firstIndex, lastIndex)
  const npage = Math.ceil(SampleServices.length / recordPerPage)
  const numbers = [...Array(npage + 1).keys()].slice(1)
  //API Integration
  const [fetchedServices, setFetchedServices] = useState([]);
  const [isData, setIsData] = useState(false);
  const url = process.env.NEXT_PUBLIC_BACK_END_API_URL;
  const currentUser = useSelector((state) => state.user?.currentUser);
  // console.log(currentUser);
  const userAccessToken = currentUser.accessToken;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/api/user/v1/user_related_services?user_id=53&page_no=1&from_date=${DatesData.start_date}&expiry_date=${DatesData.end_date}&page_limit=25`, { headers: { Authorization: `Bearer ${userAccessToken}` } });
        setFetchedServices(response.data.data.users);
        console.log(fetchedServices);
        if (fetchedServices.length > 0) {
          setIsData(true)
        } else {
          setIsData(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error
      }
    };
    if (sendProp) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sendProp, DatesData, currentUser.role, url]);
  return (
    <>
      <table className="table-container">
        <thead>
          <tr className="special">
            <th>Dienstart</th>
            <th>Dienststart</th>
            <th>Dienstende</th>
            <th>Dienstgebiet</th>
            <th>Bundesland</th>
            <th>Status</th>
            <th>Aktionen</th>
          </tr>
        </thead>
        <tbody>
          {isData && fetchedServices && fetchedUsers.length > 0 ? (
            fetchedUsers.map((service, i) => {
              return (
                <tr key={i}>
                  <td>{service.roll}</td>
                  <td>{service.first_name}</td>
                  <td>{service.last_name}</td>
                  <td>{service.customer_number}</td>
                  <td>{service.email_address}</td>
                  <td>{service.verified === true ? 'Verified' : 'Not verified'}</td>
                  <td className="table-btn-div">
                    <button className="table-btn">
                      <HiSearch />
                    </button>
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
            } - ${lastIndex} of ${SampleServices.length}`}</span>
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

export default DynamicTable;
