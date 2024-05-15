import RepresentativeHeader from '@/app/_components/header';
import React from 'react'

const layout = ({ children }) => {
  return (
    <>
      <RepresentativeHeader />
      {children}
    </>
  )
}

export default layout;