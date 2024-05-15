'use client'
import React, { useState } from 'react'
import './AllInclusiveTable.css'
import { FaChevronRight } from 'react-icons/fa'
import { FaChevronLeft } from 'react-icons/fa'
import { HiSearch } from 'react-icons/hi'
import SampleInclusiveData from '@/app/operators/(components)/InclusiveData'
import Link from 'next/link'

const AllInclusiveServicesTable = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [recordPerPage, setRecordPerPage] = useState(25)
  const lastIndex = currentPage * recordPerPage
  const firstIndex = lastIndex - recordPerPage
  const records = SampleInclusiveData.slice(firstIndex, lastIndex)
  const npage = Math.ceil(SampleInclusiveData.length / recordPerPage)
  const numbers = [...Array(npage + 1).keys()].slice(1)
  return (
    <>
      <table className="inclusive-container">
        <thead>
          <tr className="special">
            <th>Dienstart</th>
            <th>Kunde</th>
            <th>Kundennummer</th>
            <th>Eingetragen am</th>
            <th>Dienststart</th>
            <th>Dienstende</th>
            <th>Dienstgebiet</th>
            <th>Bundesland</th>
            <th>Status</th>
            <th>Aktionen</th>
          </tr>
        </thead>
        <tbody>
          {records.map((data, i) => {
            return (
              <tr key={i}>
                <td>{data['Type of service']}</td>
                <td>{data['customer']}</td>
                <td>{data['Customer number']}</td>
                <td>{data['Service start']}</td>
                <td>{data['Service end']}</td>
                <td>{data['Service area']}</td>
                <td>{data['Federal states'] ? 'Yes' : 'No'}</td>
                <td>{data['Federal verification']}</td>
                <td>{data['status']}</td>
                <td className="table-btn-div">
                  <button className="table-btn">
                    <HiSearch />
                  </button>
                </td>
              </tr>
            )
          })}
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
            } - ${lastIndex} of ${SampleInclusiveData.length}`}</span>
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

export default AllInclusiveServicesTable
