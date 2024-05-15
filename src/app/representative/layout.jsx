import DoctorHeader from '@/app/_components/header';
import React from 'react'
import { IoMdFingerPrint } from 'react-icons/io';

const layout = ({ children }) => {
  return (
    <>
      <DoctorHeader />
      {children}
    </>
  )
}

export default layout;