import React from 'react'
import { MdErrorOutline } from "react-icons/md";

const TerminatedService = () => {
  return (
    <>
      <div className="bg-[#FDF0E6] border mb-4 flex h-[80px] justify-start items-center rounded-md">
        <div className="h-full flex justify-center items-center w-20">
          <MdErrorOutline className='text-3xl text-red-600' />
        </div>
        <div className="text-red-600">The service has been terminated.</div>
      </div>
      <div className="py-[26px] px-2 text-[#173968]">Finden Sie andere passende KV-Dienste und bewerben Sie sich in wenigen Schritten.</div>
      <div className="flex gap-4">
        <button className='flex rounded-md drop-shadow-lg text-[14px] py-[12px] px-10 border bg-[white] text-[#391768]'>Details zum Dienst anzeigen</button>
        <button className='flex rounded-md drop-shadow-lg text-[14px] py-[12px] px-10 border bg-[#ED6D05] text-white'>Weitere Dienste finden</button>
      </div>
    </>
  )
}

export default TerminatedService;