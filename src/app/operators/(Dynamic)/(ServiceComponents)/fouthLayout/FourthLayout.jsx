import React from 'react';
import "./FouthLayout.css";
import { FaSearch } from "react-icons/fa";
import Link from 'next/link';


const FourthLayout = ({ permanent_establishment, userFurnishings }) => {
    return (
        <>
            <main className="users-container-servicest-main">
                <div className="heading-container">Kunde</div>
                <hr className='my-4' />
                <div className="">
                    <div className="flex text-[16px] mb-4 gap-[160px] ml-4">
                        <div className="">
                            <p className='mb-3 font-semibold'>Einrichtung</p>
                            <p>{userFurnishings || ""}</p>
                        </div>
                        <div className="">
                            <p className='mb-3 font-semibold'>Betriebsstätte</p>
                            <p>{permanent_establishment || ""}</p>
                        </div>
                        <div className="">
                            <p className='mb-3 font-semibold'>zu vertretendender Arzt</p>
                            <p>Franziska Juch</p>
                            <p>LANR:   013468751</p>
                        </div>
                    </div>
                </div>
                <Link href={`/operators/operator_single_userId/customer/${4}`}>
                    <div className="flex justify-end items-center p-10">
                        <div className="flex justify-center items-center border h-8 w-14 py-2 cursor-pointer rounded-md border-black">
                            <svg data-v-d77c810e="" className="w-full h-full text-black svg-inline--fa fa-search fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                        </div>
                    </div>
                </Link>
            </main>
        </>
    )
}

export default FourthLayout;