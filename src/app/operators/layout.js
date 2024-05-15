import React from 'react'
import '@/assets/css/_components/layout.css'
import Sidebar from '../operators/(components)/Sidebar'
import { IoMdFingerPrint } from 'react-icons/io'
import Header from '../operators/(components)/header';
import OperatorHeader from '@/app/operators/(components)/header';

const layout = ({ children }) => {
  return (
    <>
      <OperatorHeader />
      <div className="parent-div">
        <div className="main_container">
          <Sidebar />
          <div className="body-container">
            {children}
          </div>
        </div>
      </div>
      {/* <div className="fingerprint_div">
          <IoMdFingerPrint className="fingerprint-icon" />
        </div> */}
    </>
  )
}

export default layout;