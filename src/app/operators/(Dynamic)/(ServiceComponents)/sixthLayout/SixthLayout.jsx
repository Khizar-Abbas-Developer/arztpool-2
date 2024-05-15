import React from 'react';
import "./SixthLayout.css";
import { FaMinusCircle } from 'react-icons/fa';

const SixthLayout = () => {
    return (
        <>
            <main className="users-container-servicest-main">
                <div className="heading-container">Vertreter</div>
                <hr className='mb-4 mt-2' />
                <div className="row mt-2">
                    <div className="col-lg-4 col-md-6 col-sm-12 d-flex flex-column ps-4">
                        <h5 className='fw-bold mb-4'>Dr. med. Ulf Gemander</h5>
                        <p>Bornaer Chaussee 7A</p>
                        <p>04416 Markkleeberg</p>
                        <p>Sachsen</p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <h5 className='fw-bold'>Kundennummer</h5>
                        <p>50101</p>
                        <h5 className='fw-bold mt-4'>Vertreter Honorar</h5>
                        <p>66€/Std.</p>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12">
                        <p className='mb-4'>gemandu@gmx.de</p>
                        <p>015146459318</p>
                        <p>015146459318</p>
                    </div>
                </div>
                <div className="mt-4">
                    <div className="flex justify-between items-center my-2">
                        <div className="flex gap-8">
                            <div className="btn-1 border-1 d-flex px-5 py-2 justify-content-center gap-2 rounded align-items-center">
                                <FaMinusCircle className="plus-icons" />
                                <span>Vertreter entfernen</span>
                            </div>
                        </div>
                        <div className="flex justify-end gap-4 mt-6 mb-3 mx-4">
                            <div className="flex justify-end items-center">
                                <div className="flex justify-center items-center border h-8 w-14 py-2 cursor-pointer rounded-md border-black">
                                    <svg data-v-d77c810e="" className="w-full h-full text-black svg-inline--fa fa-search fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default SixthLayout;