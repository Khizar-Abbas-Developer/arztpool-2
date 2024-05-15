import React from 'react';
import "./TenthLayout.css";
import { FaPlusCircle } from 'react-icons/fa';

const TenthLayout = () => {
    return (
        <>
            <main className="users-container-servicest-main-13">
                <div className="heading-container">Dienststatus</div>
                <hr className='mb-4 mt-2' />
                <div className="row mt-2">
                    <div className="col-lg-6">
                        <div className="">
                            <div className="sub-containerst-13">
                                <div className="flex flex-col gap-3">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start gap-3 items-center my-2 ml-6">
                    <div className="flex gap-8">
                        <div className="btn-1 border-1 d-flex px-[36px] py-2 justify-content-center gap-2 rounded align-items-center border-black">
                            <div className="w-4 h-4">
                                <svg data-v-d77c810e="" className="w-full h-full text-[#173968] svg-inline--fa fa-archive fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="archive" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M32 448c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V160H32v288zm160-212c0-6.6 5.4-12 12-12h104c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H204c-6.6 0-12-5.4-12-12v-8zM480 32H32C14.3 32 0 46.3 0 64v48c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16V64c0-17.7-14.3-32-32-32z"></path></svg>
                            </div>
                            <span className='text-[#173968]'>Dienst abschließen</span>
                        </div>
                    </div>
                    <div className="flex gap-8">
                        <div className="btn-1 border-1 d-flex px-[36px] py-2 justify-content-center gap-2 rounded align-items-center border-black">
                            <div className="w-4 h-4">
                                <svg data-v-d77c810e="" className="w-full h-full text-[#173968] svg-inline--fa fa-minus-circle fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="minus-circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z"></path></svg>
                            </div>
                            <span className='text-[#173968]'>Dienst löschen</span>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default TenthLayout;