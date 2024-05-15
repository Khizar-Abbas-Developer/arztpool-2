
'use client'
import Image from 'next/image'
import Modal from '@/app/_components/home/modals/registrationType';
import '@/assets/css/_components/home/header.css';
import hamburgerIcon from '@/../public/icons/3.png'
import Link from 'next/link'
import { useState } from 'react'

function DefaultHeader() {
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
  
  const navLinks = [
    { id: 1, name: 'Produkte', href: '#' },
    { id: 2, name: 'Wissen', href: '#' },
    { id: 3, name: 'Unsere Experten', href: '#' },
    { id: 4, name: 'Top Themen', href: '#' },
    { id: 5, name: 'Preise', href: '#' },
  ]
  return (
    <>

      <div className="navbar-container container shadow-none" style={{ boxShadow: "none" }}>
        <div className="link-container">
          <Link href={'/'}>
            <Image src={'/arztpool.svg'} width={232} height={232} className='w-auto h-auto' alt="logo" priority />
          </Link>
        </div>
        <div className="two-separate-links">
          <Link href={"/operators/operator_services"}>
            <button className="operator-text-btn-s" style={{ textTransform: "capitalize" }}>Operator</button>
          </Link>
          <Link href={"/representative/dashboard"}>
            <button className="modal-btn">Representative</button>
          </Link>
          <Link href={"/customer/dashboard"}>
            <button className="modal-btn">Customer</button>
          </Link>
          <button onClick={toggleModalFunction} className="modal-btn" style={{ textTransform: "capitalize" }}>
            Register
          </button>
        </div>
      </div>
      {isModalOneVisible ? <Modal clickFunctionProp={toggleModal} /> : ''}
    </>
  )
}

export default DefaultHeader;
