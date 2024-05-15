
'use client'
import Image from 'next/image'
import Modal from '@/app/_components/home/modals/login';
import '@/assets/css/_components/header.css';
import hamburgerIcon from '@/../public/icons/3.png'
import Link from 'next/link'
import { useState } from 'react'

function RepresentativeHeader() {
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
        <div className="navbar-container">
            <div className="link-container">
                <Link href={'/'}>
                    <Image src={'/arztpool.svg'} width={232} height={232} className='w-auto h-auto' alt="logo" priority />
                </Link>
            </div>
            <div className="two-separate-links">
                <Link href={"/representative/dashboard"}>
                    <button className="operator-text-btn-s" style={{ textTransform: "capitalize" }}>Dashboard</button>
                </Link>
                <Link href={"/representative/services/overview"}>
                    <button className="operator-text-btn-s" style={{ textTransform: "capitalize" }}>Dienste</button>
                </Link>
                <Link href={"/representative/documents"}>
                    <button className="operator-text-btn-s" style={{ textTransform: "capitalize" }}>Dokumente</button>
                </Link>
                <Link href={"/representative/messages"}>
                    <button className="operator-text-btn-s" style={{ textTransform: "capitalize" }}>
                        <div className="w-6 h-6">
                            <svg data-v-8d160b62="" className="text-[#173968] h-full w-full svg-inline--fa fa-bell fa-w-14 mdi v-icon notranslate v-theme--light v-icon--size-small" aria-hidden="true" focusable="false" data-prefix="far" data-icon="bell" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M439.39 362.29c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71zM67.53 368c21.22-27.97 44.42-74.33 44.53-159.42 0-.2-.06-.38-.06-.58 0-61.86 50.14-112 112-112s112 50.14 112 112c0 .2-.06.38-.06.58.11 85.1 23.31 131.46 44.53 159.42H67.53zM224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64z"></path></svg>
                        </div>
                    </button>
                </Link>
                <Link href={"/operators/operator_services"} className='-mr-16'>
                    <button className="operator-text-btn-s bg-[#173968] rounded-sm px-8 py-[11px]" style={{ textTransform: "capitalize" }}>
                        <div className="flex gap-2 justify-center items-center">
                            <p className='text-white'>Mein arztpool</p>
                            <div className="w-6 h-6"><svg data-v-8d160b62="" className="w-full h-full text-white svg-inline--fa fa-user-md fa-w-14 mdi v-icon notranslate v-theme--light v-icon--size-default" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="user-md" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm0-224c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96zm93.7 256.1c-33.8-1-44.3 15.9-93.7 15.9-49.3 0-59.8-16.9-93.6-15.9C58 290.2 0 349.5 0 422.4V504c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-81.6c0-54.3 42.6-98.4 96-101.8v81.7c-23.1 6.9-40 28.3-40 53.7 0 30.9 25.1 56 56 56s56-25.1 56-56c0-25.4-16.9-46.8-40-53.7v-76.9c20.8 6.8 42.2 10.5 64 10.5 21.8 0 43.2-3.7 64-10.5v68.8c-28.2 7.5-48 34.5-48 64.6V488c0 4.2 1.7 8.3 4.7 11.3l10.3 10.3c3.1 3.1 8.2 3.1 11.3 0l11.3-11.3c3.1-3.1 3.1-8.2 0-11.3l-5.7-5.7V456c0-19.4 17.4-34.8 37.4-31.6 15.7 2.6 26.6 17.4 26.6 33.3v23.6l-5.7 5.7c-3.1 3.1-3.1 8.2 0 11.3l11.3 11.3c3.1 3.1 8.2 3.1 11.3 0l10.3-10.3c3-3 4.7-7.1 4.7-11.3v-32c0-29.7-20.5-54.5-48-61.6v-73.7c53.4 3.4 96 47.5 96 101.8V504c0 4.4 3.6 8 8 8h16c4.4 0 8-3.6 8-8v-81.6c.2-72.9-57.8-132.2-130.1-134.3zM168 456c0 13.2-10.8 24-24 24s-24-10.8-24-24 10.8-24 24-24 24 10.8 24 24z"></path></svg></div>
                        </div>
                    </button>
                </Link>
            </div>
            {isModalOneVisible ? <Modal clickFunctionProp={toggleModal} /> : ''}
        </div>
    )
}

export default RepresentativeHeader;